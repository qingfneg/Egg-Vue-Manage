module.exports = {
  success(data, status = 200, msg = '成功') {
    // this.status = status; // Resetful API
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    this.body = {
      code: status,
      msg,
      data,
    };
  },
  error(status = 500, msg = '错误') {
    this.body = {
      code: status,
      msg,
    };
  },
};
