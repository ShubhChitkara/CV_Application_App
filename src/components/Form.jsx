import React from "react";
import { useState } from "react";
import Resultone from "./FinalResultone.jsx";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schoolname, setSchoolName] = useState("");
  const [degreename, setDegreeName] = useState("");
  const [startofstudy, setStartOfStudy] = useState("");
  const [endofstudy, setEndOfStudy] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [positiontitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startofwork, setStartOfWork] = useState("");
  const [endofwork, setEndOfWork] = useState("");
  const [editmodeinuse, setEditModeInUse] = useState(false);
  
  if (!editmodeinuse) {
    return (
      <div>
        <Resultone
          name={name}
          email={email}
          phone={phone}
          schoolname={schoolname}
          degreename={degreename}
          startofstudy={startofstudy}
          endofstudy={endofstudy}
          companyname={companyname}
          positiontitle={positiontitle}
          responsibilities={responsibilities}
          startofwork={startofwork}
          endofwork={endofwork}
          editbtn={setEditModeInUse(true)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault;
          }}
        >
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              School-Name:
              <input
                type="text"
                name="schoolname"
                value={schoolname}
                onChange={(event) => {
                  setSchoolName(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Degree-Name:
              <input
                type="text"
                name="degreename"
                value={degreename}
                onChange={(event) => {
                  setDegreeName(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Start-Of-Study:
              <input
                type="date"
                name="startofstudy"
                value={startofstudy}
                onChange={(event) => {
                  setStartOfStudy(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              End-Of-Study:
              <input
                type="date"
                name="endofstudy"
                value={endofstudy}
                onChange={(event) => {
                  setEndOfStudy(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Company-Name:
              <input
                type="text"
                name="companyname"
                value={companyname}
                onChange={(event) => {
                  setCompanyName(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Position-Title:
              <input
                type="text"
                name="positiontitle"
                value={positiontitle}
                onChange={(event) => {
                  setPositionTitle(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Responsibilities:
              <input
                type="text"
                name="responsibilities"
                value={responsibilities}
                onChange={(event) => {
                  setResponsibilities(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Start-Of-Work:
              <input
                type="date"
                name="startofwork"
                value={startofwork}
                onChange={(event) => {
                  setStartOfWork(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              End-Of-Work:
              <input
                type="date"
                name="endofwork"
                value={endofwork}
                onChange={(event) => {
                  setEndOfWork(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button
              onClick={(event) => {
                event.preventDefault();
                setEditModeInUse(false);
                console.log(editmodeinuse);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
