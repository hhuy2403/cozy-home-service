'use strict';

/**
 * water-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::water-data.water-data');
