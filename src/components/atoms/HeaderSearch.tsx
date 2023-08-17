import search from "../../assets/img/header-search.svg";

function HeaderSearch() {
  return (
    <div className='flex items-center border-[2px] bg-color-main border-neutral-80 py-[8px] px-[16px] gap-[10px]'>
      <img src={search} alt='search-icon' />
      <input
        className='bg-transparent w-full  xl:w-[300px]  2xl:w-[350px]'
        placeholder='Search by tags, themes, artists, etc'
        type='text'
      />
    </div>
  );
}

export default HeaderSearch;
