import React from "react";
import { Nav, Accordion } from "react-bootstrap";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosApps } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { GiMusicalScore } from "react-icons/gi";
function sidenavmenubar() {
  return (
    <div>
      <h1>
        <GiMusicalScore />
        Music
      </h1>
      <div className="pt-7">
        <Nav.Link href="/Dashboard">
          <AiFillDashboard />
          Dashboard
        </Nav.Link>
      </div>
      <Nav className="flex-row">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Nav.Link href="/Applications">
                <IoIosApps />
                Applications
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="#/action-1">All Application</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/action-2">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Nav.Link href="/AuthenticationProvider">
                <BiLogInCircle />
                AuthenticationProvider
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="#/action-1">
                  All AuthenticationProvider
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/action-2">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Nav.Link href="/Shopifystores">
                <FaShopify />
                Shopifystores
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="#/action-1">All Shopifystores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/action-2">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Nav.Link href="/Providers">
                <AiOutlineLogout />
                Providers
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="#/action-1">All Providers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/action-2">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Nav>
    </div>
  );
}

export default sidenavmenubar;
