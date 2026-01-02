import './App.css'
import Data from './Component/Data/Data'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
    <Header />
    <h1>---=( Daftar Mobil )=---</h1>
    <Data nama=  "Lamborghini" kapasitas=  " 2 orang"/>
    <Data nama=  "Porsche" kapasitas=  "2 orang"/>
    <Data nama=  "BMW" kapasitas=  "2 orang"/>
    <Footer nama="Hamdan"/>
    </>
  )
}

export default App
