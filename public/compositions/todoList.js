import {ref} from 'vue';

export default function todoList(){
    let todo = ref("");
    let todos = ref([]);

    

    function addTodo(){
        if(todo.value.trim()!==""){
            todos.value.push(todo.value.trim());
        }
        todo.value = "";
    }
    
    function deleteTodo(deleteItem){
        todos.value = todos.value.filter(item=>item!==deleteItem)
    }

    return {
        todo,
        todos,
        addTodo,
        deleteTodo
    }
}