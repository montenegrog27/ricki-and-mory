const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {}, { timestamps: false });
};
