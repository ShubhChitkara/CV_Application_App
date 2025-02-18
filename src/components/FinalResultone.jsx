import React from "react";

function Resultone({
  name,
  email,
  phone,
  schoolname,
  degreename,
  startofstudy,
  endofstudy,
  companyname,
  positiontitle,
  responsibilities,
  startofwork,
  endofwork,
  editbtn,
}) {
  return (
    <div className="backgroundforresultbox">
      <h4>Name: {name}</h4>
      <h4>Email-ID: {email}</h4>
      <h4>Phone Number: {phone}</h4>
      <h4>School-Name: {schoolname}</h4>
      <h4>Degree-Name: {degreename}</h4>
      <h4>
        Study-Timeline: {startofstudy}   to   {endofstudy}
      </h4>
      <h4>Company-Name: {companyname}</h4>
      <h4>Position-Title: {positiontitle}</h4>
      <h4>Responsibilties: {responsibilities}</h4>
      <h4>
        Work-Timeline: {startofwork}   to   {endofwork}
      </h4>
      <button className="edit" onClick={editbtn}>
        Edit
      </button>
    </div>
  );
}
export default Resultone;
