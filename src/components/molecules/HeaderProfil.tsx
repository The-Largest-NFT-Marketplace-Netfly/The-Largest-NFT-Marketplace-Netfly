import bell from "../../assets/img/bell.svg";
import wallet from "../../assets/img/wallet.png";
import avatar from "../../assets/img/profile-avatar.svg";
import HeaderPopupWrapper from "./HeaderPopupWrapper";
import { notifications } from "../../const";
import HeaderNotificationPopupItem from "../atoms/HeaderNotificationPopupItem";

function HeaderProfile() {
  return (
    <div className='flex gap-[24px] items-center h-[84px]'>
      <div className='group relative h-full flex items-center'>
        <div className='relative'>
          <span className='inline-block absolute right-[1px] top-[2px] w-[8px] h-[8px] rounded-full bg-light-pink'></span>
          <img src={bell} alt='bell' />
        </div>
        <HeaderPopupWrapper>
          {notifications.map((item) => (
            <HeaderNotificationPopupItem {...item} />
          ))}
        </HeaderPopupWrapper>
      </div>
      <div className='h-full flex items-center'>
        <img src={wallet} alt='wallet' />
      </div>
      <div className='h-full flex items-center'>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
}

export default HeaderProfile;
