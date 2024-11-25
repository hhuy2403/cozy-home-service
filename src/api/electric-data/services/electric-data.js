'use strict';

/**
 * electric-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::electric-data.electric-data');
