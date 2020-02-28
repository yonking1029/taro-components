import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import PropTypes from 'prop-types'

/**
 * 热门品牌（热门品牌4个，4行，图片）
 */
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: ""
  };

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
      <View className='m_tb_20'>
        {
          list.map(item => {
            return <Image className='h_180 w_670 m_b_40' src={item.url}></Image> 
          })
        }
      </View>
    );
  }
}
