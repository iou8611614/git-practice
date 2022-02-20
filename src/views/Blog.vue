<template>
  <div class="blog">
    <h1>This is Blog</h1>
    <!-- <router-link to="/blog/contentPage/99/posts/helloWorld">Content</router-link> | -->
    <router-link :to="{path: '/blog/contentPage/123/posts/jason_wang'}">Content</router-link> |
    <router-link to="/blog/leftSideBar">SideBar</router-link> |
    <router-link to="/blog/leftSideBar" custom v-slot="{href, route, navigate, isActive}">
      <button :href="href" :active="isActive" @click="navigate" role="link">
        {{route.fullPath}}
      </button>
    </router-link>
    <router-view></router-view>
    
    <h1>Total Price: {{total}}</h1>
    <input type="number" v-model="price" @change="update">
    <vcomponent1></vcomponent1>
    <vcomponent2></vcomponent2>
    <button @click="check">dispatch</button>
  </div>
</template>

<script>
import Vcomponent1 from "../views/VuexComponent_1.vue";
import Vcomponent2 from "../views/VuexComponent_2.vue";
import { computed, ref, } from 'vue';
import {useStore, } from 'vuex';
export default {
  setup(){

    const store = useStore();
    const price = ref(0);
    const total = computed(()=>store.getters.showTotal);
    console.log(total)
    function update(){
      console.log(price.value)
      store.commit('discountPrice', price.value);
    }

    function check(){
      store.dispatch('callMutations',99)
    }


    return {
      price,
      update,
      total,
      check
    }
  },
  // computed:{
  //   ...mapState(['msg','price','num']),
  //   sayHello(){
  //     return "Say Hello!"
  //   }
  // },
  methods:{
    test(){
      console.log(this.$store.state.msg)
    }
  },
  components:{
    Vcomponent1,
    Vcomponent2
  },
}
</script>

<style scoped>
.router-link-active {
  background-color: pink;
}
</style>