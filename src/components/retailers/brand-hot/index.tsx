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
 * 热门品牌（热门品牌4个，4行，图片）
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
      热门品牌（热门品牌4个，4行，图片）
      </View>
    );
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>;
