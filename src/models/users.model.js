const db = require('../utils/database');
const {DataTypes} = require('sequelize');


const Users = db.define("users", {
  id: {primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false},
  firstname: {type: DataTypes.STRING,
              allowNull: false,
              field: "first_name"},
  lastname: {type: DataTypes.STRING,
              allowNull: false,
              field: "last_name"},
  email: {type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {isEmail: true}},
  password: {type: DataTypes.STRING,
            allowNull: false}
});

module.exports = Users;