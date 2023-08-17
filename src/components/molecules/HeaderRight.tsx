import { useSelector } from "react-redux";
import { RootState } from "../../store";
import HeaderProfile from "./HeaderProfil";

function HeaderRight() {
  const { isLogin } = useSelector((store: RootState) => store.auth);
  return (
    <>
      {!isLogin && (
        <button className='px-[32px] h-[44px] py-[8px] border border-secondary font-semibold'>
          Connect Wallet
        </button>
      )}
      <HeaderProfile />
    </>
  );
}

export default HeaderRight;
