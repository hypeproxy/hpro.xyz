/** @type {{rewrites(): Promise<{beforeFiles: [{destination: string, source: string}]}>, reactStrictMode: boolean, swcMinify: boolean}} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return {
			beforeFiles: [
				// These rewrites are checked after headers/redirects
				// and before all files including _next/public files which
				// allows overriding page files
				{
					source: '/:path*',
					destination: '/api/:path*'
				}
			],
			// afterFiles: [
			// 	// These rewrites are checked after pages/public files
			// 	// are checked but before dynamic routes
			// 	{
			// 		source: '/non-existent',
			// 		destination: '/somewhere-else'
			// 	}
			// ],
			// fallback: [
			// 	// These rewrites are checked after both pages/public files
			// 	// and dynamic routes are checked
			// 	{
			// 		source: '/:path*',
			// 		destination: `https://my-old-site.com/:path*`,
			// 	}
			// ]
		}
	},
	swcMinify: true
}

module.exports = nextConfig
