import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllUsers } from "../../redux/Action/userAction";
import Userdata from "./Userdata";

const Users = () => {
  const dispatch = useDispatch();

  const { error, users, loading } = useSelector((state) => state.allUsers);

  // console.log(users);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 gap-4 min-h-[100vh] pt-[15vh]">
      <Sidebar />
      <div className="col-span-5 px-10">
        <h1 className="text-3xl font-semibold text-center mb-5">Users</h1>
        <div className="flex justify-between items-center mb-5 bg-slate-300 px-3 rounded-3xl py-3 font-semibold">
          <span>User ID</span>
          <h1>Email</h1>
          <p>name</p>
          <p>Role</p>
        </div>
        {users && users.map((user, id) => <Userdata user={user} key={id} />)}
      </div>
    </div>
  );
};

export default Users;
