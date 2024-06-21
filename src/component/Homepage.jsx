import React from "react";
import { Link } from "react-router-dom";
import { createThirdwebClient } from "thirdweb";
import { useNavigate } from "react-router-dom";
import createProjectImg from "../img/lightbulb.jpeg";
import contributeImg from "../img/Plant.jpeg";
import browseProjectsImg from "../img/browse.jpeg";

import {
  useAddress,
  useMetamask,
  useLogin,
  useLogout,
  useUser,
  ConnectWallet,
} from "@thirdweb-dev/react";

export const client = createThirdwebClient({
  clientId: "c59926a42e58218b67e14e915ed3a2ae",
});

function HomePage({ contract }) {
  const address = useAddress();
 // const connect = useMetamask();
 // const { login } = useLogin();
  const { logout } = useLogout();
 // const { user, isLoggedIn } = useUser();
 // const navigate = useNavigate();

  const handleConnectWallet = () => {
    //navigate("/home");
  };

  

  return (
    <div style={{ backgroundColor: "#1a237e", color: "#b3b3b3" }}> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Crowdfunding Platform
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contribute">
                  Contribute
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  View Projects
                </Link>
              </li>
            </ul>
            <div className="text-center">
              {isLoggedIn ? (
                <button
                  onClick={() => logout()}
                  className="btn btn-light rounded"
                  style={{ backgroundColor: "#1a237e", color: "#b3b3b3" }}
                >
                  Logout
                </button>
              ) : address ? (
                <button
                  onClick={handleConnectWallet}
                  className="btn btn-light rounded"
                  style={{ backgroundColor: "#1a237e", color: "#b3b3b3" }}
                >
                  Continue
                </button>
              ) : (
                <ConnectWallet />
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5 d-flex flex-column align-items-center">
      <h1 className="mb-4">Welcome to the Crowdfunding Platform</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <img src={createProjectImg} alt="Create Project" className="mb-3" style={{ width: "100%" }} />
                <h5 className="card-title">Create a Project</h5>
                <p className="card-text">
                  Start a new project and raise funds from the community.
                </p>
                <Link to="/create" className="btn btn-light rounded">
                  Create Project
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <img src={contributeImg} alt="Contribute" className="mb-3" style={{ width: "100%" }} />
                <h5 className="card-title">Contribute to a Project</h5>
                <p className="card-text">
                  Support existing projects and help them reach their goals.
                </p>
                <Link to="/contribute" className="btn btn-light rounded">
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <img src={browseProjectsImg} alt="Browse Projects" className="mb-3" style={{ width: "100%" }} />
                <h5 className="card-title">Browse Projects</h5>
                <p className="card-text">
                  Discover exciting projects and find opportunities to invest.
                </p>
                <Link to="/projects" className="btn btn-light rounded">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;