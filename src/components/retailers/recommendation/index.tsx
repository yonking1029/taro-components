import Taro, { Component } from "@tarojs/taro"
import { View, Image, ScrollView } from "@tarojs/components"
import PropTypes from 'prop-types'

import ICON from './icon.png'
/**
 * 特色推荐（上面一个品牌，下面三个商品）（推荐旗舰店）
 */
export class Index extends Component<any> {
	static options = {
		addGlobalClass: true
	}
	static propTypes = {
    titleUrl: PropTypes.string,
    list: PropTypes.array,
	}
  static defaultProps = {
    list: [],
  }
  render() {
    let { titleUrl, list } = this.props
    return (
      <View className='m_t_30'>
        <View className='flex_center'>
          <Image className='w_50 h_50' src={ICON}></Image>
          <View className='c_333 f_s_28'>特色推荐</View>
        </View>
        <Image className='w_670 h_240' src={titleUrl}></Image>
        <ScrollView scrollX className='w_670 of_h'>
          <View className='flex'>
            {
              list.map(item => {
                return (<View className='flex_1 p_10'>
                  <View className='t_a_c'>
                    <Image className='w_170 h_180' src={item.url}></Image>
                  </View>
                  <View className='f_s_28 c_FDA100'>{item.label}</View>
                  <View className='flex_center'>
                    <View className='c_666 f_s_20'>{`原价${item.originalPrice} 现价${item.price}`}</View>
                    <View className='c_666 f_s_24'>></View>
                  </View>
                </View>)
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}