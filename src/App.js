import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';

function App() {
  const [newName, setNewName] = useState("");
  const [age, setAge] = useState(0);

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db,"users");

  const createUser = async ()=>{
    await addDoc(userCollectionRef, {name: newName, age})
  }
  const userUpdate = async (id,age)=>{
    const userDoc = doc(db, "users", id);
    const newFields = {age:Number(age)+1};
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) =>{
    const userDoc = doc(db,"users",id)
    await deleteDoc(userDoc);
  }

  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
    }
    getUsers();
  },[])
  console.log(process.env)
  return (
    <div className="App">
      <input placeholder="Name ..." onChange={(e)=>{setNewName(e.target.value)}} />
      <input placeholder="Age ..." onChange={(e)=>{setAge(e.target.value)}} />
      <button type="submit" onClick={createUser}>Create User</button>

      {users.map((user)=>{return<div>
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        <button onClick={()=>{userUpdate(user.id,user.age)}}>Increase Age</button>
        <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
      </div>})}

    </div>
  );
}

export default App;
