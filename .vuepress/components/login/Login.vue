<template>
  <div class="login-form">
    <div class="form-header">用户名</div>
    <div>
      <input type="text" class="form-control" v-model="username" />
    </div>
    <div class="form-header">密码</div>
    <div>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <div class="btn-row">
      <button class="btn1" @click="login">登录</button>
      <button class="btn" @click="register">注册</button>
    </div>
    <br />
    <a class="qqLogin" href="#" @click="qqLogin()"
      ><img src="/qq_login.png"
    /></a>
  </div>
</template>
  
  <script>
import { STORAGE_KEY } from './helper'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登录
    login () {
      if (this.username && this.password) {
        const data = JSON.stringify({
          name: this.username,
          time: new Date().getTime()
        })
        window.localStorage.setItem(STORAGE_KEY, data)
        this.$emit('close', true)
      } else {
        this.$dlg.alert('Please complete the content', {
          messageType: 'warning'
        })
      }
    },
    // 注册
    register () {

    },
    // QQ登录
    qqLogin () {
      //以下为按钮点击事件的逻辑。注意这里要重新打开窗口
      //否则后面跳转到QQ登录，授权页面时会直接缩小当前浏览器的窗口，而不是打开新窗口
      var A = window.open("http://www.liuyingxing.com/oauth/render", "TencentLogin", "width=450,height=320,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1");
    }
  }
}
  </script>
  
  <style lang="stylus">
  .login-form {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .btn-row {
      margin-top: 1rem;
      text-align: center;
    }

    .btn {
      padding: 0.6rem 2rem;
      outline: none;
      background-color: #60C084;
      color: white;
      border: 0;
      margin-left: 2rem;
    }

    .btn1 {
      padding: 0.6rem 2rem;
      outline: none;
      background-color: blue;
      color: white;
      border: 0;
    }

    .qqLogin {
      text-align: center;
    }

    .form-header {
      color: #666;
      margin-bottom: 0.5rem;
    }

    .form-control {
      padding: 0.6rem;
      border: 2px solid #ddd;
      width: 100%;
      margin-bottom: 0.5rem;
      box-sizing: border-box;
      outline: none;
      transition: border 0.2s ease;

      &:focus {
        border: 2px solid #aaa;
      }
    }
  }
</style>
