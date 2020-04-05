/* eslint-disable react/no-string-refs */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
// import KyeCheckBox from './checkbox'
import '../assets/scss/combination.scss'
// import { IMG } from '../assets'

/**
 * 底部弹框
 * 自下而上拉起
 */
export default class Index extends Component {
	static options = {
		addGlobalClass: true
	}
	static propTypes = {
		// 显示控制
		show: PropTypes.bool,
		// 标题
		title: PropTypes.string,
		// 确认按钮文字
		confirmText: PropTypes.string,
		// 确认按钮控制
		showConfirm: PropTypes.bool,
		// 关闭事件
		onClose: PropTypes.func,
	}
	static defaultProps = {
		show: false,
	}
    stop(e){
    	e.stopPropagation();
    }
	render() {
		let { title, show, onClose } = this.props
		return (
			<View className={`bg_00000080 ${show && 'full_screen'}`} onClick={onClose}>
				{
					show && <View className='p_f po_bottom bg_fff bottom_up' onClick={this.stop}>
						{
							title && <View className='flex_between b_b_solid_F2F0F4 p_tb_20 p_l_40'>
								<View className='f_s_44 f_w_700 c_333'>{ title }</View>
								<View className='flex_center w_100 h_50' onClick={onClose}>
									{/* <Image className='w_30 h_30 ' src={IMG.ICON_CLOSE}></Image> */}
								</View>
							</View>
						}
						{
							this.props.children
						}

					</View>
				}
			</View>
		)
	}
}
