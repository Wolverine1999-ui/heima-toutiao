  <template>
   <div class="login-container">
     <div class="login-form-wrap">
     <div class="login-head">
       <div class="logo"></div>
     </div>

       <!--配置 Form 表单验证
       1.必须给 el-from 组件绑定model为表单数据对象
       2.给需要验证的表单项el-form-item绑定prop属性
          注意:prop属性需要指定表单对象中的数据名称
       3.通过 el-form  组件的rules属性配置验证规则
       -->

     <el-form class="login-form"  ref="form" :model="user"  :rules="formRules">
       <el-form-item prop="mobile">
         <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
       </el-form-item>
       <el-form-item prop="code">
         <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
       </el-form-item>
       <el-form-item >
         <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
       </el-form-item>
       <el-form-item>
         <el-button  class="login-btn" type="primary" :loading="loginLoading" @click="onLogin" >登录</el-button>
       </el-form-item>
     </el-form>
     </div>
   </div>
  </template>

  <script>

  import request from '@/utils/request'

  export default {
    name: 'LoginIndex',
    data(){
      return{
        user: {
          mobile:'',  //手机号
          code:''     //验证码
        },
        checked:false,
        loginLoading: false, //登录的 loading 状态
        formRules:{
          mobile: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            // { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
        }
       }
    },
    methods: {
      onLogin () {
        //获取表单数据(根据接口要求绑定数据)
        const user = this.user

        //表单验证


        //验证通过,提交登录

        //开启登录中loading...
        this.loginLoading = true

        request({
          method:'post',
          url: '/mp/v1_0/authorizations',
          //data用来设置 POST 请求体
          data: user
        }).then(res => {
          console.log(res)

          //登录成功
          this.$message({
            message: '登录成功',
            type: 'success'
          })

          //关闭loading
          this.loginLoading = false
        }).catch(err => {
          console.log('登录失败',err)
          //登录失败
          this.$message.error('登录失败,手机号或验证码错误')
        })

        //处理后端相应结果
        //成功:
        //失败:

      }
    }
  }

  </script>

  <style scoped>
  .login-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("../../assets/login_bg.jpg") no-repeat;
    background-size: cover;
  }
  .login-form-wrap{
    min-width: 300px;
    padding: 30px 50px 10px;
    background-color: #fff;
  }
  .login-head{
    display: flex;
    justify-content: center;
  }
  .logo{
    width: 200px;
    height: 57px;
    background: url("../../assets/logo_index.png") no-repeat;
    background-size: contain;
  }
  .login-form .login-btn
  {
    width: 100%;
  }
  </style>
