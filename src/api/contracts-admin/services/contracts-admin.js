'use strict';

/**
 * contracts-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contracts-admin.contracts-admin');
