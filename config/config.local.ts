import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // 添加sequelize配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'it666',
    // 注意点: 如果需要使用时间戳, 那么就必须指定当前的时区, 否则会相差8个小时
    timezone: '+08:00',
  };
  // Redis相关配置
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379, // 必须是数字不能是'6379'
      password: '',
      db: 0, // 是数字时不能是'0'
    },
  };
  // 短信相关配置
  config.sms = {
    accessKeyId: 'LTAI4GHcxJrqW3gi2rUxhurB',
    secretAccessKey: 'Eq2EEg8NT9OWBVXraJdHrwvpP5sCjQ',
  };

  // cmd redis登录 redis-cli -h 127.0.0.1 -p 6379  -->查看所有key：keys*
  // 禁用CSRF安全校验
  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
