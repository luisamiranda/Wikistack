var Sequelize = require('sequelize');
var db = new Sequelize('postgres:localhost:5432/wikistack');

var Page = db.define('page', {
  title:	{
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle:	{
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status:	{
    type: Sequelize.ENUM('open', 'closed'),
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  getterMethods: {
    route: function() {
      Page.route = '/wiki/' + this.urlTitle;
    }
  },
  hooks: {},
  classMethods: {},
  instanceMethods: {}
});

var User = db.define('user', {
  name:	{
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  }
}, {});

module.exports = { Page, User };
