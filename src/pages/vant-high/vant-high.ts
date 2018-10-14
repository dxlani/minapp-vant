// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage} from 'base/'

@pagify()
export default class extends MyPage {
  data = {
    checked: true,
    activeId : 1001,
    mainActiveIndex :0,
    items:[
      {
        // 导航名称
        text: '所有城市',
        // 该导航下所有的可选项
        children: [{
          text: '杭州',
          id: 1001
        }, {
          text: '温州',
          id: 1002
        }, {
          text: '宁波',
          id: 1003
        }, {
          text: '义乌',
          id: 1004
        }]
      },
      {
        // 导航名称
        text: '其他城市',
        // 该导航下所有的可选项
        children: [{
          text: '无锡',
          id: 1011
        }, {
          text: '常州',
          id: 1012
        }, {
          text: '莆田',
          id: 1013
        }, {
          text: '三明',
          id: 1014
        }]
      }
    ]
  }

  async onLoad(options: any) {
  }
  onChange(event) {
    // 需要手动对 checked 状态进行更新
    this.setDataSmart({ checked: event.detail });
  }
  onClickNav(event) {
    this.setDataSmart({
      mainActiveIndex: event.detail.index
    });
  }

  onClickItem(event) {
    this.setDataSmart({
      activeId: event.detail.id
    });
  }
}
