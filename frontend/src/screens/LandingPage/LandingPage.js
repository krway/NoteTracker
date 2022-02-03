import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
  <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to Note Tracker</h1>
                <p>We save it for you.</p>
              </div>
              <div className="btnCnt">
                <a href="/login">
                  <Button className="btn" size="lg" variant="primary">
                    LOGIN
                  </Button>
                </a>
                <a href="/register">
                  <Button className="btn" size="lg" variant="outline-primary">
                    REGISTER
                  </Button>
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
  );
}

export default LandingPage;
