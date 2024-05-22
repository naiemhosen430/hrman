import Job from "@/Models/Job.Model";
import { checkAuthorization } from "@/Utils/checkAutorization";
import { dbconnect } from "@/Utils/mongo";


export async function GET(request) {
  await dbconnect();
  try {

    // checking authentication 
    const userInfo = await checkAuthorization(request)

    let jobs 
    if (!userInfo){
        jobs = await Job.find()
    }


    jobs = await Job.find().select(
        '-apllicatorids -shortlistedids '
    )


    return Response.json({
      message: "Successfull.",
      data: jobs,
      statusCode: 200,
    },
    { status: 200 });
  } catch (error) {
    return Response.json({ message:error?.message }, { status: 498 })
  }


}
