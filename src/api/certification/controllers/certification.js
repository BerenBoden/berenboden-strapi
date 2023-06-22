"use strict";

/**
 * certification controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::certification.certification",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service("api::certification.certification")
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      results.forEach((result) => {
        delete result.updatedBy;
        delete result.createdBy;
      });

      return this.transformResponse(results[0]);
    },
  })
);
