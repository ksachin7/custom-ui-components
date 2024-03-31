import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import ButtonsGroup from '../components/ButtonsGroup';

describe('ButtonsGroup component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<ButtonsGroup />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders children correctly', () => {
    const buttonLabels = ['Button 1', 'Button 2', 'Button 3'];
    const wrapper = mount(
      <ButtonsGroup>
        {buttonLabels.map((label, index) => (
          <button key={index}>{label}</button>
        ))}
      </ButtonsGroup>
    );

    const buttons = wrapper.find('button');
    expect(buttons).toHaveLength(buttonLabels.length);

    buttons.forEach((button, index) => {
      expect(button.text()).toBe(buttonLabels[index]);
    });
  });

  // it('applies additional props to the styled component', () => {
  //   const gap = '2rem';
  //   const margin = '10px';
  //   const wrapper = mount(
  //     <ButtonsGroup gap={gap} margin={margin}>
  //       <button>Button</button>
  //     </ButtonsGroup>
  //   );

  //   const styledComponent = wrapper.find('StyledButtonGroup');
  //   expect(styledComponent.prop('gap')).toBe(gap);
  //   expect(styledComponent.prop('margin')).toBe(margin);
  // });
});
