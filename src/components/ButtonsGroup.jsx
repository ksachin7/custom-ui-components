import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin: 5px 0 5px 0;
  /*
  // Apply space between buttons 
  & > * {
    margin-right: 8px; 
  }

  // Remove margin from last button to avoid extra space 
  & > *:last-child {
    margin-right: 0;
  }
  */
`;

function ButtonsGroup({ children, ...otherProps }) {
  return <StyledButtonGroup {...otherProps}>{children}</StyledButtonGroup>;
}

ButtonsGroup.propTypes = {
  children: PropTypes.node, 
};

export default ButtonsGroup;
