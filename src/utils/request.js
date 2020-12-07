 //基于axios封装的请求模块

 import axios from 'axios'

 //axios()
 //axios.get()
 //axios.post()

 //创建一个axios实例,复制一个axios

 const request = axios.create({
  baseURL:'http://ttapi.research.itcast.cn/'
 })


 //请求拦截器



 //响应拦截器






 //导出请求方法
 export default  request

 //谁要用谁就加载 request 模块
 // import request from 'request.js'
 // request.xxx
 // request({
 //   method:,
 //   url:''
 // })
