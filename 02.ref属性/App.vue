<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom" ref="btn">点我输出上方的元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
//引入school组件
import School from './components/School.vue'
    export default {
        name:'App',
        data () {
            return {
                msg:'欢迎学习Vue'
            }
        },
        components:{
            School
        },
        methods: {
            showDom(){
                console.log(this.$refs.title);
                console.log(this.$refs.btn);
                console.log(this.$refs.sch);  //school组件的实例对象
            }
        },
    }
</script>

