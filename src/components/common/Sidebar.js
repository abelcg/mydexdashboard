import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiTachometer } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import { BiShapeCircle } from "react-icons/bi";
import { BiPieChart } from "react-icons/bi";


const Sidebar = (props) => {
  const [isActive, setActive] = useState("");
  
  return (
    <div
      className={
        props.clicked ? "sidebar py-3 ms-0 show" : "sidebar py-3 ms-0 shrink"
      }
    >
      <div className="logo-details">
        <div className="logo_name">MYDEX</div>
      </div>
      <ul className="nav-list ps-0">
        <li>
          <Link key="0" to="/" onClick={() => setActive("0")}>
            <BiTachometer
              className={
                isActive === "0" ? "icon text-muted active" : "icon text-muted"
              }
            ></BiTachometer>
            <span
              className={
                isActive === "0"
                  ? "links_name text-muted active"
                  : "links_name text-muted"
              }
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link key="1" to="/error404" onClick={() => setActive("1")}>
            <BiShapeCircle
              className={
                isActive === "1" ? "icon text-muted active" : "icon text-muted"
              }
            ></BiShapeCircle>
            <span
              className={
                isActive === "1"
                  ? "links_name text-muted active"
                  : "links_name text-muted"
              }
            >
              Tokens
            </span>
          </Link>
        </li>
        <li>
          <Link key="2" to="/error404" onClick={() => setActive("2")}>
            <BiPieChart
              className={
                isActive === "2" ? "icon text-muted active" : "icon text-muted"
              }
            ></BiPieChart>
            <span
              className={
                isActive === "2"
                  ? "links_name text-muted active"
                  : "links_name text-muted"
              }
            >
              Pairs
            </span>
          </Link>
        </li>
        <li>
          <Link key="3" to="/error404" onClick={() => setActive("3")}>
            <BiArchive
              className={
                isActive === "3" ? "icon text-muted active" : "icon text-muted"
              }
            ></BiArchive>
            <span
              className={
                isActive === "3"
                  ? "links_name text-muted active"
                  : "links_name text-muted"
              }
            >
              Docs
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
