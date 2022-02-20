<template>
    <button @click="increment">
        Count is: {{count}}, double is: {{double}}
    </button>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
export default {
    setup(){
        const count = ref(0);
        const double = computed(()=>count.value*2);

        const increment = ()=>{
            count.value++;
        }

        onMounted(()=>{
            console.log('This component is mounted now!');
        })

        return {
            count,
            double,
            increment
        }
    }
}
</script>

<style>

</style>