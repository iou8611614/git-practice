import {ref, computed} from 'vue';

export default function useCounter(){
    let count = ref(0);
    let double = computed(()=>count.value*2);

    function addCounter(){
        count.value++;
    }

    function reduceCounter(){
        count.value--;
    }

    function resetCounter(){
        count.value = 0;
    }

    return {
        count,
        double,
        addCounter,
        reduceCounter,
        resetCounter
    }
}