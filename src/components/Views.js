import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default  function  Views () {
    const {id}=useParams();
    const [user,setUser]=useState({

    });
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/find-by-id/${id}`)
            .then(response=>{
                setUser(response.data)
            })
    },[id])
    return(
        <div>
            <h1>Edit User</h1>
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
                <button ><Link to={"/"}>Back</Link></button>


        </div>
    )

}