import './Navbar.css'

let Navbar = () => {
    return (
        <div className='navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark'>
            <div className='navbar-brand'>Attendance UI</div>


            <ul className='unordered-list navbar-nav ml-auto'>
                <li className="nav-li nav-item active">
                    <a className="nav-link" href="#">Home </a>
                </li>
                <li className="nav-li nav-item active">
                    <a className="nav-link" href="#">My-Attendance</a>
                </li>
                <li className="nav-li nav-item active">
                    <a className="nav-link" href="#">My-Marks</a>
                </li>
            </ul>
        </div>

    )
}
export default Navbar