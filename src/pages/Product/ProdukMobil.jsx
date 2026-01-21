import Data from "../../Component/Data/Data"
import Header from "../../Component/Header/Header"
import data from "../../data.json"
import Footer from '../../Component/Footer/Footer'
import "./Produk.css"

const ProdukMobil = () => {
  return (
    <div>
    <div className="head"><Header /></div>
    <div className="konten">
      <Data data={data}/></div>
      <div className="foot"><Footer /></div>
  
    </div>
  )
}

export default ProdukMobil
