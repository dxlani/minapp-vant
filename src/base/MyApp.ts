/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {Url} from '@minapp/core'
import {MobxApp} from '@minapp/mobx'
import {MyStore} from './MyStore'

export class MyApp extends MobxApp<MyStore> {
  // @ts-ignore
  $url: {
    /*
      注意：
        1. INJECT_START 到 INJECT_END 之间的文件是自动注入的，请不要随意修改
        2. 注入规则写在 .dtpl 文件夹中的 dtpl.js 文件中
        3. 需要安装 vscode 插件 dot-template-vscode 来达到注入功能
        4. 触发条件是：每次在 src/pages 目录下新建一个空文件夹时
    */

    /*# INJECT_START {"key": "pagesMap"} #*/
    index: Url
    logs: Url
    test: Url
    map: Url
    audio: Url
    websocket: Url
    app11: Url
    usercenter: Url
    vant: Url
    vantTable: Url
    operation: Url
    vantHigh: Url
    vantBus: Url
    /*# INJECT_END #*/
  }
}
