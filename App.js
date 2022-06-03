import './App.css';
import React, { useState } from 'react';
// import FormInput from "./components/FormInput";

/*
const App = () => {
   const[values, setValues] = useState({
     fullname:"",
     email:"",
     password:"",
     date:"",
   });

   const inputs = [
    {
     id:1,
     name:"fullname",
     type:"text",
     placeholder:"fullname",
     label:""
    },

    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"email",
      label:""
     },

     {
      id:3,
      name:"password",
      type:"password",
      placeholder:"password",
      label:""
     },

     {
      id:4,
      name:"date",
      type:"date",
      placeholder:"date",
      label:""
     },
   ]

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value});
  }


  console.log(values);
  */
const Input = ({label, id, handleChange, name, type}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input type={type || 'text'} id={id} name={name || id} onChange={handleChange} required/>
    <br />
  </>
  
);

function App() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[date, setDate,] = useState('');
    const tes = new Date(date);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`You are ${2022-tes.getFullYear()} years old`);
    }
    

  function handleChange(e){
    setName(e.target.value);
    e.preventDefault();
    
  }
  function handleChangeEmail(e){
    setEmail(e.target.value);
    e.preventDefault();
  }
  function handleChangePassword(e){
    setPassword(e.target.value);
    e.preventDefault();
  }
  function handleChangeDate(e){
    setDate(e.target.value);
    e.preventDefault();
  }

  
  return ( 
    <>
      <div class='app'>
      <form onSubmit={handleSubmit}>
      <h1>Form Tugas Web Dev</h1>
      
      <p>Full Name</p>
      <Input id="name" handleChange={handleChange} type="text" />
      
      <p>Email</p>
      <Input id="email" handleChange={handleChangeEmail} type="text"  />

      <p>Password</p>
      <Input id="password" handleChange={handleChangePassword} type="password" />  

      <p>Date</p>
      <Input id="date" handleChange={handleChangeDate} type="date"  />

      <button type='submit'> Submit </button>

    
    <p>Full Name: {name || "<empty>"} </p>
    <p>E-Mail: {email || "<empty>"} </p>  
    <p>Password: {password || "<empty>"} </p>
    <p>Date: {date || "<empty>"} </p>
    </form>
    </div>
    
    </>
  );
}


export default App;
