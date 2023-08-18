import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className='bg-color-main min-h-[200vh] text-white'>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
