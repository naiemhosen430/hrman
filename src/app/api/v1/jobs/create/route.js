import Job from "@/Models/Job.Model";
import { checkAuthorization } from "@/Utils/checkAutorization";
import { dbconnect } from "@/Utils/mongo";


export async function POST(NextRequest) {
  await dbconnect();
  const jobsData = await NextRequest.json();
  try {

    // checking authentication 
    const userInfo = await checkAuthorization(NextRequest)

    if (!userInfo){
      return Response.json({ message:"unauthorized!" }, { status: 401 })
    }


    if (userInfo?.role !== "admin"){
      return Response.json({ message:"You can't create a job!" }, { status: 401 })
    }

    const preparedJobObj = {
        ...jobsData,
        creatorid: userInfo.id
    }


    const newJob = Job(preparedJobObj);
    await newJob.save();


    // sending successfull response 
    return Response.json({
      message: "Successfully job created.",
      data: newJob,
      statusCode: 200,
    },
    { status: 200 });
  } catch (error) {
    // sending error response 
    return Response.json({ message:error?.message }, { status: 498 })

  }


}
