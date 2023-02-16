import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-bootstrap'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    };
  return (
    <div>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-5 p-3" style={{ width: "1000%" }}>
            <h3 className="text-center col-lg-6 mb-3">Sign In</h3>
            <br />
            <Form>
           
            <Form.Group className="mb-4 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getdata}
                placeholder="Enter email"
              />
            </Form.Group>
           
            <Form.Group
              className="mb-4 col-lg-6"
              onChange={getdata}
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button
              className="d-grid gap-2 col-lg-6"
              onClick={addData}
              style={{ background: "#27DEC0", border: "none" }}
              variant="success"
              type="submit"
            >
              Submit
            </Button>
          </Form>
            <p className="mt-3 text-start" style={{ width: "100%" }}>
              <small>If you don't have an account, Please</small> <span><NavLink to="/">Sign Up</NavLink></span>
            </p>
          </div>
          <Sign_img />
        </section>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
