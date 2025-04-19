/**
 * page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::page.page",
	({ strapi }) => ({
		async findBySlug(ctx) {
			const { slug } = ctx.params;

			const page = await strapi.db.query("api::page.page").findOne({
				where: { slug },
				populate: ["blocks", "cover"]
			});

			if (!page) {
				return ctx.notFound("Page not found");
			}

			return ctx.send(page);
		},
		async getSeo(ctx) {
			const { slug } = ctx.params;

			const page = await strapi.db.query("api::page.page").findOne({
				where: { slug },
				select: ["title", "slug", "publishedAt", "createdAt", "updatedAt"],
				populate: {
					cover: { select: ["formats"] }
				}
			});

			if (!page) {
				return ctx.notFound("Page not found");
			}

			return ctx.send(page);
		}
	})
);
