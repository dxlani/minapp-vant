// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage} from 'base/'

@pagify()
export default class extends MyPage {
  data = {
    list: ['a', 'b', 'c'],
    result: ['a', 'b']
  }

  async onLoad(options: any) {
    // console.log(await wxp.getUserInfo())
  }
  onChange(event) {
    this.setData({
      result: event.detail
    });
  }
}
