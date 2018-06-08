import axios from 'axios'
import qs from 'qs'
// import Base64 from 'js-base64'

// global axio defaults start
if (process.env.NODE_ENV === 'development') {
  // axios.default.baseURL = 'http://localhost:8080'
} else if (process.env.NODE_ENV === 'debug') {
  // axios.default.baseURL = 'http://localhost:8080'
} else if (process.env.NODE_ENV === 'production') {
  axios.default.baseURL = ''
}
// if need credentials
// axios.defaul.withCredentials = true //default false

// Serializer data
axios.defaults.transformRequest = [ (data) => {
  return qs.stringify(data)
}]
// global axio defaults end

// if need cancel request
var CancelToken = axios.CancelToken
let pending = {}
// request interceptors
axios.interceptors.request.use(config => {
  // get flag
  let flag = config.url + qs.stringify(config.params) + qs.stringify(config.data)
  if (pending[flag]) {
    pending[flag]('cancle the request by user, because of it is repeated!')
    // if this request has been cancled then remove this flag
    delete pending[flag]
  } else {
    config.cancelToken = new CancelToken((c) => {
      pending[flag] = c
    })
  }
  return config
}, error => {
  console.error(error.data.message)
  return Promise.reject(error.data.message)
})

// response interceptors
// return json format
// {
//   result : 1,//1 -> success 0 --> failed -1 --> unknow
//   message : '',
//   data : object
// }
axios.interceptors.response.use(response => {
  if (response.data.code !== 'Success') {
    return Promise.reject(response)
  }
  return response.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break
      case 401:
        err.message = '未授权，请重新登录'
        break
      case 403:
        err.message = '拒绝访问'
        break
      case 404:
        err.message = '请求错误,未找到该资源'
        break
      case 405:
        err.message = '请求方法未允许'
        break
      case 408:
        err.message = '请求超时'
        break
      case 500:
        err.message = '服务器端出错'
        break
      case 501:
        err.message = '网络未实现'
        break
      case 502:
        err.message = '网络错误'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网络超时'
        break
      case 505:
        err.message = 'http版本不支持该请求'
        break
      default:
        err.message = `连接错误${err.response.status}`
    }
    return Promise.resolve(err.response)
  } else {
    return Promise.reject(err)
  }

})

let getPromiseInstance = (config) => {
  // why get a promise ?
  // usually, axios will get a promise instance but if use async await and get an error
  // axios will not return a promise instance!
  return new Promise((resolve, reject) => {
    axios({
      method: config.method || 'get',
      url: config.url,
      params: config.params,
      headers: {
        'Content-Type': config.contentType || 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      resolve(res)
    }).catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message)
      } else {
        console.error('Request errored', thrown.message)
      }
    })
  })
}
// export

export default {
  get (url, params) {
    return getPromiseInstance({url, params, method: 'get'})
  },
  post (url, params) {
    return getPromiseInstance({url, params, method: 'post'})
  },
  put (url, params) {
    return getPromiseInstance({url, params, method: 'put'})
  },
  delete (url, params) {
    return getPromiseInstance({url, params, method: 'delete'})
  }
}
