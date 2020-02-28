import Taro, { Component, Config } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import PropTypes from 'prop-types'

/**
 * 新品（上面一个图片表示类目，下面8个商品滚动+查看更多）（食品，居家用品，百货，母婴）
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
      <View>
        <View>上面一个图片表示类目</View>
        {
          list.map(item => {
            return (<View>
              <View>
                <Image className='w_200 h_200' src={item.url}></Image>
              </View>
              <View className=''>{item.label}</View>
              <View className=''>
                <View>{item.price}</View>
                <View>
                  <View>+</View>
                </View>
              </View>
            </View>)
          })
        }
      新品（上面一个图片表示类目，下面8个商品滚动+查看更多）（食品，居家用品，百货，母婴）
      </View>
    );
  }
}