module.exports = {
	routes: [
		{
			method: "GET",
			path: "/articles/slug/:slug",
			handler: "api::article.article.findBySlug",
			config: {
				auth: false
			}
		},
		{
			method: "GET",
			path: "/articles/slug/:slug/seo",
			handler: "api::article.article.getSeo",
			config: {
				auth: false
			}
		}
	]
};
