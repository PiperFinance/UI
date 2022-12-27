import { type NextApiRequest, type NextApiResponse } from "next";

const swap = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(swap);
};

export default swap;
