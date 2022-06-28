import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { AiOutlineLogout } from "react-icons/ai";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Spinner from "react-bootstrap/Spinner";

export default function Providers() {
  const navigate = useNavigate();
  const [providersData, setprovidersData] = useState({
    count: "",
    value: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ limit: 6, skip: 0 });
  const [value, setValue] = useState({ name: "" });
  const [buttonDis, setButtonDis] = useState(false);
  const [nextButtonDis, setNextButtonDis] = useState(true);
  const [number, setNumber] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const applicationValue = axios
  //       .get("http://localhost:9000/providers")
  //       .then((response) => {
  //         setprovidersData(response.data);
  //         setLoading(true);
  //       });
  //   }, 1000);
  // }, []);
  const searchHandler = (event) => {
    setValue((previous) => ({
      ...previous,
      name: event.target.value,
    }));
  };
  useEffect(() => {
    const val = async () => {
      const response = await axios.post(
        "https://auth-x.herokuapp.com/providers/getByname",
        value
      );
      setprovidersData((previous) => ({
        ...previous,
        value: response.data,
      }));
    };
    // console.log("ddd" + value.name);
    val();
  }, [value]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `https://auth-x.herokuapp.com/${pagination.limit}/${pagination.skip}`
        )

        .then((res) => {
          console.log(res.data);

          setprovidersData({ count: res.data.count, value: res.data.value });

          setLoading(true);
        })

        .catch((err) => {
          console.log(err);
        });
    }, 800);

    if (pagination.skip / 6 === 0) {
      setButtonDis(true);
    } else {
      setButtonDis(false);
    }

    if (pagination.skip / 6 + 1 === Math.ceil(providersData.count / 6)) {
      setNextButtonDis(true);
    } else {
      setNextButtonDis(false);
    }
  }, [pagination]);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(providersData.count / pagination.limit); i++) {
    pageNumber.push(i);
  }

  if (providersData.value.length > 6) {
    const sea = providersData.value.slice(0, 6);

    setprovidersData((previous) => ({
      ...previous,
      value: sea,
    }));
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);

    setPagination((previous) => ({
      ...previous,
      skip: pagination.limit * (pageNumber - 1),
    }));
  };
  const onPreviousPageHandler = () => {
    console.log(pagination.skip / 6);

    setPagination((previous) => ({
      ...previous,
      skip: pagination.limit * (pagination.skip / 6 - 1),
    }));
  };

  const onNextPageHandler = () => {
    console.log(pagination.skip / 6);

    setPagination((previous) => ({
      ...previous,
      skip: pagination.limit * (pagination.skip / 6 + 1),
    }));
  };
  return (
    // <div>
    <div style={{ backgroundColor: "white" }}>
      <Row>
        <Col sm={3} style={{ backgroundColor: "white" }}></Col>
        <Col
          sm={8}
          style={{
            marginTop: "-790px",
            marginLeft: "-11px",
            backgroundColor: "white",
          }}
        >
          <div
            className="authentication"
            style={{ backgroundColor: "white", display: "flex" }}
          >
            <div style={{ flexGrow: "1" }}>
              <h2 style={{ fontWeight: "normal" }}>
                <AiOutlineLogout
                  color="#B6B6B6"
                  fontSize="40px"
                  style={{
                    marginRight: "20px",
                    marginTop: "-7px",
                  }}
                />
                Providers{" "}
                <Button variant="info" className="appbtn">
                  <a
                    href="/editpro/newData"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    AddNew
                  </a>
                </Button>
              </h2>
            </div>
            <div className="justify-content-end">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={searchHandler}
                />
                <Button variant="dark" bg="light" id="button-addon2">
                  <FaSearch />
                </Button>
              </InputGroup>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "grey",
              height: "0.5%",
            }}
          ></hr>
          {!isLoading ? (
            <>
              <center>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </center>
            </>
          ) : (
            <Table
              responsive="lg"
              style={{
                marginTop: "25px",
                width: "970px",
                backgroundColor: "white",
              }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Provider ID</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {providersData.value.map((value) => {
                  return (
                    <tr key={value._id}>
                      <td
                        className="textbold"
                        onClick={() => {
                          navigate(`/AddNew8/${value._id}`, { state: value });
                        }}
                      >
                        {value.username}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/AddNew8/${value._id}`, { state: value });
                        }}
                      >
                        {value._id}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/AddNew8/${value._id}`, { state: value });
                        }}
                      >
                        {value.provider_id}
                      </td>

                      <td>
                        <Button variant="outline-secondary">
                          <Link
                            to={`/editpro/${value._id}`}
                            style={{ color: "grey", textDecoration: "none" }}
                          >
                            Edit
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
      <div className="text-center" style={{ marginTop: "-200px" }}>
        <button
          className="px-3 py-2 m-1 text-center"
          style={{ backgroundColor: "#66D6FF", border: "none" }}
          onClick={onPreviousPageHandler}
          disabled={buttonDis}
        >
          Previous
        </button>

        {pageNumber.map((Elem) => {
          return (
            <>
              <button
                className="px-3 py-2 m-1 text-center btn-outline-dark"
                style={{ border: "none" }}
                onClick={() => ChangePage(Elem)}
              >
                {Elem}
              </button>
            </>
          );
        })}

        <button
          className="px-3 py-2 m-1 text-center"
          style={{ backgroundColor: "#66D6FF", border: "none" }}
          onClick={onNextPageHandler}
          disabled={nextButtonDis}
        >
          Next
        </button>
      </div>
    </div>
  );
}
