import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

// const reducerFunction = (states, action) => {
//   switch (action.type) {
//     case "name": {
//       const event = action.payload;
//       return { ...states, name: event.target.value };
//     }
//     case "client": {
//       const event = action.payload;
//       return { ...states, client_id: event.target.value };
//     }
//     case "secret": {
//       const event = action.payload;
//       return { ...states, client_secret: event.target.value };
//     }
//     case "redirect": {
//       const event = action.payload;
//       return { ...states, RedirectURLs: event.target.value };
//     }
//     case "state": {
//       const event = action.payload;
//       return { ...states, state: event.target.value };
//     }
//     default: {
//       return states;
//     }
//   }
// };
// const data1 = {
//   name: "",
//   client_id: "",
//   client_secret: "",
//   RedirectURLs: "",
//   state: "",
// };
// const SearchPage = () => {
//   return (
//     <MDBCol md="6">
//       <div className="input-group md-form form-sm form-1 pl-0">
//         <div className="input-group-prepend">
//           <span className="input-group-text purple lighten-3" id="basic-text1">
//             <MDBIcon className="text-white" icon="search" />
//           </span>
//         </div>
//         <input
//           className="form-control my-0 py-1"
//           type="text"
//           placeholder="Search"
//           aria-label="Search"
//         />
//       </div>
//     </MDBCol>
//   );
export default function AddnewApp() {
  const [editData, setEditData] = useState({});
  const [value, setValue] = useState(false);
  // const [value1, dispatch] = useReducer(reducerFunction, data1);
  const params = useParams();
  const conditionalRender = () => {
    axios
      .get(`http://localhost:9000/Application/${params.provider_Id}`)
      .then((response) => {
        setEditData(response.data);
        setValue(true);
      });
  };
  useEffect(() => {
    if (params.provider_Id === "newData") {
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
  const clientHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      client_id: event.target.value,
    }));
  };
  const secretIdHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      client_secret: event.target.value,
    }));
  };
  const redirectUrlHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      RedirectURLs: event.target.value,
    }));
  };
  const stateHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      state: event.target.value,
    }));
  };
  const onSaveHandler = () => {
    if (params.provider_Id === "newData") {
      const data = [editData];
      axios.post("http://localhost:9000/Application", data);
    } else {
      const putData = {
        name: editData.name,
        client_id: editData.client_id,
        client_secret: editData.client_secret,
        state: editData.state,
        AppId: editData.app_id,
        Global: editData.global,
      };
      axios.put(
        `http://localhost:9000/Application/${params.provider_Id}`,
        putData
      );
    }
  };
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={9} style={{ marginTop: "-790px", marginLeft: "-11px" }}>
          <div
            className="addnewapp"
            style={{ width: "950px", backgroundColor: "white" }}
          >
            <h2 style={{ fontWeight: "normal" }}>
              <img
                src={require("file:///Users/gowthamganesan/Downloads/Group%20203.png")}
                style={{ marginRight: "20px" }}
              />
              Edit Application
            </h2>

            <hr></hr>
          </div>
          <Form
            style={{ width: "50%", marginLeft: "180px", marginTop: "30px" }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Name
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "15px",
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
                <Form.Control
                  type="name"
                  onChange={nameHandler}
                  // onChange={(event) => {
                  //   dispatch({ type: "name", payload: event });
                  // }}
                />
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
                Client ID
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "15px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the Client ID
                </span>
              </Form.Label>

              {value ? (
                <Form.Control
                  type="name"
                  value={editData.client_id}
                  onChange={clientHandler}
                />
              ) : (
                <Form.Control type="name" onChange={clientHandler} />
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Client Secret
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "15px",
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
                  onChange={secretIdHandler}
                />
              ) : (
                <Form.Control type="name" onChange={secretIdHandler} />
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Redirect URLs
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "15px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the Redirect URL
                </span>
              </Form.Label>

              {value ? (
                <Form.Control
                  type="name"
                  value={editData.RedirectURLs}
                  onChange={redirectUrlHandler}
                />
              ) : (
                <Form.Control type="name" onChange={redirectUrlHandler} />
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                State
                <span
                  style={{
                    marginLeft: "18px",
                    fontSize: "15px",
                    color: "#C8C8C8",
                  }}
                >
                  Enter the State
                </span>
              </Form.Label>

              {value ? (
                <Form.Control
                  type="name"
                  value={editData.state}
                  onChange={stateHandler}
                />
              ) : (
                <Form.Control type="name" onChange={stateHandler} />
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
                  href="/Applications"
                  style={{ color: "grey", textDecoration: "none" }}
                >
                  cancel
                </a>
              </Button>
            </div>
            <div
              className="add-btn2"
              style={{ backgroundColor: "white", paddingLeft: "4%" }}
            >
              <Button
                variant="info"
                className="add-btn21"
                onClick={onSaveHandler}
              >
                <a
                  href="/Applications"
                  style={{ color: "white", textDecoration: "none" }}
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
