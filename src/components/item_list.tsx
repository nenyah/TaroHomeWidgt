import Taro from "@tarojs/taro"
import React from 'react'
import { AtList, AtListItem } from "taro-ui"
import './item.scss'
import { Loading } from './loading'

interface IProps {
    items: IItem[],
    loading: boolean
}
interface IItem {
    id: number
    goods: string
    location: string
    validDays: number
    img_url: string
}

class ItemList extends React.Component<IProps, {}> {
    static defaultProps = {
        items: [],
        loading: true
    }
    handleClick = (id, e) => {
        console.log(id, e)
        Taro.navigateTo({
            url: `/pages/detail/detail?id=${id}`
        })
    }
    render() {
        const { loading, items } = this.props

        if (loading) {
            return <Loading />
        }

        const element = items.map((el, index) => {
            return (
                <AtListItem
                    title={`${el.location}中的${el.goods}还是 ${el.validDays} 天过期了！！`}
                    onClick={e => this.handleClick(el.id, e)}
                    thumb={el.img_url}
                    key={el.id}
                />
            )
        })

        return (
            <AtList className='content'>
                {element}
            </AtList>
        )
    }
}

export { ItemList, IItem }

