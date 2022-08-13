/**
 * @type {{rewrites(): Promise<{beforeFiles: [{destination: string, source: string}], afterFiles: [{destination: string, source: string}]}>, redirects(): Promise<[{permanent: boolean, destination: string, source: string}]>, reactStrictMode: boolean, swcMinify: boolean}}
 */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://hypeproxy.io/ip',
				permanent: true
			}
		]
	},
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/:path*",
					destination: "/api/:path*"
				}
			],
			afterFiles: [
				{
					source: "/ua",
					destination: "/user-agent"
				}
			]
		}
	},
	swcMinify: true
}

module.exports = nextConfig
