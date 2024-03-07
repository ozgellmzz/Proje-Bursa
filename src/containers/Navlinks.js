import Link from 'next/link'


function Navlinks(){
    return(
        <>
            <li className="mr-2"><Link href="/photo-gallery">Fotoğraf Galerisi</Link></li>
            <li className="mr-2"><Link href="/contact-us">İletişim</Link></li>
            <li className="mr-2"><Link href="/start-designing">Nereleri Gezmeliyim?</Link></li>
        </>
    )
}

export default Navlinks