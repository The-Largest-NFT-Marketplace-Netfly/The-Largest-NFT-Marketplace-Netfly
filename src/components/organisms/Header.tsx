import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import HeaderSearch from "../atoms/HeaderSearch";
import HeaderMenu from "../molecules/HeaderMenu";
import HeaderRight from "../molecules/HeaderRight";
import HamburgerMenu from "../molecules/HamburgerMenu";
import MobileSearchBox from "../molecules/MobileSearchBox";
import MobileNotification from "../molecules/MobileNotification";
import MobileUser from "../molecules/MobileUser";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Header() {
  const { isLogin } = useSelector((store: RootState) => store.auth);
  return (
    <header className='text-white font-epilogue min-h-[84px]'>
      <nav className='w-full bg-color-main fixed min-h-[84px] top-0 z-[99]  border-b border-neutral-80 '>
        <div className='container flex-between'>
          <div className='flex items-center gap-[40px]'>
            <Link to='/' className='flex items-center gap-[8px]'>
              <img className='!w-[32px] !h-[32px]' src={Logo} alt='logo' />
              <h3 className='hidden sm:block text-[#f7f7f7] text-[22px] font-monument'>Netfly</h3>
            </Link>
            <div className='hidden xl:block'>
              <HeaderSearch />
            </div>
          </div>
          <HeaderMenu />
          <HeaderRight />
        </div>
      </nav>
      <div id='additions'>
        <MobileSearchBox />
        <MobileNotification />
        {isLogin && (
          <>
            <MobileUser />
            <HamburgerMenu />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
