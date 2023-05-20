import './Header.css'
import Icon from '../assets/icon.jpg'
function Header() {
  return (
    <div>
      <nav className="nav">
        <div className="account">
          <img src= {Icon} alt="image" />
          <span><h1>UNIVERSITIES</h1></span>
        </div>
        <div className="content">
          <ul className='unl'>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Blogs</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header