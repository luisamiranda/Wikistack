var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

const User = db.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

const Page = db.define('page', {
    title: Sequelize.STRING,
    urlTitle: Sequelize.STRING,
    content: Sequelize.TEXT,
    status: Sequelize.ENUM('open', 'closed')
});

User.sync()



module.exports = {
    Page: Page,
    User: User
}