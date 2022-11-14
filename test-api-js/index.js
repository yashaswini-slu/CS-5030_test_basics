var express =require('express') ;
var app = express();

app.use(express.json());
var todoservice =require('./todo.service.js');


app.get('/todolist', function (req, res) {
  // console.log('API called with GET:' + req.url);
  let todo_service = new todoservice();
  res.json(todo_service.get_todos());
})

app.post('/addToDo', function(request, response) {
  let todo_service = new todoservice();
  response.json(todo_service.add_todo(request))
})

app.put('/updateToDo/:id', function(request, response) {
  let todo_service = new todoservice();
  response.json(todo_service.update_todo(request))
})

app.delete('/deleteToDo/:id', function(request, response) {
  let todo_service = new todoservice();
  response.json(todo_service.delete_todo(request))
})



// Add more api calls here for each requirement

// app.listen(3000, function () {
//   // console.log(' app listening on port 3000!')
// })

module.exports = app;
