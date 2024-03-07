
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";
import React from "react";
import { Image } from 'primereact/image';

export default function Page() {
    return (
      <InnerPageContainer title="Bursa Fotoğraf Galerisi">
            <PageMetaTags title="" description={""} url="/pricing"/>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://www.kulturportali.gov.tr/contents/images/20171004104037141_02Bursa%20CUMALIKIZIK%20Koyu%20Murat%20OCAL%20(5).jpg"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://www.grandalfatravel.com/wp-content/uploads/2023/02/uludag-turu-900x500.jpg"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://9koy.org/wp-content/uploads/2023/02/uludag-9koy-740x420.jpg"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://wp.oggusto.com/wp-content/uploads/2022/08/golyazi-adagorunumu.jpeg"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://www.oggusto.com/_next/image?url=https%3A%2F%2Fwp.oggusto.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fgolyazi-gezi.webp&w=1920&q=75"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://cdn2.enuygun.com/media/lib/825x620/uploads/image/emir-sultan-camii-36787.webp"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://www.gotobursa.com.tr/uploads/2020/09/ahmet-cetin-kozahanda-issiz-zamanlar_large.jpg"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://cdn2.enuygun.com/media/lib/825x620/uploads/image/tirilye-12863.webp"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://formback.com.tr/wp-content/uploads/2022/02/bursa-1240x697.jpg"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://media.istockphoto.com/id/471850687/tr/foto%C4%9Fraf/bursa-grand-mosque-or-ulu-cami.webp?s=2048x2048&w=is&k=20&c=dScQZI__HihCuhfus26cvhspZnZsJq9uIEcQayDiFkc="
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://www.odamax.com/omag/wp-content/uploads/2023/05/bursada-gezilecek-yerler.jpg"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://cdn2.enuygun.com/media/lib/825x620/uploads/image/emir-sultan-turbesi-36802.webp"
            alt="gallery-photo"
            width="300"
            height="200"
          />
        </div>
      </div>
    </div>

      </InnerPageContainer>
    )
  }
