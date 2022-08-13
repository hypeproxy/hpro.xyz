import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => res
	.status(200)
	.send(Object.fromEntries(Object.entries(req.headers).filter(([key]) => !key.startsWith("x-vercel"))))