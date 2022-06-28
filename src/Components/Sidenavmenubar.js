import React, { useEffect, useState } from "react";
import { Nav, Accordion, Card } from "react-bootstrap";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosApps } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
// import { GiMusicalScore } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
function Sidenavmenubar() {
  // useEffect(() => {
  //   highLighter(location.pathname);
  // }, [location]);
  const [selectedSection, setSelectedSection] = useState("0");

  return (
    <div className="Sidebar">
      <Card
        style={{
          width: "17rem",
          height: "821px",
          backgroundColor: "#000000",
          display: "flex",
        }}
      >
        <h1 className="bg">
          <img
            style={{
              backgroundColor: "#000000",
            }}
            src={require("file:///Users/gowthamganesan/Downloads/umg_logo/umg_logo.png")}

            // style={{ backgroundColor: "#000000" }}
          />
          {/* style={{ backgroundColor: "#000000" }} */}
          <hr class="new4"></hr>
          {/* <Accordion className="bsPrefix" defaultActiveKey="0"> */}
        </h1>

        <div className="px-7">
          <hr></hr>
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
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" active={setSelectedSection}>
            <Accordion.Header>
              <Nav.Link href="/">
                <span className="spacetoimg px-2">
                  <AiFillDashboard />
                </span>
                Dashboard
              </Nav.Link>
            </Accordion.Header>
          </Accordion.Item>

          <Accordion.Item eventKey="1" active={setSelectedSection}>
            <Accordion.Header>
              <Nav.Link href="/Applications">
                <span className="spacetoimg px-2">
                  <IoIosApps />
                </span>
                Applications
              </Nav.Link>
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Item>
                <Nav.Link href="/Applications">All Application</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/edit/newData">Add New</Nav.Link>
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
          <Accordion.Item eventKey="2" active={setSelectedSection}>
            <Accordion.Header>
              <Nav.Link href="/Shopifystores">
                <span className="spacetoimg px-2">
                  <FaShopify />
                </span>
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
                {/* <span className="spacetoimg px--3"> */}
                <BiLogInCircle style={{ marginLeft: "7px" }} />
                {/* </span> */}
                <span style={{ marginLeft: "10px" }}>
                  AuthenticationProvider
                </span>
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
                <span className="spacetoimg px-2">
                  <AiOutlineLogout />
                </span>
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

export default Sidenavmenubar;
