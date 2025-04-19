module.exports = {
	routes: [
		{
			method: "GET",
			path: "/navigation-menus",
			handler: "api::navigation-menu.navigation-menu.find",
			config: {
				auth: false
			}
		}
	]
};
