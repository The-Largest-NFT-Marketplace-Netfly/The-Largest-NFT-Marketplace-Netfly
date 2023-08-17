import { useSelector } from "react-redux";
import HeaderSearch from "../atoms/HeaderSearch";
import { RootState } from "../../store";

function MobileSearchBox() {
  const { isActiveSearchbox } = useSelector((store: RootState) => store.layout);
  const activeClass = isActiveSearchbox ? "top-[85px]" : "-top-[100%]";

  return (
    <div
      className={`block lg:hidden fixed w-full ${activeClass} duration-500 z-0 min-w-[280px] min-h-[40px]  md:px-[24px] py-[24px]  sm:left-[auto]  bg-neutral-80 transition-all `}
    >
      <div className={`container w-full`}>
        <h3 className='font-monument text-[20px] mb-[24px]'>Search Here</h3>
        <HeaderSearch />
      </div>
    </div>
  );
}

export default MobileSearchBox;
// ${isActHamburger ? "right-0 left-0" : "-right-[100%]"}`}
