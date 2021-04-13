<template>
    <h1>msg：{{ msg }}</h1>
    <div>globalColor：{{globalColor}}</div>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>
<script>
import { inject, ref } from 'vue';

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            count: 0
        }
    },
    setup(props, context) {
        const globalColor = inject('globalColor');
        const content = ref('HelloWorld');

        console.log(props, context);
        return {
            globalColor,
            content,
        };
    },
}
</script>