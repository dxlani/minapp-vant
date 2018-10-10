// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage, wxp} from 'base/'

@pagify()
export default class extends MyPage {
  data = {
    newsdata:""
  }

  async onLoad(options: any) {
    await this.request()
  }

  async request(){
    // await wx.request({
    //   url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10', 
    //   success:  (res)=> {
    //     this.setDataSmart({newsdata: res.data});
    //   }
    // })
    await wxp.request({url:'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10'}).then(res=>{
      this.setDataSmart({newsdata: res.data});
    })
  }
}
