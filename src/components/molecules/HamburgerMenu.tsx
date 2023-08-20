import { useSelector } from "react-redux";
import coin from "../../assets/img/coin.png";
import HamburgerInner from "./HamburgerInner";
import { RootState } from "../../store";

function HamburgerMenu() {
  const { isActHamburger } = useSelector((store: RootState) => store.layout);
  const activeClass = isActHamburger ? "right-0 " : " -right-[100%]";

  return (
    <div
      className={`block w-full sm:w-max  min-h-[350px] lg:hidden fixed ${activeClass} transition-all duration-300 top-[85px] bg-neutral-80 px-[24px]  py-[24px]`}
    >
      <div
        id='hamburger-wallet'
        className='flex items-start gap-[16px] p-[24px] border border-neutral-60'
      >
        <img src={coin} alt='coin' />
        <div>
          <span className='text-[14px] text-neutral-20 pb-[6px]'>Your Balance</span>
          <h3 className='font-monument text-[20px]'>7.00434 ETH</h3>
        </div>
      </div>
      <HamburgerInner />
    </div>
  );
}

export default HamburgerMenu;
