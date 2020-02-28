import Taro, { Component, Config } from "@tarojs/taro"
import { View, Swiper, SwiperItem, Image } from "@tarojs/components"
import PropTypes from 'prop-types'

/**
 * 轮播广告（图片轮播）
 */
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: ""
  }
	static options = {
		addGlobalClass: true
	}

	static propTypes = {
    list: PropTypes.array,
	}
  static defaultProps = {
    list: [],
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  render() {
    let { list } = this.props
    return (
      <View className=''>
        <Swiper>
          {
            list.map(item => {
              return <SwiperItem>
              <Image className='b_radius_8 w_670 h_300' src={item.url}></Image>
            </SwiperItem>
            })
          }
      </Swiper>
      </View>
    );
  }
}

