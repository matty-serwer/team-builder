import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

const initialFormValues = { name: "", email: "", role: "" };
const testList = [
  {
    name: "Matty",
    email: "Matthew.Serwer@gmail.com",
    role: "Front End Developer",
  },
  {
    name: "Mr. Robot",
    email: "MrRobot@gmail.com",
    role: "Back End Developer",
  },
];

function App() {
  const [memberList, setMemberList] = useState(testList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    let newMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    };
  

    setMemberList([...memberList, newMember ]);
    // console.log(memberList)
    // debugger;
  };

  return (
    <div className='App'>
      <div className='memberList'>
        {memberList.map((member, idx) => {
          return (
            <div key={idx}>
              Team-Member: {member.name}, Email: {member.email}, Role:{" "}
              {member.role}
            </div>
          );
        })}
      </div>
      <Form values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
