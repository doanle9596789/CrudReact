import {Link, useParams,useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

import axios from "axios";

export default function Delete() {
    const {id}=useParams()
    const [user,setUser]=useState({})
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/find-by-id/${id}`)
            .then(response=>{
                 setUser(response.data)
                console.log(user)
            })
            .catch(error=>{
                console.log(error)
            })
    },[id]);

    const HandleDelete=()=>{
        axios.delete(`http://localhost:8080/api/deleteUser/${id}`)
            .then(()=>{
                navigate("/")
            }).catch(error=>{
            console.log(error)
        })
    };

    return(
        <div>
            <h1>Delete User</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    readOnly
                    value={user.name}
                />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    readOnly
                    value={user.age}
                />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    readOnly
                    value={user.address}
                />
            </div>
            <button onClick={()=>{HandleDelete()}}>Delete</button>


        </div>
    )

}