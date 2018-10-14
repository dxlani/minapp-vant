// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage} from 'base/'

@pagify()
export default class extends MyPage {
  data = {
    list: ['a', 'b', 'c'],
    result: ['a', 'b'],
    checked: true,
    icon: {
      normal: '../../images/heart@3x.png',
      active: '../../images/heart1@3x.png'
    },
    username:'',
    password:'',
    message:'',
    sms:'',
    value: '',
    radio: '1',
  }

  async onLoad(options: any) {
    // console.log(await wxp.getUserInfo())
  }
  onChange(event) {
    console.log(event.detail);
    this.setData({
      result: event.detail
    });
  }
  onChange1(event) {
    console.log(event.detail);
  }
  onChange2(event) {
    wx.showModal({
      title: '提示',
      content: '是否切换开关？',
      success: res => {
        if (res.confirm) {
          console.log(event.detail);
          this.setData({ checked: event.detail});
        }
      }
    });
   
  }


}
