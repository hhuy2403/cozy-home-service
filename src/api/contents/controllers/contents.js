'use strict';

/**
 * A set of functions called "actions"
 */
const service = require('../services/contents');


module.exports = {
  healthz: async(ctx, next) => {
    return ctx.send('OK');
  },

  register: async (ctx, next) => {
    try {
      const data = ctx.request.body;
      const res = await strapi.query(`plugin::users-permissions.user`).create({
        data: { ...data, role: 1 }
      });

      return {
        isSuccess: true,
        data: res
      }
    } catch (err) {
      console.log(err);
      return {
        isSucess: false,
        error: err
      }
    }
  },

  create: async (ctx, next) => {
    try{
      const {source, data} = ctx.request.body;
      const res = await strapi.db.query(source).create({
        data: data,
      });
      console.log(data);

      return {
        isSuccess: true,
        data: res
      }
    }
    catch(err){
      console.log(err);
      return {
        isSucess: false,
        error: err
      }
    }
  },

  read: async (ctx, next) => {
    try{
      const {source, where} = ctx.request.body;
      const res = await strapi.db.query(source).findMany({
        where: where,
        populate: true,
      });
    
      return {
        isSuccess: true,
        data: res
      }
    }
    catch(err){
      console.log(err);
      return {
        isSucess: false,
        error: err
      }
    }
  },

  update: async (ctx, next) => {
    try{
      const {source, where, data} = ctx.request.body;
      const res = await strapi.db.query(source).update({
        where: where,
        data: data,
      });

      return {
        isSuccess: true,
        data: res
      }
    }
    catch(err){
      console.log(err);
      return {
        isSucess: false,
        error: err
      }
    }
    
  },

  delete: async (ctx, next) => {
    try{
      const {source, where} = ctx.request.body;
      const res = await strapi.db.query(source).delete({
        where: where,
      });
      
      return {
        isSuccess: true,
        data: res
      }
    }
    catch(err){
      console.log(err);
      return {
        isSucess: false,
        error: err
      }
    }
  }
};
