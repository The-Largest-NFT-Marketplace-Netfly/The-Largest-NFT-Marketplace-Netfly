import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layout";
import Home from "../pages/main/Home";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/account/Register";
import EditProfile from "../pages/account/EditProfile";
import MyProfile from "../pages/account/MyProfile";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='account' element={<AuthLayout />}>
        <Route index element={<MyProfile />} />
        <Route path='register' element={<Register />} />
        <Route path='edit' element={<EditProfile />} />
      </Route>
    </Route>
  ),{basename: "/The-Largest-NFT-Marketplace-Netfly/"}
);
