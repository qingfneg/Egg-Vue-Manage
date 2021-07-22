import ImageCode from '../uitl/imageCode';
import EmailCode from '../uitl/emailCode';
module.exports = {
  createImageCode() {
    return ImageCode.createImageCode(this.ctx);
  },
  verifyImageCode(clientCode) {
    ImageCode.verifyImageCode(this.ctx, clientCode);
  },
  async sendEmailCode(to:string) {
    return await EmailCode.sendEmailCode(this.ctx, to);
  },
};
