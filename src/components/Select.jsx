import React, { useState } from 'react'; // eslint-disable-line no-unused-vars

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdArrowDropDown } from "react-icons/md";

// Styled components
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectDropdown = styled.select`
  appearance: none;
  padding: 8px 32px 8px 12px; /* Adjust padding for the arrow button */
  font-size: 16px;
  border: 1px solid var(--color-grey-100);
  border-radius: 4px;
  background-color: var(--color-grey-100);
  cursor: pointer;
  width: ${props => props.width || 'auto'}; /* Customize width if needed */
  &:focus{
    /* border: none; */
    outline: none;
  }
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 56%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none; /* Ensures the arrow icon doesn't interfere with select functionality */
`;

// Select component
const Select = ({ options, defaultValue, onChange, width }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <SelectContainer>
      <SelectDropdown
        data-testid='Select-Dropdown'
        value={selectedValue}
        onChange={handleSelectChange}
        width={width}
        onClick={toggleOptions}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectDropdown>
      <ArrowIcon><MdArrowDropDown /></ArrowIcon>
    </SelectContainer>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
};

export default Select;
