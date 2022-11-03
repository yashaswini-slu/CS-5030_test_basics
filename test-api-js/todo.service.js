class todoservice{
    todo_data = {
        "todo":[{
            "id":1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":2,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":3,
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        console.log('todo-------', todo)
        this.todos = this.todo_data.todo.push((todo.body));
        return this.todo_data.todo;
    }

    delete_todo(id){
        // Your code here
    }

    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;