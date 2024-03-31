import React from 'react'; // eslint-disable-line no-unused-vars
import 'jest-styled-components';
// import { mount } from 'enzyme';
// import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('renders with default background color if not provided', () => {
    // const wrapper = mount(<Navbar />);
    // const navbarContainer = wrapper.find('NavbarContainer');

    // Default background color should be var(--color-grey-100)
    // expect(navbarContainer.prop('backgroundColor')).toBe('var(--color-grey-100)');
  });

  // it('renders with provided background color', () => {
  //   const backgroundColor = 'blue';
  //   const wrapper = mount(<Navbar color={backgroundColor} />);
  //   const navbarContainer = wrapper.find('NavbarContainer');

  //   // Background color should match the provided color
  //   // expect(navbarContainer.prop('bg')).toBe(backgroundColor);
  //   expect(wrapper.find(Navbar).props().backgroundColor).toBe('var(--color-grey-100)');
  // });
  
  // it('renders logo and title if provided', () => {
  //   // Mock logo and title props
  //   const logo = 'logo.png';
  //   const title = 'My Website';

  //   // Render the Navbar component with logo and title props
  //   const wrapper = mount(<Navbar logo={logo} title={title} />);

  //   // Find brand image and text elements
  //   const brandImage = wrapper.find('.brand-image');
  //   const brandText = wrapper.find('.brand-text');

  //   // Logo and title should be rendered
  //   expect(brandImage.exists()).toBe(true);
  //   expect(brandText.exists()).toBe(true);
  //   expect(brandImage.prop('src')).toBe(logo);
  //   expect(brandText.text()).toBe(title);
  // });

  // it('renders logo and title if provided', () => {
  //   const logo = 'logo.png';
  //   const title = 'My Website';
  //   const wrapper = mount(<Navbar logo={logo} title={title} />);
  //   const brandImage = wrapper.find('BrandImage');
  //   const brandText = wrapper.find('BrandText');

  //   // Logo and title should be rendered
  //   expect(brandImage.exists()).toBe(true);
  //   expect(brandText.exists()).toBe(true);
  //   expect(brandImage.prop('src')).toBe(logo);
  //   expect(brandText.text()).toBe(title);
  // });

  // it('toggles menu when menu button is clicked', () => {
  //   const wrapper = mount(<Navbar />);
  //   const menuButton = wrapper.find('MenuButton');

  //   // Initially, menu should be closed
  //   expect(wrapper.state('isMenuOpen')).toBe(false);

  //   // Click on the menu button
  //   menuButton.simulate('click');

  //   // Menu should be open after clicking
  //   expect(wrapper.state('isMenuOpen')).toBe(true);
  // });

  // it('toggles menu when menu button is clicked', () => {
  //   const wrapper = mount(<Navbar />);
    
  //   // Check initial state
  //   expect(wrapper.find('.menu').exists()).toBe(false);

  //   // Simulate click on menu button
  //   wrapper.find('.menu-button').simulate('click');

  //   // Check if menu is toggled
  //   expect(wrapper.find('.menu').exists()).toBe(true);

  //   // Simulate click on menu button again
  //   wrapper.find('.menu-button').simulate('click');

  //   // Check if menu is toggled back
  //   expect(wrapper.find('.menu').exists()).toBe(false);
  // });
});
