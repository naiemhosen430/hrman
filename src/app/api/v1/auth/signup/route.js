import User from "@/Models/User.Model";
import { dbconnect } from "@/Utils/mongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(NextRequest) {
  await dbconnect();
  const userData = await NextRequest.json();
  try {

    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      return Response.json(
        {
          message: "Every feild required!",
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    // getting user 
    const checkUser = await User.findOne({ email: userData.email });

    if (checkUser) {
      return Response.json(
        {
          message: "Email already used!",
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    // creating new user in database 
    const hashPass = bcrypt.hashSync(userData.password, 10);

    const userObj = {
      name: userData.name,
      email: userData.email,
      password: hashPass,
    };

    const newUser = User(userObj);
    await newUser.save();

    // preparing token for authorization 
    const userTokenData = {
      role: newUser.role,
      role: newUser.email,
      id: newUser._id,
    };

    const token = jwt.sign(
        userTokenData,
      process.env.TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    // const refreshToken = jwt.sign(
    //     userTokenData,
    //   process.env.TOKEN_SECRET,
    //   { expiresIn: '10000d' }
    // );


    // sending successfull response 
    return Response.json({
      message: "Successfully registered.",
      data: newUser,
      token,
      statusCode: 200,
    },
    { status: 200 });
  } catch (error) {
    // sending error response 
    return Response.json({ message:error?.message }, { status: 498 })

  }


}
