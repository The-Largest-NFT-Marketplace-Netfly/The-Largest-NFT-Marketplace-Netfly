import crypto from "../../assets/img/Crypto.svg";
import users from "../../assets/img/users.svg";

function HeaderActivityPopupInner() {
  return (
    <ul>
      <li className='flex gap-[8px] border-b border-neutral-60  items-center py-[12px]'>
        <img src={crypto} alt='crypto' />
        <span>Trading</span>
      </li>
      <li className='flex gap-[8px] items-center my-[4px] py-[12px]'>
        <img src={users} alt='users' />
        <span>Social Activities</span>
      </li>
    </ul>
  );
}

export default HeaderActivityPopupInner;
