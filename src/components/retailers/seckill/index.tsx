import Taro, { Component } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import PropTypes from 'prop-types'

/**
 * 秒杀（3个）
 */
export default class Index extends Component<any> {
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
      <View>
        <View className='f_s_26 c_FDA100 t_a_c'>爆款秒杀</View>
        <View className='flex'>
          {
            list.map(item => {
              return (<View className='flex_1 t_a_c bg_ffeaea m_10 p_tb_10'>
                <View className=''>
                  <View className=''>
                    <Image className='w_180 h_150' src={item.url}></Image>
                  </View>
                  <View className='flex flex_jc_c flex_ai_e'>
                    <View className='f_s_22 c_red m_r_20'>{item.price}</View>
                    <View className='f_s_20 c_999 text_d_lt'>¥{item.originalPrice}</View>
                  </View>
                  <View className='t_a_c'>
                    <View className='b_radius_50 block f_s_20 c_fff bg_c70c2b p_lr_15'>立即购买</View>
                  </View>
                </View>
              </View>)
            })
          }
        </View>
      </View>
    )
  }
}
