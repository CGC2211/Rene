import React from 'react';

const ImageComponent = ({data}) =>{

    return data != null ? 
            <div className="imageComponent"><figure><img alt="algo" src={data.image}></img></figure></div>
            :   
            <div className="imageComponent"><span>Loading...</span></div>
            ;
}

export default ImageComponent;