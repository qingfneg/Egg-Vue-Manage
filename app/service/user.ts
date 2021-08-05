import { Service } from 'egg';
/**
 * Test Service
 */
export default class Test extends Service {
  public async createUser({ username, email, phone, password }) {
    if (username) {
      // 普通注册
      return await this.createUserByUserName(username, password);
    } else if (email) {
      // 邮箱注册
      return await this.createUserByEmail(email, password);
    } else if (phone) {
      // 手机注册
      return await this.createUserByPhone(phone, password);
    }
  }
  private async createUserByUserName(username, password) {
    password = this.ctx.helper.encryptText(password);
    // 1.查询当前用户是否存在
    const user = await this.findUser({ username });
    if (user) {
      throw new Error('当前用户已存在');
    }
    // 2.如果不存在才保存
    const data = await this.ctx.model.User.create({
      username,
      password,
    });
    return data;
  }
  private async createUserByEmail(email, password) {
    password = this.ctx.helper.encryptText(password);
    // 1.查询当前用户是否存在
    const user = await this.findUser({ email });
    if (user) {
      throw new Error('当前用户已存在');
    }
    // 2.如果不存在才保存
    const data = await this.ctx.model.User.create({
      email,
      password,
    });
    return data;
  }
  private async createUserByPhone(phone, password) {
    password = this.ctx.helper.encryptText(password);
    // 1.查询当前用户是否存在
    const user = await this.findUser({ phone });
    if (user) {
      throw new Error('当前用户已存在');
    }
    // 2.如果不存在才保存
    const data = await this.ctx.model.User.create({
      phone,
      password,
    });
    return data;
  }
  public async findUser(options) {
    return await this.ctx.model.User.findOne({ where: options });
  }
}
