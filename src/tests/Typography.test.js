import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import Typography from '../components/Typography';

describe('Typography component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Typography>Text</Typography>);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with default variant and component', () => {
    const wrapper = mount(<Typography>Text</Typography>);
    const component = wrapper.find('p');
    expect(component.exists()).toBe(true);
    expect(component.text()).toBe('Text');
  });

  it('renders with specified variant', () => {
    const wrapper = mount(<Typography variant="h1">Heading 1</Typography>);
    const component = wrapper.find('h1');
    expect(component.exists()).toBe(true);
    expect(component.text()).toBe('Heading 1');
  });

  it('applies className correctly', () => {
    const wrapper = mount(<Typography className="custom-class">Text</Typography>);
    const component = wrapper.find('p');
    expect(component.hasClass('custom-class')).toBe(true);
  });

  it('passes other props correctly', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Typography onClick={onClick}>Clickable Text</Typography>);
    const component = wrapper.find('p');
    component.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
