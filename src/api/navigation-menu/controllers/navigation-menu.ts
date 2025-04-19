/**
 * navigation-menu controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::navigation-menu.navigation-menu",
	({ strapi }) => ({
		async find(ctx) {
			const navigationMenu = await strapi.db
				.query("api::navigation-menu.navigation-menu")
				.findMany({
					where: {
						has_parent: { $eq: false },
						publishedAt: { $not: null }
					},
					orderBy: "order",
					populate: {
						children: {
							select: ["label", "custom_url_path"],
							orderBy: "order",
							populate: {
								page: { select: ["slug"] }
							}
						}
					}
				});

			return ctx.send(navigationMenu);
		}
	})
);
