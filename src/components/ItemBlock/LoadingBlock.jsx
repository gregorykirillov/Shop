import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader 
            speed={2}
            width={254}
            height={390}
            viewBox="0 0 254 390"
            backgroundColor="#e6e6e6"
            foregroundColor="#f2f2f2"
        >
            <rect x="18" y="0" rx="11" ry="11" width="218" height="300" /> 
            <rect x="271" y="218" rx="0" ry="0" width="2" height="1" /> 
            <rect x="91" y="334" rx="30" ry="30" width="145" height="49" /> 
            <rect x="76" y="306" rx="4" ry="4" width="160" height="15" />
        </ContentLoader>
    )
}

export default LoadingBlock
