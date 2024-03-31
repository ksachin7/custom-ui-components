import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${props => props.minwidth || '300px'}, 1fr)); 
    grid-gap: 20px;
    width: 100%;
    margin-top: 1.6rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;

function AppGridContainer({ children, width }) {
    return (
        <GridContainer data-testid='Grid-Container' minwidth={width}>
            {children}
        </GridContainer>
    );
}

// Define PropTypes for the component
AppGridContainer.propTypes = {
    children: PropTypes.node.isRequired, 
    width: PropTypes.string, 
};

export default AppGridContainer;
