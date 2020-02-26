import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Advertisement, ClassificationHot, BrandHot, Seckill, NewProducts, Recommendation, PopularProducts } from '@/components/retailers'

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

class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  render() {
    return (
      <View className="index">
        {/* advertisement 轮播广告（6个图片轮播） */}
        <Advertisement></Advertisement>
        {/* classification-hot 热门分类（热门分类10个，2行，图文） */}
        <ClassificationHot></ClassificationHot>
        {/* brand-hot 热门品牌（热门品牌4个，4行，图片） */}
        <BrandHot></BrandHot>
        {/* seckill 秒杀（3个） */}
        <Seckill></Seckill>
        {/* new-products 新品（上面一个图片表示类目，下面8个商品滚动+查看更多）（食品，居家用品，百货，母婴） */}
        <NewProducts></NewProducts>
        {/* recommendation 特色推荐（上面一个品牌，下面三个商品）（推荐旗舰店） */}
        <Recommendation></Recommendation>
        {/* popular-products 人气精品（一排两个推荐商品） */}
        <PopularProducts></PopularProducts>
      </View>
    );
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>;
