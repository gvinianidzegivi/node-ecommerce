const { Sequelize } = require('sequelize');

const UserModel = require('./user.model');

const { DB_NAME, DB_PASSWORD, DB_USERNAME, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST || 'localhost',
  dialect: 'postgres',
  port: +DB_PORT,
});

UserModel.init(sequelize);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('db: connected successfully');

    await Promise.all([
      UserModel.sync({ force: false }).catch((e) => {
        console.error('user sync failed, reason: ', e);
      }),
    ]);
  } catch (e) {
    console.log('db: error, reason:', e);
  }
})();

module.exports = sequelize;
