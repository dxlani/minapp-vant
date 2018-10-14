// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage} from 'base/'
import Dialog from 'components/vant-weapp/dialog/dialog';
import Toast from 'components/vant-weapp/toast/toast';
import Notify from 'components/vant-weapp/notify/notify';
@pagify()
export default class extends MyPage {
  data = {
    show: false,
    show2: false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '分享',
        subname: '描述信息',
        openType: 'share'
      },
      {
        loading: true
      },
      {
        name: '禁用选项',
        disabled: true
      }
    ]
  }

  async onLoad(options: any) {
    // Dialog.alert({
    //   message: '弹窗内容'
    // }).then(() => {
    //   // on close
    // });
    // Dialog.confirm({
    //   title: '标题',
    //   message: '弹窗内容'
    // }).then(() => {
    //   // on confirm
    // }).catch(() => {
    //   // on cancel
    // });
    Toast.loading({
      mask: true,
      message: '加载中...',
      duration:1000
    });
    Notify('通知内容')
  }
  tips1(){
    Toast('我是提示文案，建议不超过十五字~');
  }
  tips2(){
    Toast.loading("加载文案");
  }
  tips3(){
    Toast.success('成功文案');
  }
  tips4(){
    Toast.fail('失败文案');
  }
  onshowsheet(){
    this.setData({ show: true });
  }
  onshowsheet2(){
    this.setData({ show2: true });
  }
  onClose() {
    this.setData({ show: false });
    this.setData({ show2: false });
  }
  onSelect(event) {
    console.log(event.detail);
      Dialog.alert({
        title: '标题',
        message: event.detail.name
      }).then(() => {
        // on close
      });
  }
  notify(){
    Notify({
      text: '通知内容',
      duration: 1000,
      selector: '#van-notify',
      backgroundColor: '#38f'
    });
  }
  
}
