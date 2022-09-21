<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生姓名{{name}}</h2>
    <h2>学生年龄{{age}}</h2>
    <h2>学生性别{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data () {
        return {
            msg:'我是一个无业游民',
        }
    },
    // props:['name','sex','age']  简单接受
    //接受对类型进行限制
/*     props:{
        name:String,
        sex:String,
        age:Number
    } */

    props:{
        name:{
            type:String,
            required:true  //必要的
        },
        age:{
            type:Number, 
            default:42   //默认的
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>
