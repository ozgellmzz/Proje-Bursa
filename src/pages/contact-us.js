import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer title="Bizimle İletişime Geçebilirsiniz">
        <h1>E-Posta: bursabel@gmail.com</h1>
        <h1>Tel:02242222</h1>
            <PageMetaTags title="Contact Us" description={"We are reachable at - contact@d.com"} url="/contact-us"/>
            
      </InnerPageContainer>
    )
  }
  