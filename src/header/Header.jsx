import { useNavigate, useParams } from "react-router-dom";
import { getUserByIdApi } from "../api/server";

const Header = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const currentUser = getUserByIdApi(id);

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a className="navbar-brand" href="#">
            <img
              src="/src/assets/logo.png"
              width="49"
              height="49"
              className="d-inline-block align-top"
              alt=""
            />
            FaceBook
          </a>
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            ></svg>
          </a>

          {currentUser && (
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 link-secondary">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  Amis
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  Posts
                </a>
              </li>
            </ul>
          )}

          {currentUser && (
            <div className="dropdown text-end">
              <a
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={currentUser.profilePhoto}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item">Profile</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => navigate("/")}>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
