export default {
  pages: [
    'pages/record/record',
    'pages/index/index',
    'pages/profile/profile',
    'pages/detail/detail',
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
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
