import OutlineButton from "../atoms/OutlineButton";
import coin from "../../assets/img/Coin.png";
import HeaderPopupWrapperRight from "./HeaderPopupWrapperRight";

function HeaderWalletPopup() {
  return (
    <HeaderPopupWrapperRight>
      <div className='py-[12px]'>
        <div className='flex gap-[16px] items-center'>
          <img src={coin} alt='coin' />
          <h3 className='font-bold'>Coinbase</h3>
        </div>
        <div className='py-[16px]'>
          <span className='text-[14px] mb-[6px] text-neutral-20'>Your Balance</span>
          <h3 className='font-monument text-[20px]'>7.00434 ETH</h3>
        </div>
        <OutlineButton>Open my wallet</OutlineButton>
      </div>
    </HeaderPopupWrapperRight>
  );
}

export default HeaderWalletPopup;
