import React, { useState } from "react";
import "../css/dashboard.css";
import mydex from "../img/mydex.png";
import { Nav, Container, Image } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { BiMenuAltLeft } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import Main from "./Main"

const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Nav
          className="
          px-4
          py-2
          shadow
          navbar navbar-expand-lg
          bg-darkblue
          overflow-hidden
         
        "
        >
          <Container className="d-flex justify-content-between aling-items-center">
            <button
              className="btn p-0 "
              onClick={() => handleToggle()}
            >
            {(clicked) ? <BiMenuAltLeft id="btn"></BiMenuAltLeft> : <BiMenu  id="btn"></BiMenu>}
            </button>
            <Link to="/" className="navbar-brand fs-5 fw-bold" >
              DEX DASHBOARD
            </Link>
            <Link to="/" className="navbar-brand fs-5 fw-bold" >
            <Image
                alt="mydex logo"
                src={mydex}
                width="100"
                height="auto"
                className="d-inline-block align-top"
              />
            </Link>
          </Container>
        </Nav>
      </header>
     <Main clicked={clicked}></Main>
    </>
  );
};

export default Navigation;
