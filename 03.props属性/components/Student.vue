<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生姓名{{name}}</h2>
    <h2>学生年龄{{myAge+1}}</h2>
    <h2>学生性别{{sex}}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data () {
        return {
            msg:'我是一个无业游民',
            myAge:this.age
        }
    },
    methods:{
        updateAge(){
            this.myAge++
        }
    },
    // props:['name','sex','age']  简单接受
    //接受对类型进行限制
/*     props:{
        name:String,
        sex:String,
        age:Number
    } */
  //接受对类型进行限制+默认值的指定
    props:{
        name:{
            type:String,
            required:true  //必要的
        },
        age:{
            type:Number, 
            required:true   //默认的
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>
