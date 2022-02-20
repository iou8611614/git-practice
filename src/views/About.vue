<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <h3>Count is: {{count}}</h3>
  <h3>Dbouel is: {{double}}</h3>
  <button @click="addCounter">Add</button>
  <button @click="reduceCounter">Reduce</button>
  <button @click="resetCounter">Reset</button>
  <hr>
  <div class="todoBox">
    <h1>Todo App</h1>
    <input type="text" @keydown.enter.exact="addTodo" v-model="todo" placeholder="enter todo...">
    <button class="addBtn" @click="addTodo">Add</button>
    <ul>
      <li
        v-for="todoItem in todos"
        :key="todoItem"
      >{{todoItem}}
      <button class="deleteBtn" @click="deleteTodo(todoItem)">X</button>
      </li>
    </ul>
  </div>
  <hr>
  <div class="todoBox">
    <h1>Todo App</h1>
    <input type="text" @keydown.enter.exact="addTodo2" v-model="todo2" placeholder="enter todo...">
    <button class="addBtn" @click="addTodo2">Add</button>
    <ul>
      <li
        v-for="todoItem in todos2"
        :key="todoItem"
      >{{todoItem}}
      <button class="deleteBtn" @click="deleteTodo2(todoItem)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import useCounter from '../../public/compositions/counter.js';
import todoList from '../../public/compositions/todoList.js';
export default {
  setup(){
    const {count, double, addCounter, reduceCounter, resetCounter} = useCounter();
    const {todo, todos, addTodo, deleteTodo} = todoList();

    const todoComponent = todoList();
    const todo2 = todoComponent.todo;
    const todos2 = todoComponent.todos;
    const addTodo2 = todoComponent.addTodo;
    const deleteTodo2 = todoComponent.deleteTodo;
    
    return {
      count,
      double,
      addCounter,
      reduceCounter,
      resetCounter,
      todo,
      todos,
      addTodo,
      deleteTodo,
      todo2,
      todos2,
      addTodo2,
      deleteTodo2,
    }
  }
}
</script>

<style scoped>
*{
  position: relative;
  box-sizing: border-box;
  /* border: 1px solid #000; */
}
input,ul,button,li{
  border: 1px solid lightgray;
}
input{
  border-right: none;
  border-radius: 5px 0 0 5px;
  padding: .5rem;
  outline: none;
}
button.addBtn{
  border-left: none;
  border-radius: 0 5px 5px 0;
  background-color: black;
  color: white;
  padding: .5rem 1rem;
  cursor: pointer;
}
button.deleteBtn{
  position: relative;
  border: none;
  background-color: white;
  cursor: pointer;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
  width: 250px;
  margin: 0.5rem auto;
  border-radius: 5px;
  overflow: hidden;
}
li{
  padding: .5rem 0;
  /* border-radius: 5px; */
}
</style>