import type { NextApiRequest, NextApiResponse } from "next";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({
		"message": "hpro.xyz is a free tool powered by HypeProxy.io",
		endpoints: [
			"https://hpro.xyz/ip",
			"https://hpro.xyz/ua",
			"https://hpro.xyz/headers",
		]
	});
}