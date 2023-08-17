import { NavLink } from "react-router-dom";
import arrowDown from "../../assets/img/arrow-down.png";
import HeaderPopupWrapper from "./HeaderPopupWrapper";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import HeaderActivityPopupInner from "../atoms/HeaderActivityPopupInner";

function HeaderMenu() {
  const { isLogin } = useSelector((store: RootState) => store.auth);

  return (
    <ul className='hidden lg:flex items-center gap-[31px] h-[84px]'>
      <li>
        <NavLink className='menu-item' to='/'>
          Discover
        </NavLink>
      </li>
      <li className='group flex items-center relative h-full'>
        <p className='menu-item'>Activity</p>
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
        <NavLink className='menu-item' to='/forum'>
          Forum
        </NavLink>
      </li>
      <li>
        {isLogin ? (
          <NavLink className='menu-item' to='/news'>
            News
          </NavLink>
        ) : (
          <NavLink className='menu-item' to='/blogs'>
            Blogs
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default HeaderMenu;
