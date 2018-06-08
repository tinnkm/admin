import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getApproves } from './approveData'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/getApproves/, getApproves)

export default Mock
