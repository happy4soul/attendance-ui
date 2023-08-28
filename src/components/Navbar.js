import './Navbar.css'


let Navbar = ({ isLoggedIn, handleLogout }) => {
    return (
        <div className='navbar navbar-expand-lg navbar-expand-md'>
            <div className='brand navbar-brand'><h2>Attendance UI</h2></div>

            {isLoggedIn && (

                <ul className='unordered-list navbar-nav ml-auto'>
                    <li className="nav-li nav-item active">
                        <a className="nav-link btn btn-md" href="#" style={{ color: 'white' }}>Home </a>
                    </li>
                    <li className="nav-li nav-item active">
                        <a className="nav-link btn btn-md" href="#My-Attendance" style={{ color: 'white' }}>My-Attendance</a>
                    </li>

                    <li className="nav-li nav-item active">
                        <button className='button-nav nav-link btn btn-md' onClick={handleLogout} style={{ color: 'white' }}>Logout</button>
                    </li>
                </ul>
            )}

        </div>

    )
}
export default Navbar