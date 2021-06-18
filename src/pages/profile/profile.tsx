import React, { Component } from "react";
import { View } from "@tarojs/components";
import Taro, { eventCenter, getCurrentInstance } from "@tarojs/taro";

class Profile extends Component {
  // 可以使用所有的 React 组件方法
  componentDidMount() {}

  // onLoad
  onLoad() {}

  // onReady
  onReady() {}

  // 对应 onShow
  componentDidShow() {}

  // 对应 onHide
  componentDidHide() {}

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() {}
  // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
  // 而不是频繁地调用此 API
  $instance = getCurrentInstance();

  componentDidMount() {
    // 获取路由参数
    console.log(this.$instance.router);
  }

  render() {
    return <View className="index">Profile</View>;
  }
}

export default Profile;
