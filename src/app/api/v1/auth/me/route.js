import User from "@/Models/User.Model";
import { checkAuthorization } from "@/Utils/checkAutorization";
import { dbconnect } from "@/Utils/mongo";


export async function GET(request) {
  await dbconnect();
  try {

    // checking authentication 
    const userInfo = await checkAuthorization(request)

    if (!userInfo){
      return Response.json({ message:"unauthorized!" }, { status: 401 })
    }


    console.log({userInfo})
    const user = await User.findOne({_id: userInfo.id})
    console.log({user})


    return Response.json({
      message: "Successfull.",
      data: user,
      statusCode: 200,
    },
    { status: 200 });
  } catch (error) {
    return Response.json({ message:error?.message }, { status: 498 })

  }


}
