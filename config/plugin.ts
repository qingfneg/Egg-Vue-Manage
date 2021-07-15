import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // 开启sequelize
  sequelize: {
    enable: true,
    // package: 'egg-sequelize-ts',
    package: 'egg-sequelize-type',
  },
};

export default plugin;
