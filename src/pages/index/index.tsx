import Taro, { getCurrentInstance } from "@tarojs/taro"
import { View } from "@tarojs/components"
import React, { Component } from "react"
import { AtSearchBar, AtList, AtListItem, AtButton } from "taro-ui"
import "./index.scss"

class Index extends Component {
  state = {
    value: ""
  }
  // 可以使用所有的 React 组件方法
  componentDidMount() {
    // 获取路由参数
    console.log(this.$instance.router)
  }
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
  $instance = getCurrentInstance()

  onChange = value => {
    console.log(value)

    this.setState({
      value: value
    })
  }
  takePhoto = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: res => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  }
  handleClick = e => {
    console.log(e)
  }
  render() {
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange}
          className='searchbar'
        />
        <AtList className='content'>
          <AtListItem
            title='冰箱中的牛奶还是两天过期了！！'
            onClick={this.handleClick}
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='冰箱中的牛奶还是两天过期了！！'
            onClick={this.handleClick}
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='冰箱中的牛奶还是两天过期了！！'
            onClick={this.handleClick}
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='冰箱中的牛奶还是两天过期了！！'
            onClick={this.handleClick}
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='冰箱中的牛奶还是两天过期了！！'
            onClick={this.handleClick}
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='冰箱中的牛奶还是两天过期了！！'
            onClick={this.handleClick}
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='冰箱中的牛奶还是两天过期了！！'
            onClick={this.handleClick}
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
        </AtList>
        <AtButton
          type='primary'
          className='scan-button'
          onClick={this.takePhoto}
        >
          拍照录入
        </AtButton>
      </View>
    )
  }
}

export default Index
