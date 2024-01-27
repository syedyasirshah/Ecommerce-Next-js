/** @type {import('next').NextConfig} */
//const nextConfig = {};

//module.exports = nextConfig;
// module.exports = {
// 	images: {
// 		domains: ["image.tmdb.org"],
// 	},
// };
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.example.com",
				port: "",
				pathname: "/account123/**",
			},
		],
	},
};
