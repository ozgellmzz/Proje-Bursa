import Head from 'next/head'

function PageMetaTags({title, description, url}){

    const pageTitle = `${title}${title.includes("Bursa") ? "" : " | Bursa"}`

    return(
        <Head>
                <title>{pageTitle}</title>
                <meta name="title" content={pageTitle} />
                <meta name="description" content={description} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta name="og:url" content={`/${url || ""}`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta property="twitter:url" content={`/${url || ""}`} />
                <link rel="canonical" href={`h/${url || ""}`} />
        </Head>
    )
}

export default PageMetaTags