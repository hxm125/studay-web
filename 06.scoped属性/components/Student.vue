<template>
  <div class="demo">
    <h2 class="title">学生姓名{{name}}</h2>
    <h2>学生年龄{{age}}</h2>
  </div>
</template>

<script>

export default {
    name:'Student',
    data () {
        return {
            name:'张三',
            age:19
        }
    },
  

}
</script>
<style scoped>
  .demo{
    background-color: green;
  }
</style>
