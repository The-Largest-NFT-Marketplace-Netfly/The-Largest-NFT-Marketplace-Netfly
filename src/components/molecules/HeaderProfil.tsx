import bell from "../../assets/img/bell.svg";
import wallet from "../../assets/img/wallet.png";
import avatar from "../../assets/img/profile-avatar.svg";
import { useDispatch } from "react-redux";
import { setActNotification, setActUserProfile } from "../../store/slices/LayoutSlice";
import HeaderWalletPopup from "./HeaderWalletPopup";
import HeaderNotificationPopup from "./HeaderNotificationPopup";
import HeaderUserPopup from "./HeaderUserPopup";

function HeaderProfile() {
  const dispatch = useDispatch();
  const handlerNotification = () => {
    if (window.innerWidth < 992) dispatch(setActNotification());
  };
  const handlerUserProfile = () => {
    if (window.innerWidth < 992) dispatch(setActUserProfile());
  };
  return (
    <div className='flex gap-[12px] xs:gap-[24px] items-center h-[84px]'>
      <div onClick={handlerNotification} className='group relative h-full flex items-center'>
        <div className='relative'>
          <span className='inline-block absolute right-[1px] top-[2px] w-[8px] h-[8px] rounded-full bg-light-pink'></span>
          <img src={bell} alt='bell' />
        </div>
        <HeaderNotificationPopup />
      </div>
      <div className='h-full relative group hidden lg:flex items-center'>
        <img src={wallet} alt='wallet' />
        <HeaderWalletPopup />
      </div>
      <div
        onClick={handlerUserProfile}
        className='w-[26px] h-[26px] group lg:w-[32px] md:h-full flex items-center'
      >
        <img src={avatar} alt='avatar' />
        <HeaderUserPopup />
      </div>
    </div>
  );
}

export default HeaderProfile;
