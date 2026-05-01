import { useNavigate } from "react-router-dom";
import Button from "../components/Button";



export default function Accueil() {
  const navigate = useNavigate(); 

const goProfile = () => {
    navigate("./Profile")
}

  return (
    <main className="container-fluid min-vh-100 bg-white">
      <section className="row min-vh-100">
        <div className="col-lg-7 position-relative bg-light p-5 overflow-hidden">
          <h1 className="display-3 fw-bold position-absolute bottom-0 start-0 m-5 z-3">
            Explore <br />
            the <br />
            things <br />
            <span className="text-primary">you love.</span>
          </h1>

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop"
            alt="Skateur"
            className="position-absolute top-50 start-50 translate-middle rounded-4 shadow"
            style={{ width: "320px", height: "520px", objectFit: "cover" }}
          />

          <img
            src="https://images.unsplash.com/photo-1616627561839-074385245ff6?q=80&w=900&auto=format&fit=crop"
            alt="Décoration"
            className="position-absolute rounded-4 shadow"
            style={{
              width: "280px",
              height: "220px",
              objectFit: "cover",
              top: "25%",
              left: "18%",
            }}
          />
        </div>

        <aside className="col-lg-5 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "460px" }}>
            <h1 className="h4 fw-bold mb-4">Log in</h1>

            <input className="form-control form-control-lg mb-3" placeholder="Email" />
            <input className="form-control form-control-lg mb-3" placeholder="Password" type="password" />

            <Button onClick = {goProfile} className="btn btn-outline-primary btn-lg w-100 p-3 " style={{ height: "50px", fontSize: "20px", color:"white"}} label ="Connecter"/>
            <button className="btn btn-outline-primary btn-lg w-100">
              Create new account
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}