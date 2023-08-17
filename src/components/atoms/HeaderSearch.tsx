import search from "../../assets/img/header-search.svg";

function HeaderSearch() {
  return (
    <div className='flex items-center border-[2px] border-neutral-80 py-[8px] px-[16px] gap-[10px]'>
      <img src={search} alt='search-icon' />
      <input
        className='bg-transparent w-[400px]'
        placeholder='Search by tags, themes, artists, etc'
        type='text'
      />
    </div>
  );
}

export default HeaderSearch;
