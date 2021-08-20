import { getSession } from "next-auth/client";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  //The code following code (const & if statement)
  //validates whether or not a user is authorized to use API
  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
}

export default handler;