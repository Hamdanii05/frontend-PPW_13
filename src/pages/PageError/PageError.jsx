import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../Component/Header/Header";
import "./PageError.css";

const PageError = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="error-container">
        <h1>404</h1>
        <h3>Halaman Tidak Ditemukan</h3>
        <p>Oops... Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>

        <div className="error-action">
          <NavLink to="/" className="btn-home">Home</NavLink>
          <button className="btn-back" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageError;
