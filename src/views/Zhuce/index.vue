<template>
  <div>
   输入姓名：<input type="text" v-model="input1"><br/>
   输入用户名：<input type="text" v-model="input2"><br/>
   输入密码：<input type="text" v-model="input3"><br/>
   确认密码：<input type="text" v-model="input4"><br/>
   <el-button type="success" @click="hxx">注册</el-button>
  </div>
</template>

<script>
import axios from "axios"
export default {
data(){
  return {
      input1: '',
      input2:"",
      input3:"",
      input4:""
    }
},
methods:{
    hxx(){
     if(this.input3 === this.input4){
       axios.post("/api/register",{
        userName:this.input2,
        password:this.input3,
        realName:this.input1
     }).then(res=>{
       console.log(res)
       if(res.data.code === 1){
         this.$router.push({
           path:"/denglu"
           })
       }
     })
     }else{
       alert("密码不一致，请重新输入")
     }
     }
}
}
</script>

<style>

</style>