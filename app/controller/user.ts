import { Controller } from 'egg';
import NormalUserRule from '../validate/normalUserRule';
import EmailUserRule from '../validate/emailUserRule';
import PhoneUserRule from '../validate/phoneUserRule';
const enum RegisterTypeEnum {
  Normal= 'normal',
  Email = 'email',
  Phone= 'phone'
}

export default class UserController extends Controller {
  public async create() {
    const { ctx } = this;
    try {
      // 1.校验数据和验证码
      this.validateUserInfo();
      // ctx.body = '注册';
      // 2.将校验通过的数据保存到数据库中
      const data = await ctx.service.user.createUser(ctx.request.body);
      console.log(ctx.request.body, 11, data);
      ctx.success(data);
    } catch (e) {
      if (e.errors) {
        // ctx.body = e.errors;
        ctx.error(400, e.errors);
      } else {
        // ctx.body = e.message;
        ctx.error(400, e.message);
      }
    }
  }
  private validateUserInfo() {
    const { ctx } = this;
    const data = ctx.request.body;
    const registerType = data.registerType;
    switch (registerType) {
      case RegisterTypeEnum.Normal:
        // 校验数据的格式是否正确
        ctx.validate(NormalUserRule, data);
        // 校验当前的验证码是否正确
        ctx.helper.verifyImageCode(data.captcha);
        break;
      case RegisterTypeEnum.Email:
        ctx.validate(EmailUserRule, data);
        ctx.helper.verifyEmailCode(data.captcha);
        break;
      case RegisterTypeEnum.Phone:
        ctx.validate(PhoneUserRule, data);
        ctx.helper.verifySmsCode(data.captcha);
        break;
      default:
        throw new Error('注册类型不存在');
    }
  }
}
