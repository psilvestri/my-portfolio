/** @type {import('next').NextConfig} */
const nextConfig = {
	// basePath: '/my-portfolio',
	// output: 'export', // <=== enables static exports
	reactStrictMode: true,
	images: {
		loader: 'custom',
		path: '', // Define a custom path if needed
	},
};

export default nextConfig;
