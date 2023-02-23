import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav>
      <nav className="nav">
        <div className="container">
          <Logo />
          <ul className="nav__list">
            <li className="nav__item">Reviews</li>
            <li className="nav__item">Blog</li>
            <li className="nav__item">Lists</li>
            <li className="nav__item">Contact Me</li>
            <div className="nav__social">
              <a className="nav__social-link" target="_blank">
                <p>Twitter Icon</p>
              </a>
              <a className="nav__social-link" target="_blank">
                <p>Instagram Icon</p>
              </a>
            </div>
          </ul>
          <div className="nav__burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
