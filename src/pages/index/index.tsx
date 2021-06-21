import Taro, { getCurrentInstance } from "@tarojs/taro"
import { View } from "@tarojs/components"
import React, { Component } from "react"
import { AtSearchBar, AtList, AtListItem, AtButton } from "taro-ui"
import "./index.scss"

class Index extends Component {
  state = {
    value: "",
    outDatedItem: [
      {
        id: 1,
        goods: "牛奶",
        location: "冰箱",
        validDays: 1,
        img_url:
          "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      },
      {
        id: 2,
        goods: "牛奶",
        location: "冰箱",
        validDays: 2,
        img_url:
          "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      },
      {
        id: 3,
        goods: "牛奶",
        location: "冰箱",
        validDays: 3,
        img_url:
          "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      },
      {
        id: 4,
        goods: "牛奶",
        location: "冰箱",
        validDays: 4,
        img_url:
          "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      },
      {
        id: 5,
        goods: "牛奶",
        location: "冰箱",
        validDays: 5,
        img_url:
          "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      },
      {
        id: 6,
        goods: "牛奶",
        location: "冰箱",
        validDays: 6,
        img_url:
          "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      }
    ]
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
  handleClick = (id, e) => {
    console.log(id, e)
    Taro.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
  render() {
    const { outDatedItem } = this.state
    const listItems = outDatedItem.map(el => (
      <AtListItem
        title={`${el.location}中的${el.goods}还是${el.validDays}天过期了！！`}
        onClick={e => this.handleClick(el.id, e)}
        thumb={el.img_url}
        key={el.id}
      />
    ))
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange}
          className='searchbar'
        />
        <AtList className='content'>{listItems}</AtList>
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
