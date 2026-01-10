import "./Data.css"

const Data = ({gambar,nama, price}) => {
    return(
        
        <div className="card">
            <div className="card-head">
                <img src={gambar} alt="" />
            </div>
            <div className="card-body">
                <p>{nama}</p>
                <p className="harga">{price}</p>
                <button className="btn">Detail</button>
            </div>
        </div>
    )
}
export default Data;