import Taro, { Component, Config } from "@tarojs/taro"
import { View, Image, ScrollView } from "@tarojs/components"
import PropTypes from 'prop-types'

/**
 * 新品（上面一个图片表示类目，下面8个商品滚动+查看更多）（食品，居家用品，百货，母婴）
 */
export default class Index extends Component {

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
        <View><Image className='w_670 h_180' src={titleUrl}></Image></View>
        <ScrollView scrollX className='w_670 of_h'>
          <View className='flex'>
            {
              list.map(item => {
                return (<View className='w_210 p_10'>
                  <View>
                    <Image className='w_170 h_180' src={item.url}></Image>
                  </View>
                  <View className='f_s_22 c_999'>{item.label}</View>
                  <View className='flex flex_jc_b flex_ai_c'>
                    <View className='c_red f_s_24'>¥{item.price}</View>
                    <View>
                      <View className='flex flex_jc_c flex_ai_c c_red f_s_24 b_solid_e70013 b_radius_50 w_30 h_30'>+</View>
                    </View>
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