import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from 'next/link'
import Navlinks from "./Navlinks";
import Head from 'next/head'
import ModalLayout from "./ModalLayout";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setToken } from "@/store/userSlice";
import { useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import NavProfileLinks from "./NavProfileLinks";

export default function Layout({ children }) {

  const logoutUser = () => {
    
  }

  const { isLoggedIn, credits, scrollId } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const TOKEN = localStorage.getItem("token")
    if (TOKEN) {
      dispatch(setLoggedIn(true))
      dispatch(setToken(TOKEN))
    }
  }, [dispatch]) // 'dispatch' bağımlılığını buraya ekleyin

  return (
    <>
      <Head>
        {/* Meta tags ve diğer başlık bilgileri */}
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="overflow-y-auto  flex flex-col ">
            <Navbar />
            <div className="overflow-y-auto">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-100">
            <li className="mr-2"><Link href="/">Anasayfa</Link></li>
            <Navlinks />
            <div className="mt-12"></div>
            <NavProfileLinks />
          </ul>
        </div>
      </div>

      <LeftSidebar />
      <ModalLayout />
    </>
  )
}
