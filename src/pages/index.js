import { Inter } from '@next/font/google'
import Hero from '@/components/home/Hero'
import Testimonials from '@/components/home/Testimonials'
import PageMetaTags from '@/containers/PageMetaTags'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageMetaTags title="Home" description={""} url=""/>
    <div itemScope itemType="https://schema.org/WebSite">
    </div>
        <Hero />
        
        <Testimonials />
       
    </>
  )
}
