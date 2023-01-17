import { Sequelize } from 'sequelize-typescript';
import Config from '../config';
export { default as Task } from './Task/index.model';
const config = Config.production;

// Detect models and import them to the orm
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const modelMatch = (filename, member) =>
  filename.substring(0, filename.indexOf('/index.model')).toLowerCase() === member.toLowerCase();
// eslint-disable-next-line import/no-mutable-exports
const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config,
  dialect: 'postgres',
});

sequelize.addModels([`${__dirname}/*/*.model.*`], modelMatch);

// eslint-disable-next-line object-shorthand
export default sequelize;
