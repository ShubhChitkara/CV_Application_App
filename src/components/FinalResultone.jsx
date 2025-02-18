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
      <h5>Degree-Name: {degreename}</h5>
      <h6>
        Study-Timeline: {startofstudy}-{endofstudy}
      </h6>
      <h4>Company-Name: {companyname}</h4>
      <h5>Position-Title: {positiontitle}</h5>
      <h6>Responsibilties: {responsibilities}</h6>
      <h6>
        Work-Timeline: {startofwork}-{endofwork}
      </h6>
      <button className="edit" onClick={editbtn}>
        Edit
      </button>
    </div>
  );
}
export default Resultone;
