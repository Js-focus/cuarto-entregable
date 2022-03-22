import './App.css';
import UserList from './components/UserList';
import UsersForm from './components/UsersForm';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFetch from './hooks/useFetch';
import axios from 'axios';

function App() {

  const { register, handleSubmit, reset } = useForm();
  const [dataUser, setDataUser] = useState(null);
  const {dataUsers, setDataUsers} = useFetch("https://users-crud1.herokuapp.com/users/");
  const [toEdit, setToEdit] = useState(undefined);

  console.log(dataUser)
  const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
  }
  
//Users default
  const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then( (res) => setDataUsers(res.data) )
  }

//add new user
  const addUser = (user) => {
    console.log(user)
    axios.post("https://users-crud1.herokuapp.com/users/", user)
    .then(()=> getUsers())
  }

//select user to edit
  const selectUser = (user) => {
    if(user){
    axios.get(`https://users-crud1.herokuapp.com/users/${user?.id}/`)
    .then( (res) => setToEdit(res?.data))
    }else if(user === undefined){
     reset(defaultValues);
    }
  }
//update changes in data
  const upDate = (data) => {
    console.log(data)
    if(toEdit){
    axios.put(`https://users-crud1.herokuapp.com/users/${data?.id}/`, data)
    .then( () => getUsers())
    }else if(toEdit === undefined){
      setToEdit(undefined);
     
    }
  }
  
  
  const deleteUser = (id) => {
    console.log(id)
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`, )
    .then( () => getUsers() )
  }
  
  return (
    <div className="App">
      <UserList 
        dataUsers={dataUsers}   
        selectUser={selectUser}
        deleteUser ={deleteUser}
      />
      
      <UsersForm 
        register={register} 
        handleSubmit={handleSubmit} 
        setDataUser={setDataUser} 
        addUser={addUser} 
        reset={reset} 
        toEdit={toEdit}
        setToEdit={setToEdit}
        selectUser={selectUser}
        upDate={upDate}
        defaultValues={defaultValues}
      />
    </div>
  );
}

export default App;
