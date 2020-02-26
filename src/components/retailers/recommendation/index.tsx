import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}
/**
 * 特色推荐（上面一个品牌，下面三个商品）（推荐旗舰店）
 */
class Index extends Component {
  config: Config = {
    navigationBarTitleText: ""
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  render() {
    return (
      <View>
      特色推荐（上面一个品牌，下面三个商品）（推荐旗舰店）
      </View>
    );
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>;
