export default {
  username: {
    type: 'string',
    trim: true, // 清楚空格
    // 只能是数字或字母
    format: /^[a-zA-Z0-9]{6,}$/,
    message: '用户名符合要求',
  },
  password: {
    type: 'string',
    trim: true,
    // 必须是数字字母符号组合
    format: /^(?:(?=.*[0-9].*)(?=.*[A-Za-z].*)(?=.*[,\.#%'\+\*\-:;^_`].*))[,\.#%'\+\*\-:;^_`0-9A-Za-z]{8,}$/,
    message: '密码不符合要求',
  },
  // 效验码
  captcha: {
    type: 'string',
    trim: true,
    // 必须是数字字母符号组合 4位数
    format: /^[A-Za-z0-9]{4}$/,
    message: '验证码不符合要求',
  },
  registerType: {
    type: 'enum',
    values: [ 'normal', 'email', 'phone' ],
  },
};
