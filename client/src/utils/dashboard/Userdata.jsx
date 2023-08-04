import React from "react";

const Userdata = ({ user: { _id, name, role, email } }) => {
  return (
    <div key={_id}>
      <div className="flex justify-between items-center bg-slate-200 mb-2 rounded-3xl px-3 py-2 ">
        <span>{_id}</span>
        <p>{email}</p>
        <h1>{name}</h1>

        <p>{role}</p>
      </div>
    </div>
  );
};

export default Userdata;
