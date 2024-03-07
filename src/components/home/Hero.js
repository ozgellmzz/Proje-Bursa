import Link from "next/link"
import { Image } from 'primereact/image';


function Hero(){
    return(
        <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                <Image src="https://media.istockphoto.com/id/1354397928/tr/foto%C4%9Fraf/grand-mosque-of-bursa.jpg?s=612x612&w=0&k=20&c=wi_vgxJwDgID_c0G5Lt5c_lI3ZAiZ3XjP4iHxeeyZME=" width="200" height="200" alt="Grand Mosque of Bursa" className="max-w-sm h-80 object-cover rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">Güzel Bursamızı <span className="md:block mt-4">Tanıma Rehberi</span></h1>
                    <p className="py-2 text-xl text-slate-100 mt-4 pr-12">Sitemizdeki rehberi kullanarak vaktiniz boyunca <br/>gezebileceğiniz yerleri bulabilirsiniz.</p>
                    <Link href="/start-designing"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">Başlayın!</button></Link>
                </div>
            </div>
        </div>
    )    
}

export default Hero