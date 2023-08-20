import { useSelector } from "react-redux";
import HeaderUserInner from "./HeaderUserInner";
import { RootState } from "../../store";

function MobileUser() {
  const { isActiveUserProfile } = useSelector((store: RootState) => store.layout);
  const activeClass = isActiveUserProfile ? "top-[85px]" : "-top-[100%]";

  return (
    <div
      className={`block lg:hidden fixed w-full ${activeClass} duration-500 z-0 min-w-[280px] min-h-[40px]  md:px-[24px] py-[24px]  sm:left-[auto]  bg-neutral-80 transition-all `}
    >
      <div className={`container w-full`}>
        <HeaderUserInner />
      </div>
    </div>
  );
}

export default MobileUser;
