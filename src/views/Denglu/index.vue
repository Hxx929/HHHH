<template>
  <div>
    <el-input v-model="input" placeholder="请输入账号"></el-input>
    <el-input placeholder="请输入密码" v-model="input1" show-password></el-input>
    <el-button type="primary" @click="dl">登录</el-button>
    <el-button type="success">注册</el-button>
  </div>
</template>

<script>
import axios from "axios"
export default {
data() {
    return {
      input: '',
      input1:""
    }
  },
  methods:{
    dl(){
      let userName=this.input
      let password= this.input1
      axios.post("/api/login",{
        userName,
        password
      }).then(res=>{
        console.log(res)
        if(res.data.code === 1){
          window.localStorage.token = res.data.token
          let redirect = this.$route.query 
          if(redirect){
            this.$router.push({
              path: "/redirect"
            })
          }else{
            this.$router.push({
              path:"/"
            })
          }
        }else{
          this.$router.push({
            path:"/zhuce"
          })
        }
      })
    }
  }
}
</script>

<style>

</style>