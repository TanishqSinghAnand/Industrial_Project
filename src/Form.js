import React, { useState, useEffect } from "react";
import db from "./config";
import "./Form.css";
import firebase from "firebase";
import axios from "axios";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workMailAddress, setWorkMailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [companySize,setCompanySize] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [password, setPassword] = useState("");
  var data = [];

  const register = async (e) => {
        e.preventDefault();

    await db.collection("Users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data().work_mail_address);
        });
      });
    if (
      firstName !== "" &&
      lastName !== "" &&
      workMailAddress !== "" &&
      password !== ""
    ) {
      var mailo = workMailAddress;
      var com = data.includes(mailo);
      switch (com) {
        case true:
          alert("Email already registered");

          break;
        case false:
          db.collection("Users")
            .add({
              company: company,
              company_size: companySize,
              first_name: firstName,
              job_title: jobTitle,
              lastName: lastName,
              phone_number: phoneNumber,
              work_mail_address: workMailAddress,
            })
            .then(alert("Registered successfully"));
          setFirstName("");
          setLastName("");
          setWorkMailAddress("");
          setCompanySize("");
          setPhoneNumber("");
          setCompany("");
          setJobTitle("");
          setPassword("");
      }
    } else {
      alert("Fill in all the detalis");
    }
  };

  return (
    <div className="form">
      <h1>Sign up now</h1>
      <form className="form">
        <input
          value={firstName}
          placeholder={"First Name"}
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
        />
        <input
          value={lastName}
          placeholder={"Last name"}
          onChange={(event) => setLastName(event.target.value)}
          type="text"
        />
        <input
          value={workMailAddress}
          placeholder={"Work mail address"}
          onChange={(event) => setWorkMailAddress(event.target.value)}
          type="email"
        />
        <input
          value={password}
          placeholder={"Password"}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <select
          value={companySize}
          onChange={(event) => setCompanySize(event.target.value)}
        >
          <option defaultValue name="0-500">
            {" "}
            0-500
          </option>
          <option name="500-2000">500-2000</option>
          <option name="2000-5000">2000-5000</option>
          <option name="5000-10000">5000-10000</option>
          <option name=">10000">{">10000"}</option>
        </select>
        <input
          value={phoneNumber}
          placeholder={"Phone number"}
          onChange={(event) => setPhoneNumber(event.target.value)}
          type="number"
        />
        <input
          value={company}
          placeholder={"Company Name"}
          onChange={(event) => setCompany(event.target.value)}
          type="text"
        />
        <input
          value={jobTitle}
          placeholder={"Job Title"}
          onChange={(event) => setJobTitle(event.target.value)}
          type="text"
        />

        <div className="btn">
          <button
            onClick={register}
            type="submit"
            className="login__signInButton"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
