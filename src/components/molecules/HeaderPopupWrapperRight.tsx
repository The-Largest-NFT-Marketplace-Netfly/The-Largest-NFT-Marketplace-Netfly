import popupTriangle from "../../assets/img/popup-triangle.svg";

interface IHeaderPopupWrapper {
  children: React.ReactNode;
}

function HeaderPopupWrapperRight({ children }: IHeaderPopupWrapper) {
  return (

    <div className={`absolute top-[93px]  min-h-[90px]  z-[99] -translate-x-[80%] `}>
      <div className='absolute hidden group-hover:block  translate-x-[34%]  -top-[8px] '>
        <img src={popupTriangle} alt='triangle' />
      </div>
      <div className='bg-neutral-80 transition-all hidden lg:flex lg:flex-col max-h-0  group-hover:max-h-max  overflow-hidden w-[256px]  group-hover:py-[12px] px-[24px] '>
        {children}
      </div>
    </div>
  );
}

export default HeaderPopupWrapperRight;
