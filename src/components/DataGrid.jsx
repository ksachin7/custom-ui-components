import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { FaFileExport } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";
import {
  // Button,
  ButtonIcon,
  TableContainer,
  TableElement,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  FileUpload,
} from "./index";
import Papa from "papaparse"; // Library for parsing CSV files

const LeftSpan = styled.span`
  margin-right: auto;
  text-align: left;
  padding-right: 5px;
  /* float: left; */
`;

const RightSpan = styled.span`
  margin-left: auto;
  text-align: right;
  /* float: right; */
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.4rem;
  border: none;
  color: var(--color-grey-600);
  background-color: var(--color-grey-100);
`;

const DataGridContainer = styled.div`
  position: relative;
  max-height: 300px; /* Set the maximum height for scrollability */
  overflow-y: auto; /* Enable vertical scrolling */
  margin-top: 0.7rem;
`;

const DataGridFooter = styled.div`
  border: 1px solid #ddd;
  padding: 0.4rem 1rem;
  color: var(--color-grey-700);
  /* width: 100%; */
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 1; /* Ensure the footer appears above other content */
  background-color: var(--color-grey-100);
  /* overflow: scroll; */
  /* text-align: right; */
  /* display: table-row-group; */
  /* display: flex;
  justify-content: space-between; */
  &:not(:has(*)) {
    display: none;
  }
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataGrid = ({ columns, rows }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRows, setEditedRows] = useState(rows);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: null,
  });
  const [csvData, setCsvData] = useState([]);
  const [csvHeaders, setCsvHeaders] = useState([]);

  const handleSort = (field) => {
    let direction = "ascending";
    if (sortConfig.field === field && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ field, direction });
  };

  // const sortedRows = (rows || [...csvData]).sort((a, b) => {
  //   if (sortConfig.direction === "ascending") {
  //     return a[sortConfig.field] > b[sortConfig.field] ? 1 : -1;
  //   } else {
  //     return a[sortConfig.field] < b[sortConfig.field] ? 1 : -1;
  //   }
  // });

  const sortedRows = (rows || [...csvData]).sort((a, b) => {
    const fieldA = a[sortConfig.field];
    const fieldB = b[sortConfig.field];

    // Convert values to numbers if possible
    const numFieldA = parseFloat(fieldA);
    const numFieldB = parseFloat(fieldB);

    // Check if both fields are valid numbers
    const isNumberA = !isNaN(numFieldA);
    const isNumberB = !isNaN(numFieldB);

    // If both fields are valid numbers, sort numerically
    if (isNumberA && isNumberB) {
      if (sortConfig.direction === "ascending") {
        return numFieldA - numFieldB;
      } else {
        return numFieldB - numFieldA;
      }
    }

    // If one of the fields is not a valid number, fall back to string comparison
    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      if (sortConfig.direction === "ascending") {
        return fieldA.localeCompare(fieldB);
      } else {
        return fieldB.localeCompare(fieldA);
      }
    }

    // If one field is a valid number and the other is not, prioritize the number
    if (isNumberA) {
      return -1; // Number comes before string
    } else if (isNumberB) {
      return 1; // String comes before number
    }

    // Default case: preserve the original order
    return 0;
  });

  const handleEdit = () => {
    setIsEditing(!isEditing); // Toggle editing mode
  };

  // useEffect(() => {
  //   console.log("csvData has been updated:", csvData);
  // }, [csvData]);

  const handleInputChange = (value, rowIndex, field) => {
    if (rows && rows[rowIndex]) {
      const updatedRows = [...editedRows];
      updatedRows[rowIndex][field] = value;
      // console.log(rowIndex, field)
      setEditedRows(updatedRows);
    } else {
      setCsvData(prevCsvData => {
        const updatedCsvData = [...prevCsvData];
        updatedCsvData[rowIndex][field] = value;
        // console.log(rowIndex, field)
        return updatedCsvData;
      });
    }
  };

  const handleExport = () => {
    // Generate export data (e.g., CSV)
    const csvContent =
      columns.map((col) => col.headerName).join(",") +
      "\n" +
      editedRows
        .map((row) => columns.map((col) => row[col.field]).join(","))
        .join("\n");

    // Create a Blob object containing the CSV data
    const blob = new Blob([csvContent], { type: "text/csv" });

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
  };

  const handleFileUpload = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true, // Skip empty lines in CSV file
      complete: (result) => {
        // Extract headers from CSV
        const headers = Object.keys(result.data[0]).map((header) => ({
          headerName: header,
          field: header,
        }));
        setCsvHeaders(headers);

        // Extract data from CSV, excluding empty rows
        //  const data = result.data.filter(row => Object.values(row).some(cell => cell.trim() !== ''));
        const formattedData = result.data.map((row) => {
          const rowData = {};
          headers.forEach((header) => {
            rowData[header.field] = row[header.headerName];
          });
          return rowData;
        });
        setCsvData(formattedData);
      },
    });
  };

  return (
    <DataGridContainer>
      <TableContainer>
        <TableElement>
          <TableHead>
            <TableRow>
              {(columns || csvHeaders).map((column, index) => (
                <TableCell
                  data-testid='table-head-cell'
                  key={index}
                  onClick={() => handleSort(column.field)}
                >
                  <LeftSpan>{column.headerName}</LeftSpan>
                  {sortConfig.field === column.field && (
                    <RightSpan>
                      {sortConfig.direction === "ascending" ? (
                        <MdArrowUpward />
                      ) : (
                        <MdArrowDownward />
                      )}
                    </RightSpan>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row, rowIndex) => (
              <TableRow data-testid='body-table-row' key={rowIndex}>
                {(columns || csvHeaders).map((column, colIndex) => (
                  <TableCell data-testid='table-cell' key={colIndex}>
                    {isEditing ? (
                      <InputField
                        data-testid='cell-input'
                        type='text'
                        value={rows && rows.length > 0 ? row[column.field] : csvData[rowIndex][column.field]}
                        onChange={(e) =>
                          handleInputChange(
                            e.target.value,
                            rowIndex,
                            column.field
                          )
                        }
                      />
                    ) : (
                      row[column.field]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableElement>
      </TableContainer>
      <DataGridFooter>
        <FooterRow>
          <>
            <code>Rows: {(rows || csvData).length}</code>{" "}
            <span style={{ color: "lightGrey" }}>|</span>{" "}
            <code>Columns: {(columns || csvHeaders).length}</code>
          </>
          <ButtonIcon
            data-testid='edit-btn'
            size='md'
            onClick={handleEdit}
            disabled={(!rows || rows.length === 0) && (!csvData || csvData.length === 0)}
          >
            {isEditing ? (
              "Save Changes"
            ) : (
              <>
                <TbEdit /> <span style={{ padding: '5px' }}>Edit</span>
              </>
            )}
          </ButtonIcon>
          <FileUpload
            accept='.csv'
            maxFileSize={25}
            onChange={handleFileUpload}
            disabled={columns && columns.length !== 0}
          />
          {(rows || csvData).length !== 0 && (
            <ButtonIcon color='green' onClick={handleExport}>
              <FaFileExport />
            </ButtonIcon>
          )}
        </FooterRow>
      </DataGridFooter>
    </DataGridContainer>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  rowHeight: PropTypes.number,
};

DataGrid.defaultProps = {
  rowHeight: 40,
};

export default DataGrid;
