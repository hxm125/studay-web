<template>
  <div class="demo">
    <h2 @click="showName">学生姓名{{name}}</h2>
    <h2>学生年龄{{age}}</h2>
  </div>
</template>

<script>
//引入一个混合
// import { mixin,mixin2 } from "../mixin";
export default {
    name:'Student',
    data () {
        return {
            name:'张三',
            age:19
        }
    },
    //  mixins:[mixin,mixin2]
  

}
</script>
