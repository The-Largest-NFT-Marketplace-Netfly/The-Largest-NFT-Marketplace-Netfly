import { INotification } from "../../const";
import tag from "../../assets/img/notification-tags.png";

//import check from "../../assets/img/notification-check.svg";
import bag from "../../assets/img/shopping-bag.svg";
import heart from "../../assets/img/heart.png";

function HeaderNotificationPopupItem({ username, product, time, action }: INotification) {
  const icon =
    action.toLowerCase() == "make an offer to"
      ? tag
      : action.toLowerCase() == "purchased"
        ? bag
        : action.toLowerCase() == "liked"
          ? heart
          : bag;

  return (
    <div className='text-[14px] flex items-start gap-[8px] leading-[1.3] py-[16px]'>
      <img src={icon} alt="icon" />
      <div>
        <p className=' leading-[1.3]'>
          {username}
          <span className='text-neutral-40 '> {action} </span>
          {product}
        </p>
        <span className='text-light-yellow text-[11px]'>{time}</span>
      </div>
    </div>
  );
}

export default HeaderNotificationPopupItem;
