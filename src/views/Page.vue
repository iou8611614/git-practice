<template>
    <h3>
        This is X Page, Message: {{message}}
        <button @click="triggerUpdate">Update</button>
    </h3>
</template>

<script>
export default {
    props:['message'],
    setup(props,{emit}){
        props;
        function triggerUpdate(){
            emit('update','Hello Parent')
        }
        return {
            triggerUpdate
        }
    }
}
</script>

<style>

</style>