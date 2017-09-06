<template>
  <div class="bimbox-container">
    <div class='title'><h1>坏机器管理系统</h1></div>
    <div class="login">
      <el-form @keyup.enter.native="handleSigninSubmit" :model="signForm" :rules="signRules" ref="signForm">
        <input style="display:none">
        <!-- for disable autocomplete on chrome -->
        <el-alert title="登录错误提示" type="error" v-if="signInError" :description="signInError" show-icon>
        </el-alert>
        <br>
        <el-form-item prop="username">
          <el-input size="large" placeholder="用户名" :autofocus="true" v-model="signForm.username">
            <template slot="prepend"><i class="fa fa-user"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input size="large" type="password" placeholder="请输入密码" v-model="signForm.pwd">
            <template slot="prepend"><i class="fa fa-lock"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="isFetching" :loading="isFetching" size="large" style="width:100%" type="primary"
                     @click="handleSigninSubmit">登录
          </el-button>
        </el-form-item>

      </el-form>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang='ts'>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        signForm: {
          username: 'yzj',
          pwd: '950812'
        },
        signInError: false,
        isFetching: false,
        signRules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'change'},
            {min: 2, max: 15, message: '长度在 2 到 115 个字符', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'change'},
            {min: 5, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    components: {},
    methods: {
      ...mapActions([]),
      handleSigninSubmit () {
        let data = {
          username: this.signForm.username,
          pwd: this.signForm.pwd
        }
        this.$store.dispatch('userLogin', data).then((res) => {
          this.$message({
            type: 'success',
            message: '登陆成功'
          })
          this.$router.push('/machine')
        }).catch(err => {
          this.$message({
            type: 'error',
            message: '用户名或密码错误或服务器错误'
          })
          console.log(err)
        })
//        this.$router.push('/client')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
