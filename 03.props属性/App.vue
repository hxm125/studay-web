<template>
  <div>
    <Student name='李四' sex = '女' :age = '20'></Student>
    
  </div>
</template>

<script>
//引入school组件
import Student from "./components/Student.vue";
export default {
  name: "App",

  components: {
    Student,
  },
};
</script>

