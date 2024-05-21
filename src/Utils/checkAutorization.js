import jwt from "jsonwebtoken";

export const checkAuthorization = async (request) => {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return Response.json({ message:"unauthorized!" }, { status: 401 })
    }

    const accessToken = authHeader.split(" ")[1];

    // Verify and decode the token
    let userInfo;
    try {
        userInfo = jwt.verify(accessToken, process.env.TOKEN_SECRET);
    } catch (error) {
        return Response.json({ message:"unauthorized!" }, { status: 401 })
    }

    return userInfo
}