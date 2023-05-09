import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Edit() {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        age: "",
        address: ""
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/find-by-id/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`http://localhost:8080/api/updateUser/${id}`, user)
            .then((response) => {
                console.log("Người dùng đã được cập nhật thành công");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Edit User</h1>
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
                <button type="submit">Update</button>
                <Link to={"/"}>Back</Link>
            </form>
        </div>
    );
}
