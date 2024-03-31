import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled table components
export const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
  overflow: scroll;
  overflow-x: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  font-weight: bold;
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  background-color: var(--color-silver-100);
  color: var(--color-silver-700);
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--color-grey-100);
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 1rem;
  color: var(--color-silver-700);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Table component
const Table = ({ headers, data }) => {
  return (
    <TableContainer>
      <TableElement>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableElement>
    </TableContainer>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default Table;
