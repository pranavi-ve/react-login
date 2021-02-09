import React from 'react'

export const Pagination = ({handlePagination,page}) => {
    const {
        totalPages=0,
        startIndex=0,
        endIndex=0, currentPage=0, totalRecords=0 } = page;
    const handleClicks=(action)=>{
        switch (action) {
            case 'NEXT':
                handlePagination(currentPage+1)
                break;
            case 'PREV':
                handlePagination(currentPage-1)
                break;
            default:
                break;
        }
    };
    
    return (
        <div>
            <span>Showing {startIndex} to {endIndex} out of {totalRecords} records</span>
            <button disabled={currentPage<=1} onClick={()=>handleClicks('PREV')}>Prev</button>
            <button disabled={currentPage===totalPages} onClick={()=>handleClicks('NEXT')}>Next</button>
        </div>
    )
}
