import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {  openModal } from '@/store/modalSlice'
import { MODAL_BODY_TYPES } from '@/utils/globalConstantUtil'
import { setLoggedIn, setToken } from '@/store/userSlice'
import analyticsUtil from '@/utils/analyticsUtil'
import { SIGN_UP_IMAGES } from '@/utils/globalConstantUtil'
import Image from 'next/image';

function SignInModalBody({closeModal, extraObject}){

    const INITIAL_REGISTER_OBJ = {
        otp : "",
        emailId : ""
    }

    const {isSignIn} = extraObject
    const dispatch = useDispatch()
    
    useEffect(() => {
        setLoading(false)
        setIsOtpSent(false)
        setErrorMessage("")
        setLoginObj({otp : "", emailId : ""})
    }, [isSignIn])

    

    const [loading, setLoading] = useState(false)
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_REGISTER_OBJ)

    const openSignUp = () => {
        dispatch(openModal({title : "", size : "lg", bodyType : MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject : {isSignIn : false}}))
    }

    const openSignIn = () => {
        dispatch(openModal({title : "", size : "lg", bodyType : MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject : {isSignIn : true}}))
    }


    const submitVerificationCode = async(e) =>{
        setErrorMessage("")
        if(loginObj.emailId.trim() === "")return setErrorMessage("Email Id is Required!")
        if(loginObj.otp.trim() === "")return setErrorMessage("Verification Code is Required!")
        else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(loginObj.emailId.trim())){
            return setErrorMessage("Email Id is Wrong!")
        }else{
            setLoading(true)
            
            if(1){
                
                let user = {name : "User", token : "Signintoken"}
                localStorage.setItem("name", user.name)
                dispatch(setLoggedIn(true))
                dispatch(setToken(user.token))
               

                
                analyticsUtil.identifyUser(user)
                closeModal()
            }else{
                setErrorMessage(response.data.message)
            }
            setLoading(false)
        }
    }

const submitForm = async(e) =>{
    e.preventDefault()
    if(loading)return 1
    if(isOtpSent){
        submitVerificationCode()
    }else{
        sendMailOtp()
    }
}

const sendMailOtp = async(e) =>{
    setErrorMessage("")
    if(loginObj.emailId.trim() === "")return setErrorMessage("Email Id is Required!")
    else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(loginObj.emailId.trim())){
        return setErrorMessage("Email Id is Wrong!")
    }else{
        setLoading(true)
       
        setLoading(false)
        setIsOtpSent(true)

    }
}



    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLoginObj({...loginObj, [updateType] : value})
    }

    return(
        <div className=" flex items-center rounded-xl">
                <div className='grid grid-cols-1 md:grid-cols-2 w-full '>
                    <div className='text-center rounded-xl bg-slate-100 '>
                            <div className='mt-10 md:mb-0 mb-10 inline-block'>
                            <span className='font-bold text-2xl'>
                        <Image className="mask inline-block mr-2 mask-circle w-10" src="/android-chrome-192x192.png" width="192" height="192" alt="Bursa, Yeşilin ve Tarihin İzinde Bir Şehir" /> Bursa, Yeşilin ve Tarihin İzinde Bir Şehir
                    </span>
                    {/* <div className="carousel   mt-6 w-full">
                        {
                            SIGN_UP_IMAGES.map((img, k) => {
                                return(
                                    <div id={"slide"+(k+1)} key={k} className="carousel-item relative w-full">
                                    <div className="w-full h-96" >
                                        <Image src="" alt="" className='w-full object-cover rounded px-6 h-72' width="300" height="200" />
                                    </div>
                                    <div className="  absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                                      <a href={`#slide${k!==0 ? k : 5}`} className="btn btn-circle btn-ghost">❮</a> 
                                      <h3 className='text-sm mt-4'>{img.title} </h3>
                                      <a href={`#slide${k===4 ? 1 : (k+2)}`} className="btn btn-circle btn-ghost">❯</a>
                                    </div>
                                  </div> 
                                )
                            })
                        }


</div> */}
            </div>
                    </div>
                    <div className='md:p-10 pb-12'>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">
                            {
                                !isOtpSent && <p className='text-center md:mt-0 mt-6 text-xl mb-4 font-semibold'>{isSignIn ? "Giriş Yap" : "Kayıt Ol"}</p>
                            }
                            {
                                isOtpSent && <>
                                
                                <p className='text-center text-lg   md:mt-0 mt-6   font-semibold'>Doğrulama Kodunu Giriniz:{loginObj.emailId}</p>
                                <p className="text-center text-slate-500 mt-2 text-sm">Kodu Almadınız mı?</p>
                                

                                </>
                            }
                            {
                                !isOtpSent && 
                                <div className={`form-control w-full mt-8`}>
                                    <label className="label">
                                        <span className={"label-text text-base-content text-xs text-slate-600 "}>{"Mailinizi Giriniz:"}</span>
                                    </label>
                                    <input type={"text"} value={loginObj.emailId} placeholder={"username@gmail.com"} onChange={(e) => updateFormValue({updateType : "emailId", value : e.target.value})} className="input  input-bordered input-primary w-full " />
                                </div>
                            }

                            {
                                isOtpSent && 
                                <div className={`form-control w-full mt-8`}>
                                    <label className="label">
                                        <span className={"label-text text-base-content text-xs text-slate-600"}>{"Şifre Hatalı"}</span>
                                    </label>
                                    <input type={"otp"} value={loginObj.otp} placeholder={"123456"} onChange={(e) => updateFormValue({updateType : "otp", value : e.target.value})} className="input  input-bordered input-primary w-full " />
                                </div>
                            }
                        </div>

                        <div className={`${isSignIn ? "mt-6" : "mt-6"} text-rose-500`}>{errorMessage}</div>
                        
                    
                        <button type="submit" className={"btn mt-2 normal-case w-full btn-primary text-white  " }>{loading && <span className="loading loading-spinner"></span>}{isOtpSent ? `Giriş Yap` : `Doğrulama Kodunu Al`}</button>
                        
                        {
                                isSignIn ? <div className='text-center mt-4'>{`Hesabın yok mu?`}<div onClick={() => openSignUp()} className="ml-2 inline-block"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Kayıt Ol</span></div></div> :
                                <div className='text-center mt-4'>Hesabın var mı? <div  onClick={() => openSignIn()} className="inline-block"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Giriş Yap</span></div></div>

                        }
                        
                    </form>
                    </div>
            </div>
        </div>
    )
}

export default SignInModalBody
