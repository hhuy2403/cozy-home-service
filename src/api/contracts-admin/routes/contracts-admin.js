'use strict';

/**
 * contracts-admin router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contracts-admin.contracts-admin');
