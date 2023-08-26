import './Navbar.css'

let Navbar = ({ isLoggedIn, handleLogout }) => {
    return (
        <div className='navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark'>
            <div className='brand navbar-brand bg-dark '>Attendance UI</div>

            {isLoggedIn && (
                <ul className='unordered-list navbar-nav ml-auto'>
                    <li className="nav-li nav-item active">
                        <a className="nav-link btn btn-md btn-dark bg-dark" href="#">Home </a>
                    </li>
                    <li className="nav-li nav-item active">
                        <a className="nav-link btn btn-md btn-dark bg-dark" href="#My-Attendance">My-Attendance</a>
                    </li>
                    <li className="nav-li nav-item active">
                        <a className="nav-link btn btn-md btn-dark bg-dark" href="#">My-Marks</a>
                    </li>
                    <li className="nav-li nav-item active">
                        <button className='nav-link btn btn-md btn-dark bg-dark' onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            )}

        </div>

    )
}
export default Navbar