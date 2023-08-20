import { useSelector } from "react-redux";
import { RootState } from "../../store";
import HeaderProfile from "./HeaderProfil";
import hambuger from "../../assets/img/hamburger-menu.png";
import hambugerClose from "../../assets/img/menu-close.svg";
import search from "../../assets/img/header-search.svg";
import { useDispatch } from "react-redux";
import { setActHamburger, setActiveSearchBox } from "../../store/slices/LayoutSlice";
import OutlineButton from "../atoms/OutlineButton";
import { setLogin } from "../../store/slices/AuthSlice";

function HeaderRight() {
  const { isLogin, isActHamburger } = useSelector((store: RootState) => {
    const { isLogin } = store.auth;
    const { isActHamburger } = store.layout;
    return {
      isLogin,
      isActHamburger,
    };
  });

  const dispatch = useDispatch();
  const handlerMenu = () => dispatch(setActHamburger());
  const handlerSearchBox = () => dispatch(setActiveSearchBox());
  const signIn = () => dispatch(setLogin());

  return (
    <div className='flex gap-[12px] xs:gap-[24px] items-center justify-end'>
      <div className='xl:hidden h-[84px] flex-center' onClick={handlerSearchBox}>
        <img src={search} alt='search' />
      </div>
      {isLogin && <HeaderProfile />}
      {!isLogin && <OutlineButton onClick={signIn}>Connect Wallet</OutlineButton>}
      <img
        onClick={handlerMenu}
        className='block lg:hidden'
        src={`${!isActHamburger ? hambuger : hambugerClose}`}
        alt='hamburger-menu'
      />
    </div>
  );
}

export default HeaderRight;
