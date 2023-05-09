import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Create() {
    const [user,setUser]=useState({
        name:"",
        age:"",
        address:""
    });
    const handleChange=(event)=>{
        setUser({
            ...user,
            [event.target.name]:event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8080/api/createUser",user)
            .then(response=>{
                console.log("create success",response.data);
                setUser({
                    name:"",
                    age:"",
                    address:""
                })

                }
            ).catch(error=>{
            console.log(error)
        })
      
    };
    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create</button>
                <button><Link to={"/"}>Back</Link></button>
            </form>
        </div>
    );

}