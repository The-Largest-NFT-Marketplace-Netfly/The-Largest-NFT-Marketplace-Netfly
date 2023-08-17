import { Link } from "react-router-dom";
import arrowDown from "../../assets/img/arrow-down.png";
import { useState } from "react";
function HamburgerInner() {
  const [activity, setActivity] = useState(false);

  const isActiveDropdown = (): void => {
    setActivity((state) => !state);
  };

  return (
    <ul className='pt-[24px] flex flex-col gap-[24px]'>
      <li>
        <Link className='menu-item active' to='/'>
          Discover
        </Link>
      </li>
      <li onClick={isActiveDropdown} className={`menu-item-dropdown  ${activity && "active"}`}>
        <div className='flex-between'>
          <p>Activity</p>
          <img
            className='group-hover:rotate-[180deg] transition-all'
            src={arrowDown}
            alt='arrow-down'
          />
        </div>
        <ul  className='dropdown-body overflow-hidden  pl-[10px] text-[14px]  border-l  border-neutral-60 flex flex-col gap-[20px]'>
          <li>Trading</li>
          <li>Social Activities</li>
        </ul>
      </li>
      <li>
        <Link className='menu-item' to='/forum'>
          Forum
        </Link>
      </li>
      <li>
        <Link className='menu-item' to='/news'>
          News
        </Link>
      </li>
    </ul>
  );
}

export default HamburgerInner;
