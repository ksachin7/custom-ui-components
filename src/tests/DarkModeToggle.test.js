import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import DarkModeToggle from '../components/DarkModeToggle';
import { useDarkMode } from '../context/DarkModeContext';

jest.mock('../context/DarkModeContext'); // Mock the DarkModeContext module

describe('DarkModeToggle component', () => {
  it('renders sun icon when dark mode is disabled', () => {
    useDarkMode.mockReturnValue({ isDarkMode: true, toggleDarkMode: jest.fn() });
    const wrapper = mount(<DarkModeToggle />);
    expect(wrapper.find('HiOutlineSun').exists()).toBe(true);
    expect(wrapper.find('HiOutlineMoon').exists()).toBe(false);
  });

  it('renders moon icon when dark mode is enabled', () => {
    useDarkMode.mockReturnValue({ isDarkMode: false, toggleDarkMode: jest.fn() });
    const wrapper = mount(<DarkModeToggle />);
    expect(wrapper.find('HiOutlineSun').exists()).toBe(false);
    expect(wrapper.find('HiOutlineMoon').exists()).toBe(true);
  });

  it('calls toggleDarkMode function when clicked', () => {
    const toggleDarkMode = jest.fn();
    useDarkMode.mockReturnValue({ isDarkMode: false, toggleDarkMode });
    const wrapper = mount(<DarkModeToggle />);
    wrapper.find('ButtonIcon').simulate('click');
    expect(toggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
