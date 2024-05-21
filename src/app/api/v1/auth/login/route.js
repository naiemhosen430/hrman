import User from "@/Models/User.Model";
import { dbconnect } from "@/Utils/mongo";
import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");

export async function POST(NextRequest) {
  await dbconnect();
  try {
    const userData = await NextRequest.json();

    if (userData.email === "" || userData.password === "") {
      return Response.json(
        {
          message: "Every feild required!",
          email: checkUser.email,
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    // checkinh user 
    const checkUser = await User.findOne({ email: userData.email });


    if (!checkUser) {
      return Response.json(
        {
          message: "You have no account!",
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    const checkPassword = await bcrypt.compare(userData.password, checkUser.password);

    if (!checkPassword) {
      return Response.json(
        {
          message: "Incorrect password!",
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    // preparing token for authorization 
    const userTokenData = {
      id: checkUser._id,
      role: checkUser.role,
      email: checkUser.email,
    };

    const token = jwt.sign(
        userTokenData,
      process.env.TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    // const refreshToken = jwt.sign(
    //     userTokenData,
    //   process.env.TOKEN_SECRET,
    //   { expiresIn: '1d' }
    // );

    // sending final success response 
    return Response.json({
      message: "Successfully logedin.",
      data: checkUser,
      token,
      statusCode: 200,
    },
    { status: 200 });
  } catch (error) {
    return Response.json({ message:error.message }, { status: 498 })
  }
}
