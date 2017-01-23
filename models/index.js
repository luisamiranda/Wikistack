var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      isEmail: true,
      allowNull: true
    }
});

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: true
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: Sequelize.ENUM('open', 'closed'),
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
}, {
  getterMethods:{
    route: function() {return '/wiki/' + this.getDataValue('urlTitle')}
  }
});



module.exports = {
    Page: Page,
    User: User
};
