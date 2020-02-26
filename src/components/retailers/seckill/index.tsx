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
 * 秒杀（3个）
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
      秒杀（3个）
      </View>
    );
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>;
