const Pelanggan = ({nama, alamat, membership}) => {
    return(
        <div>
            <h1>Our Customer</h1>
            <ul>
                <li>Nama: {nama}</li>
                <li>Alamat: {alamat} </li>
                <li>Membership: {membership} </li>
            </ul>
            <button>Detail</button>
        </div>
    )
}
export default Pelanggan;
