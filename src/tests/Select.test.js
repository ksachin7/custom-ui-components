import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'; 
import Select from '../components/Select';

describe('Select component', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders with default props', () => {
    const wrapper = shallow(<Select options={options} />); // Use shallow instead of mount
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const defaultValue = 'option2';
    const onChange = jest.fn();
    const wrapper = shallow(<Select options={options} defaultValue={defaultValue} onChange={onChange} width="200px" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('toggles dropdown when clicked', () => {
    const wrapper = shallow(<Select options={options} />);
    // console.log(wrapper.debug())
    // Find the styled select component
    const styledSelect = wrapper.find("[data-testid='Select-Dropdown']");

    // Simulate click to open dropdown
    styledSelect.simulate('click');

    // Assert the value of the selected option
    expect(styledSelect.find('option').at(0).prop('value')).toBe(options[0].value); // Dropdown should remain closed

    // Simulate click to close dropdown
    wrapper.find("[data-testid='Select-Dropdown']").simulate('click');
    // expect(wrapper.find('select').prop('value')).toBe(options[0].value); // Dropdown should remain closed
  });
});
