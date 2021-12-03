import React, { Component } from 'react';
import './pagination.scss'
import { BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';

// Pagination Number Component
function PaginationNumber(props) {
    return(
        <li key={props.number}>
            <button className="pagNumber" href="#" onClick={props.changePage().bind(this, props.number)}>{props.number}</button>
        </li>
    );
}

function Pagination(props) {
    const pages = [];
    // Amount of pages
    for (let i = 1; i <= props.pageCount; i++) {
        pages.push(
            <PaginationNumber key={i} changePage={props.changePage} number={i}/>
        );
    }

    return (
        <div className="paginationContainer">
            <button className="pagPrev" onClick={props.prevPageClick}><BiLeftArrow/></button>
            <ul>
                {pages}
            </ul>
            <button className="pagNext" onClick={props.nextPageClick}><BiRightArrow/></button>
        </div>
    )
}
 
export default Pagination;
