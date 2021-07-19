/*
 * @Author: your name
 * @Date: 2021-06-17 15:31:24
 * @LastEditTime: 2021-06-21 09:40:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\app.config.ts
 */
export default {
  pages: [
    'pages/index/index',
    'pages/record/record',
    'pages/detail/detail',
    'pages/profile/profile',
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/home.png',
      'selectedIconPath': 'resource/home_HL.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': 'resource/profile.png',
      'selectedIconPath': 'resource/profile_HL.png',
      pagePath: 'pages/profile/profile',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '备忘神器',
    navigationBarTextStyle: 'black'
  }
}
