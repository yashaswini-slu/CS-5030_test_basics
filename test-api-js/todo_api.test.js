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
                let len = response.body.length
                let arr = response.body
                expect(arr[len-1].title).toBe(new_to_do["title"])
                expect(arr[len-1].toString()).toBe(new_to_do.toString())
                expect(response.body.length).toBe(4);
                expect(response.statusCode).toBe(200);
            })
    })
});

