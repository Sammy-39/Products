import Helmet from 'react-helmet'

const Meta = ({ title, desc, img }) =>{
    return(
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={img} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={img} />
        </Helmet>
    )
}

export default Meta