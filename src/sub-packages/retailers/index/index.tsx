import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Advertisement, ClassificationHot, BrandHot, Seckill, NewProducts, Recommendation, PopularProducts } from '@/components/retailers'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  }
	static options = {
		addGlobalClass: true
	}
  state = {
    // 广告
    ads: [
      { url: require('@/assets/imgs/ad-1.jpg') },
      { url: require('@/assets/imgs/ad-2.jpg') },
      { url: require('@/assets/imgs/ad-3.jpg') },
      { url: require('@/assets/imgs/ad-4.jpg') },
      { url: require('@/assets/imgs/ad-5.jpg') },
      { url: require('@/assets/imgs/ad-6.jpg') },
    ],
    // 热门分类
    clsHots: [
      { label: '海淘精品', url: require('@/assets/imgs/cla-hot-1.png') },
      { label: '好吃街', url: require('@/assets/imgs/cla-hot-2.png') },
      { label: '专柜同款', url: require('@/assets/imgs/cla-hot-3.png') },
      { label: '美妆洗护', url: require('@/assets/imgs/cla-hot-4.png') },
      { label: '妈咪精选', url: require('@/assets/imgs/cla-hot-5.png') },
      { label: '居家生活', url: require('@/assets/imgs/cla-hot-6.png') },
      { label: '品质轻奢', url: require('@/assets/imgs/cla-hot-7.png') },
      { label: '数码家电', url: require('@/assets/imgs/cla-hot-8.png') },
      { label: '穿搭推荐', url: require('@/assets/imgs/cla-hot-9.png') },
      { label: '宠物商城', url: require('@/assets/imgs/cla-hot-10.png') },
    ],
    // 热门品牌
    brands: [
      { url: require('@/assets/imgs/brand-hot-1.png') },
      { url: require('@/assets/imgs/brand-hot-2.png') },
    ],
    // 秒杀
    seckills: [
      { label: '实木餐椅美式复古创意餐椅北欧简约酒店咖啡厅设计师椅餐厅靠背椅', price: '298', originalPrice: '1099', url: require('@/assets/imgs/seckill-1.jpg') },
      { label: '「吾舍」原创设计木心衣帽挂架实木衣帽钩壁挂门厅玄关挂衣架墙上', price: '199', originalPrice: '619', url: require('@/assets/imgs/seckill-2.jpg') },
      { label: '实木创意木质矮凳时尚小圆凳子储物坐凳换鞋凳儿童小板凳椅包邮', price: '80', originalPrice: '399', url: require('@/assets/imgs/seckill-3.jpg') },
    ],
    // 新品
    titleUrl:require('@/assets/imgs/new-products-title.png'),
    newProducts: [
      { label: 'Adidas运动宽松休闲长裤', price: '188', url: require('@/assets/imgs/new-products-1.jpg') },
      { label: 'GU极优男装宽松长袖', price: '128', url: require('@/assets/imgs/new-products-2.jpg') },
      { label: '新款桑蚕丝中长款衬衫', price: '119', url: require('@/assets/imgs/new-products-3.jpg') },
      { label: '恒源祥休闲西装上衣', price: '87', url: require('@/assets/imgs/new-products-4.jpg') },
      { label: '美宝莲束发带', price: '223', url: require('@/assets/imgs/new-products-5.jpg') },
      { label: '摩飞无线便携榨汁杯', price: '223', url: require('@/assets/imgs/new-products-6.jpg') },
      { label: '可米生活白夜童话暖', price: '223', url: require('@/assets/imgs/new-products-7.jpg') },
      { label: '热风新款女士平底拖鞋', price: '223', url: require('@/assets/imgs/new-products-8.jpg') },
      { label: '千鸟格羽绒服滑雪外套', price: '223', url: require('@/assets/imgs/new-products-9.jpg') },
    ],
    recommendationTitleUrl:require('@/assets/imgs/recommendation-title.png'),
    recommendations: [
      { label: '无涂层不粘锅', price: '298', originalPrice: '399', url: require('@/assets/imgs/recommendation-1.png') },
      { label: '男士牛皮扣腰带', price: '43', originalPrice: '600', url: require('@/assets/imgs/recommendation-2.jpg') },
      { label: '欧美经典贝壳包', price: '234', originalPrice: '645', url: require('@/assets/imgs/recommendation-3.jpeg') },
    ],
    populars: [
      { label: 'Adidas运动宽松休闲长裤', price: '188', originalPrice: '645', url: require('@/assets/imgs/new-products-1.jpg') },
      { label: 'GU极优男装宽松长袖', price: '128', originalPrice: '645', url: require('@/assets/imgs/new-products-2.jpg') },
      { label: '新款桑蚕丝中长款衬衫', price: '119', originalPrice: '645', url: require('@/assets/imgs/new-products-3.jpg') },
      { label: '恒源祥休闲西装上衣', price: '87', originalPrice: '645', url: require('@/assets/imgs/new-products-4.jpg') },
      { label: '美宝莲束发带', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-5.jpg') },
      { label: '摩飞无线便携榨汁杯', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-6.jpg') },
      { label: '可米生活白夜童话暖', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-7.jpg') },
      { label: '热风新款女士平底拖鞋', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-8.jpg') },
      { label: '千鸟格羽绒服滑雪外套', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-9.jpg') },
      { label: 'Adidas运动宽松休闲长裤', price: '188', originalPrice: '645', url: require('@/assets/imgs/new-products-1.jpg') },
      { label: 'GU极优男装宽松长袖', price: '128', originalPrice: '645', url: require('@/assets/imgs/new-products-2.jpg') },
      { label: '新款桑蚕丝中长款衬衫', price: '119', originalPrice: '645', url: require('@/assets/imgs/new-products-3.jpg') },
      { label: '恒源祥休闲西装上衣', price: '87', originalPrice: '645', url: require('@/assets/imgs/new-products-4.jpg') },
      { label: '美宝莲束发带', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-5.jpg') },
      { label: '摩飞无线便携榨汁杯', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-6.jpg') },
      { label: '可米生活白夜童话暖', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-7.jpg') },
      { label: '热风新款女士平底拖鞋', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-8.jpg') },
      { label: '千鸟格羽绒服滑雪外套', price: '223', originalPrice: '645', url: require('@/assets/imgs/new-products-9.jpg') },
    ],
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  render() {
    let { 
      ads, 
      clsHots, 
      brands, 
      seckills, 
      titleUrl, newProducts, 
      recommendationTitleUrl, recommendations, 
      populars 
    } = this.state
    return (
      <View className='p_lr_40'>
        {/* advertisement 轮播广告（6个图片轮播） */}
        <Advertisement list={ads}></Advertisement>
        {/* classification-hot 热门分类（热门分类10个，2行，图文） */}
        <ClassificationHot list={clsHots}></ClassificationHot>
        {/* brand-hot 热门品牌（热门品牌4个，4行，图片） */}
        <BrandHot list={brands}></BrandHot>
        {/* seckill 秒杀（3个） */}
        <Seckill list={seckills}></Seckill>
        {/* new-products 新品（上面一个图片表示类目，下面8个商品滚动+查看更多）（食品，居家用品，百货，母婴） */}
        <NewProducts titleUrl={titleUrl} list={newProducts}></NewProducts>
        {/* recommendation 特色推荐（上面一个品牌，下面三个商品）（推荐旗舰店） */}
        <Recommendation titleUrl={recommendationTitleUrl} list={recommendations}></Recommendation>
        {/* popular-products 人气精品（一排两个推荐商品） */}
        <PopularProducts list={populars}></PopularProducts>
      </View>
    );
  }
}
