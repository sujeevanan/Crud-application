import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [modalShow, setModalshow] = useState(false);
  const [userData, setUserData] = useState({ name: "", age: "", city: "" });

  const getAllusers = async () => {
    await axios.get("http://localhost:8000/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
      setFilterUsers(res.data);
    });
  };
  const HandleSearch = (e) => {
    const inputSearch = e.target.value.toLowerCase();
    const filterUser = users.filter(
      (user) =>
        user.name.toLowerCase().includes(inputSearch) ||
        user.city.toLowerCase().includes(inputSearch)
    );
    setFilterUsers(filterUser);
  };
  //delete function
  const HandleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (isConfirmed) {
      await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
        setUsers(res.data);
        setFilterUsers(res.data);
      });
    }
  };
  const HandleAdd = () => {
    setUsers({ name: "", age: "", city: "" });
    setModalshow(true);
  };
  const HandleClose = () => {
    setModalshow(false);
    getAllusers();
  };
  const HandleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (userData.id) {
      await axios
        .patch(`http://localhost:8000/users/${userData.id}`, userData)
        .then((res) => {
          console.log(res);
        });
    } else {
      await axios.post("http://localhost:8000/users", userData).then((res) => {
        console.log(res);
      });
    }
    HandleClose();
    setUsers({ name: "", age: "", city: "" });
  };
  const HandleUpdate = (user) => {
    setUserData(user);
    setModalshow(true);
    setUsers({ name: "", age: "", city: "" });
  };

  useEffect(() => {
    getAllusers();
  }, []);

  return (
    <>
      <div className="container">
        <h3>Sujee's CRUD Applcation </h3>
        <div className="input-search">
          <input type="text" placeholder="search" onChange={HandleSearch} />
          <button className="btn green" onClick={HandleAdd}>
            Add item
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers &&
              filterUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>
                    <button
                      className="btn green"
                      onClick={() => {
                        HandleUpdate(user);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn red"
                      onClick={() => HandleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {modalShow && (
          <div className="modal">
            <div className="modal-container">
              <span className="close" onClick={HandleClose}>
                &times;
              </span>
              <h1>{userData.id ? "UPDATE RECORD" : "ADD RECORD"}</h1>
              <div className="input">
                <label htmlFor="name">Name </label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={HandleData}
                  id="name"
                  name="name"
                />
              </div>
              <div className="input">
                <label htmlFor="age">Age </label>
                <input
                  type="Number"
                  value={userData.age}
                  onChange={HandleData}
                  id="age"
                  name="age"
                />
              </div>
              <div className="input">
                <label htmlFor="city">City </label>
                <input
                  type="text"
                  value={userData.city}
                  onChange={HandleData}
                  id="city"
                  name="city"
                />
              </div>
              <button className="btn green" onClick={HandleSubmit}>
                {userData.id ? "Update Record" : "Add Record"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
