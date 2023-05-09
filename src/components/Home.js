import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/listUser")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <section className="main-content">
                <div className="container">
                    <h1>Users Table UI</h1>
                    <br/>
                    <br/>
                    <table className="table" border={1}>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>Address</th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        {users.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>
                                       <Link to={`/views/${item.id}`}>Views</Link>
                                    </td>
                                    <td>
                                        <Link to={`/edit/${item.id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <Link to={`/delete/${item.id}`}>Delete</Link>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
            <br/>
            <Link to={"/search"}>Search</Link>
            <br/>
           <Link to={`/create/user`}>CreateUser</Link>
        </div>
    );
}

