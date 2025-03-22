import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <div id="b-page-container">
        <Navbar />
        <div id="b-content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
