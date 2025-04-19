module.exports = {
	routes: [
		{
			method: "GET",
			path: "/pages/slug/:slug",
			handler: "api::page.page.findBySlug",
			config: {
				auth: false
			}
		},
		{
			method: "GET",
			path: "/pages/slug/:slug/seo",
			handler: "api::page.page.getSeo",
			config: {
				auth: false
			}
		}
	]
};
