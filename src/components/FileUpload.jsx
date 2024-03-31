import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { FaTimes } from 'react-icons/fa'; // Import the close icon from react-icons library

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1rem;
  border-radius: var(--border-radius-sm);

  &::-webkit-file-upload-button {
    font: inherit;
    font-weight: 500;
    padding: 0.3rem 0.7rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: ${props => props.disabled ? 'var(--color-grey-300)' : 'var(--color-yellow-500)'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background-color: ${props => props.disabled ? 'var(--color-grey-300)' : 'var(--color-yellow-700)'};
    }
  }
`;

// const FileInput = styled.input.attrs({ type: 'file', id: 'file-upload' })`
//   display: none;
// `;

// const FileLabel = styled.label`
//   font: inherit;
//   font-size: 1rem;
//   font-weight: 500;
//   display: inline-flex;
//   padding: 0.3rem 0.7rem;
//   border-radius: var(--border-radius-sm); 
//   border: none;
//   color: var(--color-brand-50);
//   background-color: ${props => props.disabled ? 'var(--color-grey-300)' : 'var(--color-brand-600)'};
//   cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
//   transition: color 0.2s, background-color 0.2s;

//   &:hover {
//     background-color: ${props => props.disabled ? 'var(--color-grey-300)' : 'var(--color-brand-700)'};
//   }
// `;

// const RemoveButton = styled.button`
//   background: var(--color-red-500);
//   padding: 0.5rem 0.6rem;
//   border: none;
//   border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0 ; 
//   color: var(--color-brand-50);
//   cursor: pointer;
//   font-size: 1rem;
// `;

// const FileUpload = ({ accept, maxFileSize, onChange, disabled }) => {
//   const [selectedFileName, setSelectedFileName] = useState(null);
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     // Check if a file is selected
//     if (!selectedFile) {
//       console.error('No file selected.');
//       return;
//     }

//     if (maxFileSize && selectedFile.size > maxFileSize * 1024) {
//       console.error(`File size: ${Math.floor(selectedFile.size / 1024)}KB exceeds the maximum allowed size: ${maxFileSize}KB.`);
//       return;
//     }

//     setSelectedFileName(selectedFile.name);

//     if (onChange) {
//       onChange(selectedFile);
//     }
//   };

// const handleRemoveFile = () => {
//   setSelectedFileName(null);
//   if (onChange) {
//     onChange(null); // Trigger onChange event with null to notify parent component
//     // Todo: fix remove buttton issues(alignment, removing-file, other-errors)
//   }
// };


const FileUpload = ({ accept, maxFileSize, onChange, disabled }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if a file is selected
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    if (maxFileSize && selectedFile.size > maxFileSize * 1024) {
      // console.error('File size exceeds the maximum allowed size.');
      console.error(`File size: ${Math.floor(selectedFile.size / 1024)}KB exceeds the maximum allowed size: ${maxFileSize}KB.`);
      return;
    }
    // console.log('File selected:', selectedFile); // Log selected file

    if (onChange) {
      // console.log('Calling onChange function...'); // Log when onChange is called
      onChange(selectedFile);
    }
  };

  return (
    <>
      {/* <FileInput
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
      />
      <FileLabel htmlFor="file-upload" disabled={disabled}>
        <span>{selectedFileName || "Choose File"}</span>
      </FileLabel> */}
      {/* {selectedFileName && (
          <RemoveButton onClick={handleRemoveFile}>
            <FaTimes />
          </RemoveButton>
        )} */}
      <FileInput
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
      />
    </>
  );
};

FileUpload.propTypes = {
  accept: PropTypes.string,
  maxFileSize: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default FileUpload;
