/**
 *  article controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::article.article",
	({ strapi }) => ({
		async findBySlug(ctx) {
			const { slug } = ctx.params;

			const article = await strapi.db.query("api::article.article").findOne({
				where: { slug },
				populate: ["author", "blocks", "cover", "category"]
			});

			if (!article) {
				return ctx.notFound("Article not found");
			}

			return ctx.send(article);
		},
		async getSeo(ctx) {
			const { slug } = ctx.params;

			const article = await strapi.db.query("api::article.article").findOne({
				where: { slug },
				select: [
					"title",
					"description",
					"slug",
					"publishedAt",
					"createdAt",
					"updatedAt"
				],
				populate: {
					cover: { select: ["formats"] },
					author: { select: ["name"] },
					category: { select: ["name", "slug"] }
				}
			});

			if (!article) {
				return ctx.notFound("Article not found");
			}

			return ctx.send(article);
		}
	})
);
