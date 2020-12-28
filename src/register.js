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
    db.collection('Users').where('work_mail_address','==',workMailAddress).get().then((data) => {console.log(data)})
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
  } else {
    alert("Fill in all the detalis");
  }
};
