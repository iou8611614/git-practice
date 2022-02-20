<template>
    <div class="kv" :class="{scroll:scroll}">
        <ul class="kvList">
            <li v-for="n in total" :key="n" :style="img(n)" :class="{animate: active===n-1 || preactive===n-1}"></li>
        </ul>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    setup(){
        const scroll = ref(false);
        const total = ref(5);
        const animationDuration = 10;
        const active = ref(0);
        const preactive = ref(0);

        const img = function(n){
            return {
                backgroundImage: `url(https://picsum.photos/1920/1200?random=${n})`,
                animationDuration:`${animationDuration}s`,
                // animationDelay: `${(n-1)*animationDuration/2}s`
            }
        }

        window.addEventListener('scroll',function(){
            scroll.value = (window.scrollY > 0);
        });
        
        setInterval(function(){
            preactive.value = active.value;
            active.value = (active.value + 1 + total.value) % total.value;
        },animationDuration/2*1000)

        return {
            scroll,
            total,
            img,
            animationDuration,
            active,
            preactive
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        height: 200vh;
    }
    .kv{
        position: relative;
        width: 100vw;
        height: 100vh;
        /* background-color: orange; */
    }
    .kvList{
        list-style: none;
        position: absolute;
        width: 100%;
        height: 100%;
        /* background-color: darkgray; */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.5s;
    }
    .kvList > li{
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 150% auto;
    }
    .kvList > li.animate{
        animation-name: kvAnimate;
        animation-timing-function: linear;
        /* animation-iteration-count: infinite; */
    }

    .scroll .kvList{
        width: 1000px;
        height: 300px;
    }

    @keyframes kvAnimate{
        0%{
            opacity: 0;
            background-size: 150% auto;
        }
        25%{
            opacity: 1;
        }
        50%{
            opacity: 1;
        }
        75%{
            opacity: 0;
        }
        to{
            opacity: 0;
            background-size: 120% auto;
        }
    }
</style>