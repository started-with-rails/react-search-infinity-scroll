import React from 'react';
import SearchItem from './SearchItem';
import  './Search.css';

const SearchList  = (props) => {
    const images =  props.items.map(image =>{
        return <SearchItem key={image.id}  image={image} />
    });
   return(
    <div className="image-list">{images}</div>
   );
}
export default SearchList;
