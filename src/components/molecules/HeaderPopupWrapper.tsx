import popupTriangle from "../../assets/img/popup-triangle.svg";

interface IHeaderPopupWrapper {
  children: React.ReactNode;
}

function HeaderPopupWrapper({ children }: IHeaderPopupWrapper) {
  return (
    <div className={`absolute top-[93px] left-[50%] z-[99] -translate-x-[50%] `}>
      <div className='absolute hidden group-hover:block left-[50%] -translate-x-[50%]  -top-[8px] '>
        <img
          src={popupTriangle}
          alt='triangle'
        />
      </div>
      <div className='bg-neutral-80 transition-all hidden lg:block  group-hover:max-h-max max-h-[0px] overflow-hidden w-[256px]  group-hover:py-[12px] px-[24px] '>
        {children}
      </div>
    </div>
  );
}

export default HeaderPopupWrapper;
