import React from 'react'
import styled from 'styled-components'
import { type TableProps } from './Table.types'

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border: none;
  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
  `}
`

const Table: React.FC<TableProps> = (props) => {
  return <StyledTable {...props}>{props.children}</StyledTable>
}

export default Table
