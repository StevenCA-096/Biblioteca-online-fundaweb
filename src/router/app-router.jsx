import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

} from "react-router-dom";
//General pages
import Layout from "../layout/layout";
import HomePage from "../components/homepage/HomePage";
import ReservedBooks from "../components/reserved-books/ReservedBooks";
import { LoginRegister } from "../pages/auth/LoginRegister";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/auth" element={<LoginRegister/>} />

    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/reservedbooks" element={<ReservedBooks/>} />

    </Route>
    </>
  )
);