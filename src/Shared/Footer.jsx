import logo from '../assets/logo.webm'

const Footer = () => {
  return (
    <div className='bg-neutral'>
      <footer className="p-10 text-neutral-content max-w-screen-xl mx-auto footer">
        <nav>
          <header className="footer-title tracking-widest">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <div className='w-[15rem]'>
              <video autoPlay muted loop >
                <source src={logo} type="video/webm" />
              </video>
              <p className='tracking-widest'>&copy; Reed Overlay, 2021 - 2024 All rights reserved</p>
          </div>
        </nav>
        <nav>
          <header className="footer-title tracking-widest">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
