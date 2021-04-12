<template>
    <div class="home">
        <div>
            计数：{{count}}
        </div>
        <el-button @click="increment(2)">点击增加</el-button>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
        </el-switch>
    </div>
</template>
<script lang='ts'>
import { reactive, toRefs } from 'vue';

export default {
    name: 'Home',
    data() {
        return {
            value: true
        }
    },
    setup() {
        // 定义响应式数据对象
        const state = reactive({
            count: 0
        })

        // 定义页面上可用的事件处理函数
        const increment = (num: number) => {
            state.count += num;
        }

        // 在 setup 中返回一个对象供页面使用
        // 这个对象中可以包含响应式的数据，也可以包含事件处理函数
        return {
            // 将 state 上的每个属性，都转化为 ref 形式的响应式数据
            ...toRefs(state),
            // 自增的事件处理函数
            increment
        };
    }
}
</script>
<style scoped>
.home {}
</style>