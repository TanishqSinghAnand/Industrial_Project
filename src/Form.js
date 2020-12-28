import React, { useState, useEffect } from "react";
import db from "./config";
import "./Form.css";
import firebase from "firebase";
import axios from "axios";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workMailAddress, setWorkMailAddress] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [password, setPassword] = useState("");
  const [mails, setMails] = useState([]);
  var data = [];

  useEffect(() => {
    //  axios
    //    .get(
    //      `https://firestore.googleapis.com/v1/projects/papa-f9ef1/databases/(default)/documents/Users`
    //    )
    //    .then((response) => {
    //      var res = JSON.stringify(response);
    //      var tsa = JSON.parse(res);
    //      data.push(tsa)
    //      console.log(data);
    //      var obj = data[0][data];
    //      console.log(obj);
    //    });

    db.collection("Users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data().work_mail_address}`);
          data.push(doc.data().work_mail_address);
          // console.log("Data ------>>>>>>>>> " + data)
        });
      });
  }, []);

  // const addingToDB = () => {
  //   console.log("exi");
  //   db.collection("Users").add({
  //     company: company,
  //     company_size: companySize,
  //     first_name: firstName,
  //     job_title: jobTitle,
  //     lastName: lastName,
  //     phone_number: phoneNumber,
  //     work_mail_address: workMailAddress,
  //   });
  //   setFirstName("");
  //   setLastName("");
  //   setWorkMailAddress("");
  //   setCompanySize("");
  //   setPhoneNumber("");
  //   setCompany("");
  //   setJobTitle("");
  //   setPassword("");
  // };

  const register = async (e) => {
    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      workMailAddress !== "" &&
      companySize !== "" &&
      phoneNumber !== null &&
      company !== "" &&
      jobTitle !== ""
    ) {
      var tryaa = data.includes(workMailAddress);
      console.log("Boola " + tryaa);
      // tryaa === true ? addingToDB : alert("Already Registered");
      if(data.includes(workMailAddress)) {
        console.log("exi");
        db.collection("Users").add({
          company: company,
          company_size: companySize,
          first_name: firstName,
          job_title: jobTitle,
          lastName: lastName,
          phone_number: phoneNumber,
          work_mail_address: workMailAddress,
        });
        setFirstName("");
        setLastName("");
        setWorkMailAddress("");
        setCompanySize("");
        setPhoneNumber("");
        setCompany("");
        setJobTitle("");
        setPassword("");
      }
      else {
        alert('Email already registered')
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
          <option name="0-500"> 0-500</option>
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
