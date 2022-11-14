class todoservice{
    todo_data = {
        "todo":[{
            "id":1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":2,
            "title": "T2",
            "description": "D2",
            "done": false
        },{
            "id":3,
            "title": "T3",
            "description": "D3",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(request){
        this.todos.todo.push((request.body));
        return this.todos;
    }
     
    delete_todo(request){
        this.todos.todo.splice(this.todo_data.todo.indexOf({"id": request.params.id}),1)
        return this.todos;
    }

    update_todo(request) {
        this.todos.todo.map(data => {
            (data.id == request.params.id) ?
                (data.done=request.body.done) : (data)
        })
        console.log(this.todos)
        return this.todos
    }

}


module.exports= todoservice;