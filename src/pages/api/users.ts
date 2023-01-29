import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    users: [
      { code: 1, value: "Durward Reynolds" },
      { code: 2, value: "Kenton Towne" },
      { code: 3, value: "Therese Wunsch" },
      { code: 4, value: "Benedict Kessler" },
      { code: 5, value: "Katelyn Rohan" },
    ],
  });
}
