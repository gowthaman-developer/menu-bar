import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BiLogInCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";

export default function AddNewaut() {
  const [editData, setEditData] = useState({});
  const [value, setValue] = useState(false);
  const [global, setGlobal] = useState(true);
  const params = useParams();
  const conditionalRender = () => {
    axios
      .get(
        `http://localhost:9000/authenticationproviders/${params.authenticationprovider_Id}`
      )
      .then((response) => {
        setEditData(response.data);
        setGlobal(response.data.global);
        setValue(true);
      });
  };
  useEffect(() => {
    if (params.authenticationprovider_Id === "addNew1") {
      return;
    }
    conditionalRender();
  }, []);
  const nameHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      name: event.target.value,
    }));
  };

  const providerHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      provider_id: event.target.value,
    }));
  };
  const clientIDHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      client_id: event.target.value,
    }));
  };
  const clientsecretHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      client_secret: event.target.value,
    }));
  };

  const appIDHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      app_id: event.target.value,
    }));
  };
  const GlobalHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      global: event.target.checked,
    }));
  };

  const stateHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      state: event.target.value,
    }));
  };

  const onSaveHandler = () => {
    if (params.authenticationprovider_Id === "addNew1") {
      const data = [editData];
      console.log(data);
      axios.post("http://localhost:9000/authenticationproviders", data);
    } else {
      const putData = {
        name: editData.name,
        client_id: editData.client_id,
        client_secret: editData.client_secret,
        provider_id: editData.provider_id,
        state: editData.state,
        app_id: editData.app_id,
        global: editData.global,
      };
      console.log(putData);
      axios.put(
        `http://localhost:9000/authenticationproviders/${params.authenticationprovider_Id}`,
        putData
      );
    }
  };
  return (
    <div className="addauth">
      <Row>
        <Col sm={3}></Col>
        <Col sm={9} style={{ marginTop: "-790px", marginLeft: "-11px" }}>
          <div
            className="addnewapp"
            style={{ width: "950px", backgroundColor: "white" }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <BiLogInCircle
                color="#B6B6B6"
                fontSize="40px"
                style={{ marginRight: "20px", marginTop: "-8px" }}
              />
              Edit Authentication Providers
            </h2>

            <hr></hr>
          </div>
          <Form style={{ width: "50%", marginLeft: "180px", marginTop: "5px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Name
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the name
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="name"
                  value={editData.name}
                  onChange={nameHandler}
                />
              ) : (
                <Form.Control type="name" onChange={nameHandler} />
              )}
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "15px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the ID
                </span>
              </Form.Label>
              {value ? (
                <Form.Control type="name" value={params.provider_Id} />
              ) : (
                <Form.Control type="name" />
              )}
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Provider ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the Provider ID
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="id"
                  value={editData.provider_id}
                  onChange={providerHandler}
                />
              ) : (
                <Form.Control type="id" onChange={providerHandler} />
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Client ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the Client ID
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="id"
                  value={editData.client_id}
                  onChange={clientIDHandler}
                />
              ) : (
                <Form.Control type="id" onChange={clientIDHandler} />
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Client Secret
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the Client Secret
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="name"
                  value={editData.client_secret}
                  onChange={clientsecretHandler}
                />
              ) : (
                <Form.Control type="name" onChange={clientsecretHandler} />
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Application IDs
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the ApplicationIds
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="name"
                  value={editData.app_id}
                  onChange={appIDHandler}
                />
              ) : (
                <Form.Control type="name" onChange={appIDHandler} />
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              Is Global
              <span
                style={{
                  marginLeft: "18px",
                  fontSize: "14px",
                  color: "#C8C8C8",
                }}
              >
                Enter the State
              </span>
              {/* {value ? (
                <Form.Control
                  type="name"
                  value={editData.global}
                  onChange={GlobalHandler}
                />
              ) : (
                <Form.Control type="name" onChange={GlobalHandler} />
              )} */}
            </Form.Group>
            <Form style={{ display: "flex", marginTop: "-25px" }}>
              {["checkbox"].map((type) => (
                <div
                  className="mb-3"
                  style={{ display: "flex", marginTop: "10px" }}
                >
                  <Form.Check
                    active
                    type={type}
                    label={`Global`}
                    defaultChecked={editData.global != null ?? editData.global}
                    id={`disabled-default-${type}`}
                    style={{ marginLeft: "20px" }}
                    name="true"
                    onClick={GlobalHandler}
                  />
                </div>
              ))}
            </Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                state
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "14px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the state
                </span>
              </Form.Label>
              {value ? (
                <Form.Control
                  type="name"
                  value={editData.state}
                  onChange={stateHandler}
                />
              ) : (
                <Form.Control type="id" onChange={stateHandler} />
              )}
            </Form.Group>
          </Form>
          <div
            className="add-btn"
            style={{ display: "flex", backgroundColor: "white" }}
          >
            <div
              className="add-btn1"
              style={{ backgroundColor: "white", paddingLeft: "50%" }}
            >
              <Button variant="outline-secondary">
                <a
                  href="/AuthenticationProvider"
                  style={{ color: "grey", textDecoration: "none" }}
                >
                  cancel
                </a>
              </Button>
            </div>
            <div
              className="add-btn2"
              style={{ backgroundColor: "white", paddingLeft: "5%" }}
            >
              <Button
                variant="info"
                className="add-btn21"
                onClick={onSaveHandler}
              >
                <a
                  href="/AuthenticationProvider"
                  style={{
                    backgroundColor: "sky blue",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Save
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
