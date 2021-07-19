import { Component } from 'react'
import "taro-ui/dist/style/index.scss"
import './app.scss'

class App extends Component {

  componentDidMount() {
    console.log("App componentDidMount")
  }
  // 对应 onLaunch
  onLaunch() {
    console.log("App onLaunch")

  }
  componentDidShow() {
    console.log("App componentDidShow")

  }

  componentDidHide() {
    console.log("App componentDidHide")

  }

  componentDidCatchError() {
    console.log("App componentDidCatchError")

  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
