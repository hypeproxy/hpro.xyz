import type { NextApiRequest, NextApiResponse } from "next";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
	const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
	if (req.headers["accept"] == "application/json") {
		res.status(200).json({ ip });
	}
	else {
		res.status(200).send(ip);
	}
}