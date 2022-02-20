import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: 'This is store state',
    price: 999,
    num: 123,
    total: 0,
    discount: 0.8
  },
  mutations: {
    discountPrice(state,payload){
      state.total = payload * state.discount;
    },
    doSome(state,payload){
      console.log("State ==> ",state)
      console.log("Call ==> ",payload)
      alert("Do Something..."+payload)
    }
  },
  actions: {
    callMutations(context,payload){
      console.log("Context ==> ",context)
      context.dispatch('sayHello')
      context.commit('doSome',payload)
    },
    sayHello(){
      console.log("Say hello")
    }
  },
  modules: {
  },
  getters: {
    sellingPrice(state){
      return state.price +1;
    },
    showTotal(state){
      return state.total;
    }
  }
})
