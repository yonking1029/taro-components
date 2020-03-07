import Taro, { Component, Config } from "@tarojs/taro"
import { View, Image, ScrollView } from "@tarojs/components"
import PropTypes from 'prop-types'

import ICON_TITLE from './icon-title.png'
import ICON_CARD from './icon-card.png'

/**
 * 人气精品（一排两个推荐商品）
 */
export class Index extends Component {
  static options = {
		addGlobalClass: true
	}
	static propTypes = {
    list: PropTypes.array,
  }
  
  static defaultProps = {
    list: [],
  }

  render() {
    let { list } = this.props
    return (
      <View className='m_t_30'>
        <View className='flex_center'>
          <Image className='w_50 h_50' src={ICON_TITLE}></Image>
          <View className='c_333 f_s_28'>人气精品单选</View>
        </View>
        <ScrollView scrollY className='w_670 of_h'>
          <View className='flex flex_w_w'>
            {
              list.map(item => {
                return (<View className='w_310 p_10'>
                  <View className='t_a_c'>
                    <Image className='w_310 h_300' src={item.url}></Image>
                  </View>
                  <View className='f_s_28 c_FDA100'>{item.label}</View>
                  <View className='flex_between'>
                    <View className='flex flex_ai_e'>
                      <View className='c_red f_s_30'>¥{item.price}</View>
                      <View className='c_999 f_s_26 text_d_lt m_l_20'>¥{item.originalPrice}</View>
                    </View>
                    <Image className='w_50 h_50' src={ICON_CARD}></Image>
                  </View>
                </View>)
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}