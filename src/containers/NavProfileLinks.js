import { openModal } from "@/store/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { MODAL_BODY_TYPES } from '@/utils/globalConstantUtil'
import Link from "next/link"
import { fetchUserDetail, setLoggedIn } from "@/store/userSlice"
import { useEffect } from "react"
import { Image } from 'primereact/image';

function NavProfileLinks() {
    const dispatch = useDispatch()
    const { isLoggedIn, credits, token } = useSelector(state => state.user)

    useEffect(() => {
        if (token) {
            dispatch(fetchUserDetail())
        }
    }, [dispatch, token]) 

    const openLoginModal = () => {
        console.log("jere")
        dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject: { isSignIn: true } }))
    }

    const openPricingModal = () => {
        console.log("jere")
        dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.PRICING_MODAL, extraObject: { isLoggedIn, darkbg: true } }))
    }

    const logoutUser = async () => {
        localStorage.clear();
        dispatch(setLoggedIn(false))
        window.location = '/'
    }

    const handleDropDownClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <>
            {isLoggedIn &&
                <>
                    <button className='btn btn-sm text-xs mr-4 normal-case hover:bg-primary btn-outline' onClick={openPricingModal}>Bilgi Al</button>
                    <div className="dropdown  md:mt-0 mt-4 dropdown-end">
                        <label tabIndex={0} className="btn bg-white md:flex hidden btn-circle  avatar">
                            <div className="w-6 rounded-full">
                                <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="300" height="200" alt="profile" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact z-20 dropdown-content bg-slate-50 mt-3 p-2 shadow   rounded-box w-52">
                            <li className="justify-between" onClick={handleDropDownClick}>
                                <Link href={'/account/my-profile'}>
                                    Profilim
                                </Link>
                            </li>
                            <div className="divider mt-0 mb-0"></div>
                            <li><a onClick={logoutUser}>Çıkış Yap</a></li>
                        </ul>
                    </div>
                </>
            }
            {!isLoggedIn &&
                <>
                    <button className='btn btn-sm text-xs mr-4 normal-case md:btn-ghost' onClick={openLoginModal}>Giriş Yap</button>
                    <Link href="/start-designing">
                        <button className='btn md:mt-0 mt-4 btn-block btn-sm text-xs btn-outline normal-case hover:text-white hover:btn-primary'>Giriş Yapmadan Önce!!</button>
                    </Link>
                </>
            }
        </>
    )
}

export default NavProfileLinks
