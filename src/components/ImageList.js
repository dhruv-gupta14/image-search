 import './ImageList.css';
 import React from 'react';
 import ImageCard from './ImageCard';

 const ImageList = props => {
     const imgs = props.images.map((img) => {
         return <ImageCard key={img.id} image={img} />;
     });

     return <div className="image-list">{imgs}</div>;
 };

 export default ImageList;  