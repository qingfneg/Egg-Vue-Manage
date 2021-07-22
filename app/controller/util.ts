import { Controller } from 'egg';
const nodemailer = require('nodemailer');
export default class UtilController extends Controller {

  public async imageCode() {
    const { ctx } = this;
    ctx.body = ctx.helper.createImageCode();
  }
  public async emailCode() {
    // 1.创建发送者对象
    const transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: '601672784@qq.com', // 发送邮件的邮箱
        pass: 'pcwwgmizkfibbcig', // 邮箱对应的授权码
      },
    });
    // 2.创建需要发送的内容
    const code = Math.random().toString(16).slice(2, 6)
      .toUpperCase();
    const info = {
      from: '601672784@qq.com', // 谁发的
      to: '18889796429@163.com', // 发给谁
      subject: '知播渔管理后台注册验证码', // 邮件标题
      text: `您正在注册知播渔管理后台系统，您的验证码是${code}`, // 邮件内容
    };
    // 3.发送邮件
    transporter.sendMail(info, (err, data) => {
      if (err) {
        console.log('发送邮件失败：', err);
      } else {
        console.log('发送邮件成功:', data);
      }
    });
  }
}
