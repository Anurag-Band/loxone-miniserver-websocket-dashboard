import connectMiniserver from "@/app/helpers/connectMiniserver";
import { setSocket } from "@/app/helpers/socketStore";

export async function POST(req: Request, res: Response) {
  const json = await req.json();

  const data = json.body;

  const { ip_address, username, password } = data;

  try {
    const socket = await connectMiniserver({ ip_address, username, password });
    setSocket(socket);

    return Response.json({
      status: 200,
      message: "Connection Successful",
      data: res,
    });
  } catch (error) {
    return Response.json({
      status: 501,
      message: "Server Error",
      error: error,
    });
  }
}
