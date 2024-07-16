import { ResultCodeEnum } from "@/enums/httpEnum";
import { message } from 'antd'

interface Options {
  message?: string;
  code?: any;
}
export class AxiosMessageTip {
  options: Options;
  constructor(options: Options) {
    this.options = options;
  }
  showTip(hasSuccess: boolean) {
    hasSuccess ? this.successTip() : this.errorTip();
  }
  successTip() {
    const { message: msg } = this.options;
    message.success(msg)
  }
  errorTip() {
    const text = this.getErrorMessage();
    console.log(text)
  }
  getErrorMessage() {
    const { code, message } = this.options;
    return (
      {
        [ResultCodeEnum.TIMEOUT]: 401,
        [ResultCodeEnum.OTHER_CUSTOM]: 111
      }[code] ||
      message
    );
  }
}
