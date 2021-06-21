/*
 * @Author: your name
 * @Date: 2021-06-18 14:00:54
 * @LastEditTime: 2021-06-21 10:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\pages\detail\detail.tsx
 */
import { View, Image } from "@tarojs/components"
import React, { Component } from "react"
import { AtList, AtListItem } from "taro-ui"
import "./detail.scss"

export default class Record extends Component {
  state = {
    id: "",
    img_url: "",
    goods: "",
    location: "",
    expDate: "无"
  }
  componentWillMount() {
    this.setState({
      img_url: "https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF",
      goods: "牛奶",
      location: "一楼冰箱",
      expDate: "2021-07-01"
    })
  }
  componentDidMount() {
    console.log("detail")
  }
  onLoad(options) {
    console.log(options)
    this.setState({ id: options.id })
  }
  render() {
    let { img_url, goods, location, expDate } = this.state
    return (
      <View className='index'>
        <Image
          style='width: 300px;height: 200px;background: #fff;'
          src={img_url}
        />
        <AtList className='content'>
          <AtListItem title='物品名称' extraText={goods}></AtListItem>
          <AtListItem title='储藏位置' extraText={location}></AtListItem>
          <AtListItem title='过期日期' extraText={expDate}></AtListItem>
        </AtList>
      </View>
    )
  }
}
