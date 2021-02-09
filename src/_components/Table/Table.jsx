import React from 'react'
export const Table = ({headers, data}) => {
    return (
        <table>
            <thead>
                <tr >
                    {headers.map((header,idx)=><th style={tableStyle}>
                        {header.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row,idx)=>
                <tr key={row.id}>
                     {headers.map((header,idx)=><td key={row.id + header.id} style={tableStyle}>{row[header.id]}</td>)}
                </tr>
                )}
            </tbody>
        </table>
    )
}

const tableStyle={
    padding:'0.5rem'
}