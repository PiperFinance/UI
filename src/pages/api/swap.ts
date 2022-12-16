import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const swap = async (req: NextApiRequest, res: NextApiResponse) => {
  const swap = await prisma.example.findMany();
  res.status(200).json(swap);
};

export default swap;
