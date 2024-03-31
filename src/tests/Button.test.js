import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import Button from '../components/Button';

describe('Button component', () => {
  it('renders with default props', () => {
    const wrapper = mount(<Button>Default Button</Button>);
    const button = wrapper.find('button');
    expect(button.prop('type')).toBe('button');
    expect(button.prop('disabled')).toBe(false);
    // expect(wrapper).toMatchSnapshot();
  });  

  it('renders with custom props', () => {
    const wrapper = mount(
      <Button variant="outlined" color="secondary" size="lg" uppercase>
        Custom Button
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Button onClick={onClickMock}>Clickable Button</Button>);
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
