// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage, wxp} from 'base/'

@pagify()
export default class extends MyPage {
  data = {
    email: '870188670@qq.com',
		password: 'dxlani001'
  }

  async onLoad(options: any) {
 
  }
  bindEmailInput(e:any) {
		this.setDataSmart({email: e.detail.value})
	}
	bindPasswordInput(e:any) {
		this.setDataSmart({password: e.detail.value})
	}
  async login() {
    wxp.showToast({title: '登录请求中', icon: 'loading', duration: 1000});
    //   await wx.request({
    //   url:'https://api.gugujiankong.com/account/Login?email=' + this.data.email + '&password=' + this.data.password,
    //   success:  (res)=> {
    //     console.log("res1",res)
    //   }
    // })
    //网络请求开始
    // http://api.gugujiankong.com/account/Login?email=870188670@qq.com&password=dxlani001&callback=angular.callbacks._3
    await	wxp.request({
			url: 'https://api.gugujiankong.com/account/Login?email=' + this.data.email + '&password=' + this.data.password,
		}).then(res=>{
      console.log("res2",res)
      wx.hideToast();
      if (res.data.LoginStatus == 1) {
        wxp.showToast({title: '登录成功', icon: 'success', duration: 1000});
        //进行一些用户状态的存储
      } else {
        wx.showModal({title: '登录失败', content: '请检查您填写的用户信息！', showCancel: false, success: function(res) {
            //回调函数
          }});
      }
    });
	}


}
