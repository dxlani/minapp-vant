// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage,wxp} from 'base/'
import Notify from 'components/vant-weapp/notify/notify';

@pagify()
export default class extends MyPage {
  data = {
    active: 2,
    show: false,
    steps: [
      {
        text: '步骤一',
        desc: '描述信息'
      },
      {
        text: '步骤二',
        desc: '描述信息'
      },
      {
        text: '步骤三',
        desc: '描述信息'
      },
      {
        text: '步骤四',
        desc: '描述信息'
      }
    ]
  }

  async onLoad(options: any) {
  
  }
  testVant(){
    console.log("通知内容")
    Notify('通知内容')
  }
  onChange(event) {
    wxp.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    });
  }
  onClickLeft() {
    wxp.showToast({ title: '点击返回', icon: 'none' });
  }
  onClickRight() {
    wxp.showToast({ title: '点击按钮', icon: 'none' });
  }
  onopen() {
    this.setData({ show: true });
  }
  onClose() {
    this.setData({ show: false });
  }
}
