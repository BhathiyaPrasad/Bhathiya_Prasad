import React from "react";
import { Helmet } from "react-helmet-async";


export default function Head({ title, description, name, type }) {

    return (
        <Helmet>
            
            <title>
                {title}
            </title>
            <meta name="description" content={description} />
            {/* facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

        </Helmet>
    )
}