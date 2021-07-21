import { View } from "@tarojs/components"
import Taro, { getCurrentInstance } from "@tarojs/taro"
import React, { Component } from "react"
import { AtButton, AtSearchBar } from "taro-ui"
import { ItemList, IItem } from "../../components/item_list"
import "./index.scss"

interface IState {
  loading: boolean
  value: string
  items: IItem[]
}

interface IData {
  items: IItem[]
}

interface IResponse {
  data: IData
  statusCode: number
  header: object
}

class Index extends Component<{}, IState> {
  state = {
    loading: true,
    value: "",
    items: []
  }

  // 可以使用所有的 React 组件方法
  async componentDidMount() {
    // 获取路由参数
    console.log("Index componentDidMount")
    // TODO 1. 检查是否登录 没有登录跳转到个人中心登录

    // TODO 2. 下载最近10条近期物品
    let { statusCode, data } = await Taro.request({
      url: "https://example.com/items"
    }) as IResponse
    console.log("res:::", data)

    let items = statusCode == 200 ? data.items : []
    this.setState({
      items,
      loading: false
    })

  }

  // onLoad
  onLoad() {
    console.log("Index onLoad")

  }

  // onReady
  onReady() {
    console.log("Index onReady")

  }

  // 对应 onShow
  componentDidShow() {
    console.log("Index componentDidShow")

  }

  // 对应 onHide
  componentDidHide() {
    console.log("Index componentDidHide")

  }

  onReachBottom() {
    console.log("触底加载更多")

  }

  // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
  // 而不是频繁地调用此 API
  $instance = getCurrentInstance()

  onChange = value => {
    console.log(value)

    this.setState({
      value: value
    })
  }
  takePhoto = async () => {
    let res = await Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"] // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头

    })
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    let tempFilePaths = res.tempFilePaths
    // todo  预览时上传图片
    console.log(tempFilePaths)

    Taro.previewImage({
      current: tempFilePaths.length > 0 ? tempFilePaths[1] : "", // 当前显示图片的http链接
      urls: tempFilePaths // 需要预览的图片http链接列表
    })

    // 成功跳转记录页
    Taro.navigateTo({
      url: `/pages/record/record`
    })
  }
  handleSearch = () => {
    console.log("begin search", this.state.value)

  }

  render() {
    const { items, loading } = this.state
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange}
          onConfirm={this.handleSearch}
          onActionClick={this.handleSearch}
          className='searchbar'
        />
        <ItemList
          items={items}
          loading={loading}
        />
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
