import React from "react";
import { Nav, Accordion, Card } from "react-bootstrap";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosApps } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
// import { GiMusicalScore } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
function sidenavmenubar() {
  return (
    <div className="sidebar">
      <Card
        style={{
          width: "14rem",
          height: "821px",
          backgroundColor: "#000000",
          display: "flex",
        }}
      >
        <h1 className="bg-dark">
          <img
            src={require("file:///Users/gowthamganesan/Downloads/umg_logo/umg_logo.png")}
          />
          <hr class="new4"></hr>
          {/* <Accordion className="bsPrefix" defaultActiveKey="0"> */}
        </h1>

        <div className="px-7">
          {/* <Accordion className="bsPrefix" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Nav.Link href="/Dashboard">
                  <AiFillDashboard />
                  Dashboard
                </Nav.Link>
              </Accordion.Header>
            </Accordion.Item>
          </Accordion> */}

          {/* <Nav.Link href="/Dashboard">
          <AiFillDashboard />
          Dashboard
        </Nav.Link> */}
        </div>
        {/* <Nav className="flex-row"> */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Nav.Link href="/Dashboard">
                <AiFillDashboard />
                {/* <img
                  src={require("file:///Users/gowthamganesan/Downloads/Group%20197.png")}
                /> */}
                Dashboard
              </Nav.Link>
            </Accordion.Header>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Nav.Link href="/Applications">
                <IoIosApps />
                Applications
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="/Applications">All Application</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/AddNew1">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Nav.Link>
                <BiLogInCircle />
                AuthenticationProvider
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="/AuthenticationProvider">
                  All AuthenticationProvider
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/action-2">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item> */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Nav.Link href="/Shopifystores">
                <FaShopify />
                Shopifystores
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="/Shopifystores">All Shopifystores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/AddNew2">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Nav.Link href="/AuthenticationProvider">
                <BiLogInCircle />
                AuthenticationProvider
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="/AuthenticationProvider">
                  AllAuthenticationProvider
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/AddNew3">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <Nav.Link href="/Providers">
                <AiOutlineLogout />
                Providers
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="/Providers">All Providers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/AddNew4">Add New</Nav.Link>
              </Nav.Item>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* </Nav> */}
      </Card>
    </div>
  );
}

export default sidenavmenubar;
