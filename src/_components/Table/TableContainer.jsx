import React from 'react'
import { Table } from './Table'

export const TableContainer = ({headers=[], children}) => {
    return (
        <div>
        <Table headers={headers} data={children}></Table>
        </div>
    )
}
