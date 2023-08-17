import { notifications } from "../../const";
import HeaderNotificationPopupItem from "../atoms/HeaderNotificationPopupItem";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

function HeaderNotificationInner() {
  return (
    <>
      <h3 className='text-[18px] py-[16px] border-b border-neutral-60'>Notifications</h3>
      {notifications.map((item) => (
        <HeaderNotificationPopupItem key={nanoid()} {...item} />
      ))}
      <Link to='/notifications' className="text-secondary block text-center text-[13px] pb-[8px] pt-[20px]" >View all notification</Link>
    </>
  );
}

export default HeaderNotificationInner;
