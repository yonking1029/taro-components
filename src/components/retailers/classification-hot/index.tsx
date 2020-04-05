import Taro, { Component } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import PropTypes from 'prop-types'

/**
 * 热门分类（热门分类10个，2行，图文）
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
      <View className='flex flex_w_w m_tb_20'>
        {
          list.map(item => {
            return (<View className='w_134 m_tb_10'>
              <View className='t_a_c'>
                <Image className='w_100 h_100 b_radius_50' src={item.url}></Image>
              </View>
              <View className='t_a_c f_s_26 c_666'>{item.label}</View>
            </View>)
          })
        }
      </View>
    )
  }
}
