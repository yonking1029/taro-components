import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {};

type PageState = {
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };
	static options = {
		addGlobalClass: true
	}

	constructor(props) {
		super(props)
		this.state = {
      list: [
        { label:'微商城', page:'retailers' },
        { label:'零售', page:'retail' },
        { label:'美业', page:'cosmetology' },
        { label:'教育', page:'education' },
        { label:'餐饮', page:'restaurant' },
        { label:'供货', page:'supplier' },
        { label:'定制', page:'customized' },
      ]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange(item) {
    Taro.navigateTo({ url: `/sub-packages/${item.page}/index/index` })
  }
  render() {
    let { list } = this.state
    return (
      <View className="index">
        {
          list.map(item => {
          return (<View className='t_a_c p_tb_20 m_20 b_solid_BE93FF' onClick={()=>{this.onChange(item)}}>{item.label}</View>)
          })
        }
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>;
