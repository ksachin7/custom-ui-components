import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import ButtonIcon from '../components/ButtonIcon'; 
import { GrDocumentTest } from "react-icons/gr";

describe('ButtonIcon component', () => {
  it('renders with default size and fill color if props are not provided', () => {
    // Render ButtonIcon component without props
    const wrapper = shallow(<ButtonIcon>Icon</ButtonIcon>);
    // Find the ButtonIcon element
    const buttonIcon = wrapper.find("[data-testid='Styled-Button-Icon']");

    // Default size is 'md'
    expect(buttonIcon.prop('size')).toBe('md');
    // Default fill color is 'darkGrey'
    expect(buttonIcon.prop('color')).toBe('darkGrey');
  });

  it('renders with specified size and fill color', () => {
    // Define color and size props
    const color = 'blue';
    const size = 'lg';
    // Render ButtonIcon component with specified props
    const wrapper = shallow(
      <ButtonIcon size={size} color={color}>
        <GrDocumentTest />
      </ButtonIcon>
    );
    // Find the ButtonIcon element
    const buttonIcon = wrapper.find("[data-testid='Styled-Button-Icon']");

    // Check if the size and color props are correctly applied
    expect(buttonIcon.prop('size')).toBe(size);
    expect(buttonIcon.prop('color')).toBe(color);
  });

  it('renders children correctly', () => {
    // Render ButtonIcon component with children
    const wrapper = shallow(<ButtonIcon>Icon</ButtonIcon>);
    // Check if children are rendered correctly
    expect(wrapper.text()).toBe('Icon');
  });
});
