// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// Styled components
const AccordionContainer = styled.div`
  border: 1px solid ${({ bg }) => bg ? bg : '#eee'};
  /* margin-bottom: ${({ gutters }) => (gutters !== false ? '10px' : '0px')}; */
`;

const AccordionHeader = styled.div`
  padding: 10px 21px;
  user-select: none; 
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.3)' : 'rgb(50, 50, 50)')};
  background-color: ${(props) => (props.disabled ? 'var(--color-grey-200)' : props.bg || '#f9f9f9')};
  display: flex;
  align-items: center;
  white-space: nowrap;      // Prevent text from wrapping 
  overflow: hidden;         // Hide the overflowing text 
  text-overflow: ellipsis;  // Display ellipsis (...) for overflowed text 
`;

const AccordionContent = styled.div`
  padding: 10px 21px;
  color: var(--color-grey-500);
  background-color: #f9f9f9;
  /* display: ${props => (props.isOpen ? 'block' : 'none')}; */
  opacity: 97%;
`;

const ArrowIcon = styled.span`
  margin-left: auto;
  /* transform: rotate(${props => (props.isOpen ? '90deg' : '0deg')}); */
  transition: all 0.3s ease;
`;

const Subtitle = styled.span`
  margin-left: auto;
  padding-left: 10px;
  color: var(--color-grey-500);
`;

// Accordion component
const Accordion = ({ title, subtitle, children, defaultExpanded, disabled, gutters, ...otherProps }) => {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  // console.log('gutters', gutters)
  // console.log(typeof gutters)

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <AccordionContainer data-testid="accordion" className='accordion-container' style={{ marginBottom: gutters ? '10px' : '0px' }} {...otherProps}>
      <AccordionHeader data-testid="accordion-header" onClick={toggleAccordion} disabled={disabled} {...otherProps}>
        <b>{title}</b> <Subtitle data-testid="subtitle">{subtitle}</Subtitle>
        {isOpen ? (<ArrowIcon><MdKeyboardArrowUp /></ArrowIcon>) : (<ArrowIcon><MdKeyboardArrowDown /></ArrowIcon>)}
      </AccordionHeader>
      {isOpen ? (
        <AccordionContent data-testid="accordion-content">
          {children}
        </AccordionContent>
      ) : null}
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.string, 
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  bg: PropTypes.string,
  // isOpen: PropTypes.bool,
  gutters: PropTypes.bool,
};

Accordion.defaultProps = {
  defaultExpanded: false,
  disabled: false,
  gutters: false,
  // bg: '#f9f9f9'
};

export default Accordion;