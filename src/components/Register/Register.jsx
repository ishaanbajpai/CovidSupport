import React from 'react';
import { useState } from 'react';
import styles from './Register.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [token, setToken] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [comorbities, setComorbities] = useState('');
  const [slot, setSlot] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
        const slotDetails = { firstName, lastName, age, number, aadhar, comorbities, slot, gender };
        //setIsPending(true);
        fetch('http://localhost:8000/slotDetails', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(slotDetails)
        })
  }
  return (
    <div className="register">
      <h1>Register for Vaccine</h1>
      <h4>Please enter details same as in aadhar card</h4>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input type="text" required onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name"></input>
        <label>Last Name: </label>
        <input type="text" required onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name"></input>
        <label>Date Of Birth: </label>
        <input type="date" required onChange={(e) => setAge(e.target.value)} placeholder="Date of Birth"></input>
        <label>Gender: </label>
        <select className="slots" onChange={(e) => {
          setGender(e.target.value);
        }}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
        </select>
        <label>Contact Number: </label>
        <input type="tel" required onChange={(e) => setNumber(e.target.value)} pattern="^[789]\d{9}$" placeholder="Enter mobile number"></input>
        <label>Aadhar Number:  </label>
        <input type="number" required onChange={(e) => setAadhar(e.target.value)} placeholder="Enter Aadhar Number"></input>
        <label>Comorbities(if any): </label>
        <select onChange={(e) => {
          setComorbities(e.target.value);
        }}>
          <option value="None">None</option>
          <option value="Hypertension">Hypertension</option>
          <option value="Cardiovascular disease">Cardiovascular disease</option>
          <option value="Respiratory disease">Respiratory disease</option>
          <option value="Diabetes">Diabetes</option>
        </select>
        <label>Slot Timing: </label>
        <select className="slots" onChange={(e) => {
          setSlot(e.target.value);
        }}>
          <option value="slot1">09:00 AM to 10:30 AM</option>
          <option value="slot2">10:30 AM to 12:00 PM</option>
          <option value="slot3">12:00 PM to 03:00 PM</option>
        </select>
        <button>Register Slot</button>
      </form>
    </div>
  );
}

export default Register;