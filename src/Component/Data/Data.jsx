import "./Data.css"

const Data = ({nama, kapasitas, gambar}) => {
    return(
        
        <div className="card">
            <div className="card-head">
                <img src={gambar} alt="" />
            </div>
            <div className="card-body">
                <p>{nama}</p>
                <p>{kapasitas}</p>
                <button>Detail</button>
            </div>
        </div>
    )
}
export default Data;