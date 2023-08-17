import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import HeaderSearch from "../atoms/HeaderSearch";
import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";

function Header() {
  return (
    <header className='bg-color-main text-white font-epilogue   border-b border-neutral-80'  >
      <nav className='container flex-between'>
        <div className='flex items-center gap-[40px]'>
          <Link to='/' className='flex items-center gap-[8px]'>
            <img src={Logo} alt='logo' />
            <h3 className='text-[#f7f7f7] text-[22px] font-monument'>Netfly</h3>
          </Link>
          <HeaderSearch />
        </div>
        <HeaderMenu />
        <HeaderRight/>
      </nav>
    </header>
  );
}

export default Header;
