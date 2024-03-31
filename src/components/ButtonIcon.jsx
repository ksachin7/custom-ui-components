import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButtonIcon = styled.button`
  color: ${props => props.color};
  background: none;
  border: none;
  padding: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '0.4rem';
      case 'lg':
        return '0.8rem';
      default:
        return '0.6rem';
    }
  }};
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover, &:focus {
    background-color: transparent;
    outline: none;
  }
  &:disabled{
    color: silver;
  }
  & svg {
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '1.6rem';
      case 'lg':
        return '2.8rem';
      default:
        return '2.2rem';
    }
  }
  };
  height: auto;
  color: ${props => props.disabled? 'silver': props.color};
}
`;

function ButtonIcon({ color, size, children, disabled, ...otherProps }) {
  return (
    <StyledButtonIcon data-testid='Styled-Button-Icon' color={color} size={size} disabled={disabled ? true : false} {...otherProps}>{children}</StyledButtonIcon>
  )
}

ButtonIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  color: 'darkGrey',
  size: 'md',
  disabled: false,
};

export default ButtonIcon;
