interface IOutlineButton {
  children: string;
  onClick?: () => void;
}

function OutlineButton({ children, onClick }: IOutlineButton) {
  return (
    <button
      onClick={onClick}
      id='outlineBtn'
      className='px-[32px] h-[44px] py-[8px] border border-secondary font-semibold'
    >
      {children}
    </button>
  );
}

export default OutlineButton;
