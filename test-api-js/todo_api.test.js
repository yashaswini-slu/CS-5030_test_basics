const request = require("supertest");

const app = require("./index");

describe("todo api test suite", () => {
   
    test("GET /",(done)=>{
        request(app).get("/todolist")
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                        
                        return done();
                    })
    });
    
    test("ADD /", async () => {
        let new_to_do = {
            "id":4,
            "title": "Post API",
            "description": "Testing post API",
            "done": false
        }
        await request(app).post("/addToDo")
            .send(new_to_do)
            .then((response)=> {
                let len = response.body.todo.length
                let toDo_Array = response.body.todo
                expect(toDo_Array[len-1].id).toBe(new_to_do["id"])
                expect(toDo_Array[len-1].title).toBe(new_to_do["title"])
                expect(toDo_Array[len-1].toString()).toBe(new_to_do.toString())
                expect(response.body.todo.length).toBe(4);
                expect(response.statusCode).toBe(200); 
            })
    })


    test("DELETE /", async () => {
        await request(app).delete("/deleteToDo/3")
            .then((response) => {
                expect(response.body.todo.length).toBe(2)
            })
    })


});

