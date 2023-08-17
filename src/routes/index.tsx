import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../layout";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainLayout />}></Route>)
);
