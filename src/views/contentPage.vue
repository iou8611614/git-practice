<template>
    <div class="contentPage">
        <h3>This is Content Page</h3>
        <h1>{{userId}}</h1>
        <h3>{{message}}</h3>
        <button @click="goHome">Bring Me To Home</button>
    </div>
</template>

<script>
import {useRouter} from 'vue-router';
export default {
    props:['userId', 'message'],
    setup(props){
        const router = useRouter();
        console.log(props.userId)
        console.log(props.message)
        function goHome(){
            const num = 7777;
            const name = "Michael"
            router.push(`/blog/contentPage/${num}/posts/${name}`);
        }

        return{
            goHome
        }
   },
   beforeRouteEnter(to,from,next){
       console.log("Before To==> ",to)
       console.log("Before From==> ",from)
       next(vm=>console.log("Before vm==> ",vm))
   },
//    beforeRouteLeave(to, from){
//        console.log(to)
//        console.log(from)
//        const answer = window.confirm("Leave ?")
//        if(!answer) return false
//    }
}
</script>

<style>

</style>