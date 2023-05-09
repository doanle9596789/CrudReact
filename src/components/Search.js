import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {Link} from "react-router-dom";

function SearchUser() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Xử lý sự kiện thay đổi giá trị ô input tìm kiếm
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Xử lý sự kiện submit form tìm kiếm
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8080/api/findByName/${searchTerm}`)
            .then(response=>{
                setSearchResults(response.data)
            }).catch(error=>{
            console.log(error)
        })
        // Thực hiện tìm kiếm người dùng theo tên ở đây (ví dụ: gọi API, truy vấn cơ sở dữ liệu, ...)
        // Giả sử kết quả tìm kiếm được lưu trong mảng searchResults
        const searchResults = []; // Giả sử kết quả tìm kiếm được lưu trong mảng searchResults
        setSearchResults(searchResults);
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    placeholder="Nhập tên người dùng"
                />
                <button type="submit">Tìm kiếm</button>
                <Link to={"/"}></Link>
            </form>

            {/* Hiển thị kết quả tìm kiếm */}
            <ul>
                {searchResults.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.address}</td>
                            </tr>
                        );
                }
                )}
            </ul>
        </div>
    );
}

export default SearchUser;
