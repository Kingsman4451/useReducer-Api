import React, { useState, useContext } from "react";
import { context } from "../../context";
import { NavLink } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function () {
  const [showNav, setShowNav] = useState(false);
  const { values } = useContext(context);
  window.localStorage.setItem("link", values.link)



  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer xxl="true">
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        ></MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem onClick={(e) => values.setLink("posts") }>
              <MDBNavbarLink active>
                <NavLink className="text-dark" to="/">Posts</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem onClick={(e) => values.setLink("comments") }>
              <MDBNavbarLink>
                <NavLink className="text-dark" to="/comments">Comments</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem onClick={(e) => values.setLink("todos") }>
              <MDBNavbarLink>
                <NavLink className="text-dark" to="/todos">Todos</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
