import React from 'react'
import styled from 'styled-components'
import { type TableRowProps } from './Table.types'

const StyledTableRow = styled.tr<TableRowProps>`
  &:nth-child(even) {
    padding: 8px;
  }
`

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>
}

export default TableRow
