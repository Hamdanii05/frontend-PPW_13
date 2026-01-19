import { FaSearch } from 'react-icons/fa'
import './App.css'
import Cta from './Component/CTA/Cta'
import Data from './Component/Data/Data'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import data from "./data.json"

function App() {

  return (
    <>
    <Header />
    <Cta
      title="Find your dream car here"
      description="Affordable car rental."
      buttonText="Get Started"
      image="./image/CTA.png"
    />
    <h3 className="title"><marquee behavior="" direction=""> Great car rental | Great car rental | Great car rental | Great car rental 
    | Great car rental | Great car rental | Great car rental | Great car rental</marquee></h3>
    <div className="container">
    <Data data={data}/>
    {/* <Data gambar="./image/bmw5.jpg" nama="BMW" price= "$ 1.200 /Jam"/>
    <Data gambar="./image/lambo2.jpg" nama="Lamborghini" price="$ 1.250 /Jam"/>
    <Data gambar="./image/lambo3.jpg" nama="Porsche" price="$ 1.300 /Jam"/>
    <Data gambar="./image/rolls royce.jpg" nama="Rolls Royce" price="$ 2.000/Jam"/>
    <Data gambar="./image/audi.jpg" nama="Audi" price="$ 1.890 /Jam"/> */}
    </div>
    <Footer nama="Hamdan"/>
    </>
  )
}

export default App

