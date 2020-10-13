import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [memberList, setMemberList] = useState([    {
    name: "Matty",
    email: "Matthew.Serwer@gmail.com",
    role: "Front End Developer",
  },
  {
    name: "Mr. Robot",
    email: "MrRobot@gmail.com",
    role: "Back End Developer",
  },]);
  // const testList = [
  //   {
  //     name: "Matty",
  //     email: "Matthew.Serwer@gmail.com",
  //     role: "Front End Developer",
  //   },
  //   {
  //     name: "Mr. Robot",
  //     email: "MrRobot@gmail.com",
  //     role: "Back End Developer",
  //   },
  // ];
  // setMemberList(testList);

  const initialFormValues = { name: "", email: "", petType: "" };

  return <div className='App'>
    <div className='memberList'>
      {memberList.map((member, idx) => {
        return (
        <div key={idx}>
          Team-Member: {member.name}, Email: {member.email}, Role: {member.role}
        </div>
        )}
      )}
    </div>
  </div>
}

export default App;
