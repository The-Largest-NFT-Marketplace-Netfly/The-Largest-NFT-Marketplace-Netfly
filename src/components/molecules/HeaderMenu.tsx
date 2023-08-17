import { Link } from "react-router-dom";
import arrowDown from "../../assets/img/arrow-down.png";
import HeaderPopupWrapper from "./HeaderPopupWrapper";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import HeaderActivityPopupInner from "../atoms/HeaderActivityPopupInner";

function HeaderMenu() {
  const { isLogin } = useSelector((store: RootState) => store.auth);

  return (
    <ul className='flex items-center gap-[31px] h-[84px]'>
      <li>
        <Link to='/'>Discover</Link>
      </li>
      <li className='group flex items-center relative h-full'>
        <Link to='/'>Activity</Link>
        <img
          className='group-hover:rotate-[180deg] transition-all'
          src={arrowDown}
          alt='arrow-down'
        />
        <HeaderPopupWrapper>
          <HeaderActivityPopupInner />
        </HeaderPopupWrapper>
      </li>
      <li>
        <Link to='/'>Forum</Link>
      </li>
      <li>{isLogin ? <Link to='/'>News</Link> : <Link to='/'>Blogs</Link>}</li>
    </ul>
  );
}

export default HeaderMenu;
