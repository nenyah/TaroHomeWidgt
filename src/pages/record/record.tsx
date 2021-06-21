import { View, Image, Picker } from "@tarojs/components"
import React, { Component } from "react"
import { AtButton, AtForm, AtInput, AtList, AtListItem } from "taro-ui"
import Taro from "@tarojs/taro"
import "./record.scss"

export default class Record extends Component {
  state = {
    img_url: "https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF",
    goods: "",
    location: "",
    expDate: "无",
    mfgDate: "无",
    validDays: ""
  }
  handleChange = (value, name) => {
    console.log(value, name)

    this.setState({
      [name]: value
    })
  }
  onSubmit = () => {
    console.log(this.state)
    Taro.redirectTo({
      url: "/pages/detail/detail?id=1"
    })
  }
  onReset = () => {
    this.setState({
      goods: "",
      location: "",
      expDate: "无",
      mfgDate: "无",
      validDays: ""
    })
  }
  onDateChange = (e, name) => {
    this.setState({
      [name]: e.detail.value
    })
  }
  render() {
    let { img_url, goods, location, expDate, mfgDate, validDays } = this.state
    return (
      <View className='index'>
        <Image
          style='width: 300px;height: 200px;background: #fff;'
          src={img_url}
        />
        <AtForm className='record-content'>
          <AtInput
            name='goods'
            title='品名'
            type='text'
            placeholder='物品名称'
            value={goods}
            onChange={e => {
              this.handleChange(e, "goods")
            }}
          />
          <AtInput
            name='location'
            title='位置'
            type='text'
            placeholder='物品存储位置'
            value={location}
            onChange={e => {
              this.handleChange(e, "location")
            }}
          />
          <View>
            <Picker
              mode='date'
              onChange={e => {
                this.onDateChange(e, "expDate")
              }}
              value={expDate}
            >
              <AtList>
                <AtListItem title='过期日期' extraText={expDate} />
              </AtList>
            </Picker>
          </View>
          <View>
            <Picker
              mode='date'
              onChange={e => {
                this.onDateChange(e, "mfgDate")
              }}
              value={mfgDate}
            >
              <AtList>
                <AtListItem title='生产日期' extraText={mfgDate} />
              </AtList>
            </Picker>
          </View>
          <AtInput
            name='validDays'
            title='有效天数'
            type='text'
            placeholder='有效天数'
            value={validDays}
            onChange={e => {
              this.handleChange(e, "validDays")
            }}
          />
        </AtForm>

        <View className='at-row'>
          <AtButton type='secondary' onClick={this.onReset}>
            重置
          </AtButton>
          <AtButton type='primary' onClick={this.onSubmit}>
            提交
          </AtButton>
        </View>
      </View>
    )
  }
}
