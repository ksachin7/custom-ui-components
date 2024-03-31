import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow, mount } from 'enzyme';
import Spinner from '../components/Spinner';

describe('Spinner component', () => {
  it('renders with default props', () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const wrapper = mount(<Spinner size={60} color="blue" type="thin" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('applies animation correctly', () => {
    jest.useFakeTimers(); // Mock timers to control animation

    const wrapper = shallow(<Spinner />);
    // console.log(wrapper.debug());
    // const spinner = wrapper.find('[data-testid="Spinner-Wrapper"]').instance();
    const spinner = wrapper.find('[data-testid="Spinner-Wrapper"]');
    expect(spinner.prop('size')).toBe(40); // Assuming the default size is 40
    expect(spinner.prop('color')).toBeUndefined(); // Default color
    expect(spinner.prop('type')).toBeUndefined(); // Default type

    // expect(spinner.props.size).toBe(40); // Default size
    // expect(spinner.props.color).toBeUndefined(); // Default color
    // expect(spinner.props.type).toBeUndefined(); // Default type
    // expect(spinner).toHaveStyleRule('animation', 'spin 2s linear infinite');

    jest.advanceTimersByTime(1000); // Advance timers by 1 second

    expect(wrapper.find('[data-testid="Spinner-Wrapper"]').prop('size')).toBe(40); // Size remains the same
    expect(wrapper.find('[data-testid="Spinner-Wrapper"]').prop('color')).toBeUndefined(); // Color remains the same
    expect(wrapper.find('[data-testid="Spinner-Wrapper"]').prop('type')).toBeUndefined(); // Type remains the same

    jest.useRealTimers(); // Restore real timers
  });
});
