<template>
    <h1>Vuex Component 1</h1>
    <span>{{titleMsg}}</span>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
export default {
    setup(){
        const store = useStore();
        const titleMsg = computed(()=>store.state.msg)
        return {
            titleMsg
        }
    }
}
</script>

<style>

</style>