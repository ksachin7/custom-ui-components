import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 10px;
  /* aspect-ratio: 1; */
  border-radius: 50%;
  background: ${props =>
        props.type === 'thin'
            ? 'none'
            : `
        radial-gradient(circle farthest-side, ${props.color || 'var(--color-brand-600)'} 94%, transparent) top/10px 10px no-repeat,
        conic-gradient(transparent 30%, ${props.color || 'var(--color-brand-600)'})
    `
    };

    -webkit-mask: ${props =>
        props.type === 'thin'
            ? 'none'
            : 'radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)'
    };

    border: ${props =>
        props.type === 'thin'
            ? `2px solid ${props.color || '#ccc'}`
            : 'none'
    };
    border-top-color: ${({ color }) => color || '#333'};
  animation: ${spinAnimation} 1s linear infinite;
`;

const Spinner = ({ size = 40, color, type }) => {
    return <SpinnerWrapper data-testid='Spinner-Wrapper' size={size} color={color} type={type} />;
};

Spinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    type: PropTypes.oneOf(['thin']),
};

export default Spinner;
