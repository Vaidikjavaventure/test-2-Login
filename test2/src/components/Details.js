import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [logindata, setLogindata] = useState([]);

  const history = useNavigate();

  const userDetails = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLogindata(user);
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <h3>Welcome👋</h3> 
          <h1>{logindata[0].name}</h1>
          <Button onClick={userlogout} variant="secondary">LogOut</Button>
        </>
      )}
    </>
  );
};
export default Details;
