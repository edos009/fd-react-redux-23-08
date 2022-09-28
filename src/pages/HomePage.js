import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";

const HomePage = () => {
  return (
    <>
      <UserForm />
      <Link to="/users">Show Users</Link>
    </>
  );
};

export default HomePage;
