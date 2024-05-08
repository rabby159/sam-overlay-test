import logo from '../assets/logo.webm'

const Footer = () => {
  return (
    <div className='bg-neutral'>
      <footer className=" p-5 lg:p-10 text-neutral-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        <nav>
          <header className="footer-title tracking-widest">Services</header>
          <ul>
            <li className="link link-hover">Branding</li>
            <li className="link link-hover">Design</li>
            <li className="link link-hover">Marketing</li>
            <li className="link link-hover">Advertisement</li>
          </ul>
        </nav>
        <nav className='flex justify-center'>
              <div>
                <div className='w-40 lg:w-[15rem] lg:ml-24'>
                  <video autoPlay muted loop >
                    <source src={logo} type="video/webm" />
                  </video>
                </div>
                  <p className='tracking-widest'>&copy; Reed Overlay, 2021 - 2024 All rights reserved</p>
              </div>
              
        </nav>
        <nav className='lg:text-right'>
          <header className="footer-title tracking-widest">Legal</header>
          <ul>
            <li className="link link-hover">Terms of use</li>
            <li className="link link-hover">Privacy policy</li>
            <li className="link link-hover">Cookie policy</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
