import { OpenData, View } from "@tarojs/components"
import { getCurrentInstance } from "@tarojs/taro"
import React, { Component } from "react"

class Profile extends Component {
  // 可以使用所有的 React 组件方法
  // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
  // 而不是频繁地调用此 API

  componentDidMount() {
    // 获取路由参数
    console.log(this.$instance.router)
  }
  $instance = getCurrentInstance();


  // onLoad
  onLoad() { }

  // onReady
  onReady() { }

  // 对应 onShow
  componentDidShow() { }

  // 对应 onHide
  componentDidHide() { }

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() { }

  render() {
    return (<View className='index'>
      <View>
        <View><OpenData type='userAvatarUrl' /></View>
        <View><OpenData type='userNickName' /></View>
      </View>

    </View>)
  }
}

export default Profile
