import './App.css'
import Data from './Component/Data/Data'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
    <Header />
    <h1 className="title">( Daftar Mobil )</h1>
    <div className='container'>
    <Data gambar=""/>
    </div>
    <Footer nama="Hamdan"/>
    </>
  )
}

export default App
