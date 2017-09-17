// var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

module.exports = function(sequelize, DataTypes) {
  var product = sequelize.define("product", {
      productid: DataTypes.STRING,
      url: DataTypes.STRING,
      name: DataTypes.STRING,
      liked: DataTypes.BOOLEAN
  });
  return product;
};
