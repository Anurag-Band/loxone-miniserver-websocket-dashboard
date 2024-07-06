import { getSocket } from "@/app/helpers/socketStore";

export async function POST(req: Request, res: Response) {
  const json = await req.json();

  const data = json.body;

  const { selectedMood } = data;

  const socket = getSocket();

  try {
    const LINK = `jdev/sps/io/1d043dbf-0321-eea3-ffffcb0481ff57c7/AI1\\/SET(LightingController;Moods;${selectedMood})`;

    const res = await socket.send(LINK);

    return Response.json({
      status: 200,
      message: "Mood Changed Successfully",
      data: res,
    });
  } catch (error) {
    return Response.json({
      status: 501,
      message: "Error in changing mood",
      error: error,
    });
  }
}

