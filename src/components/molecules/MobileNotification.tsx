import { useSelector } from "react-redux";
import HeaderNotificationInner from "./HeaderNotificationInner";
import { RootState } from "../../store";

function MobileNotification() {
  const { isActiveNotification } = useSelector((store: RootState) => store.layout);
  const activeClass = isActiveNotification ? "top-[85px]" : "-top-[100%]";

  return (
    <div className={`${activeClass} block lg:hidden fixed py-[10px] transition-all duration-300  w-full bg-neutral-80`}>
      <div className='container'>
        <HeaderNotificationInner />
      </div>
    </div>
  );
}

export default MobileNotification;
