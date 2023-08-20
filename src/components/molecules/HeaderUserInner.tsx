import avatar from "../../assets/img/profile-avatar.svg";
import OutlineButton from "../atoms/OutlineButton";
import { Link } from "react-router-dom";
import { profileItems } from "../../const";
import logoutImg from "../../assets/img/logout.png";
import { useDispatch } from "react-redux";
import { resetHeader } from "../../store/slices/LayoutSlice";
import { setLogin } from "../../store/slices/AuthSlice";

function HeaderUserInner() {
  const dispatch = useDispatch();
  const logout = () => {
      dispatch(resetHeader());
      dispatch(setLogin());
  };
  return (
    <>
      <div className='flex items-center gap-[16px] mb-[24px] pt-[10px] '>
        <img src={avatar} alt='avatar' />
        <div className='flex flex-col gap-[6px] mt-[6px]'>
          <h3 className='text-[18px]'>Bruno Bangnyfe</h3>
          <span className='text-light-yellow text-[14px]'>Professional Artist</span>
        </div>
      </div>
      <OutlineButton>Create Item</OutlineButton>
      <ul className='pt-[24px] pb-[10px] flex flex-col w-full gap-[16px]'>
        {profileItems.map((item) => (
          <li>
            <Link
              className='pb-[12px] cursor-pointer text-[14px] gap-[8px] border-b border-neutral-60 flex items-center'
              to={item.link}
            >
              <img src={item.img} alt='icon' />
              <h3 className='pt-[4px]'>{item.title}</h3>
            </Link>
          </li>
        ))}
        <li onClick={logout} className=' cursor-pointer gap-[8px] text-[14px]  flex items-center'>
          <img src={logoutImg} alt='icon' />
          <h3>Logout</h3>
        </li>
      </ul>
    </>
  );
}

export default HeaderUserInner;
