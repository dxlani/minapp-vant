// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage} from 'base/'
import areaList  from './areaList'
import Toast from 'components/vant-weapp/toast/toast';

@pagify()
export default class extends MyPage {
  data = {
    show: false,
    areaList:areaList,
    imageURL:"../../../images/heart@3x.png"
  }

  async onLoad(options: any) {
  }
  onClose() {
    this.setData({ show: false });
  }
  showareaList(){
    this.setData({ show: true });
  }
  cancelChose(){
    console.log('cancelChose')
    this.setData({ show: false });
  }
  changeChose(event){
    console.log('changeChose',event.detail.picker.code)
  }
  confirmChose(event){
    console.log('confirmChose',event.detail.values)
    Toast(`${event.detail.values[0].name}${event.detail.values[1].name}${event.detail.values[2].name}代码：${event.detail.values[2].code}`)
  }
}
