import React from 'react';
import CategoryRow from './category_row';

const CategoryDetail = ({ category, rows }) => (
  <article className='category-detail'
       style={{minHeight: `${$(window).height() - 50}px`}}>
       <header className='category-header'>
         <h1 className='page-width'>
           {category.name}
         </h1>
       </header>

       <ul className='page-width'>
         {rows.map((row, i) => (
           <CategoryRow key={i} row={row} />
         ))}
       </ul>
  </article>
);

export default CategoryDetail;
