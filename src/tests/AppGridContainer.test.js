import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import AppGridContainer from '../components/AppGridContainer';

describe('AppGridContainer component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<AppGridContainer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders children correctly', () => {
    const childCount = 3;
    // const children = Array.from({ length: childCount }, (_, index) => <div key={index}>Child {index}</div>);
    // Define mock children
    const children = (
      <>
        <div key="1">Child 1</div>
        <div key="2">Child 2</div>
        <div key="3">Child 3</div>
      </>
    );
    const wrapper = shallow(<AppGridContainer>{children}</AppGridContainer>);

    expect(wrapper.find('div').length).toBe(childCount); // Assuming children are div elements
  });

  it('applies grid layout styles correctly', () => {
    const width = '400px';
    const wrapper = shallow(<AppGridContainer width={width} />);

    const gridContainer = wrapper.find("[data-testid='Grid-Container']");
    expect(gridContainer.prop('minwidth')).toBe(width);
    expect(gridContainer).toHaveStyleRule('grid-template-columns', `repeat(auto-fill, minmax(${width}, 1fr))`);

    // Simulate smaller screen size
    global.innerWidth = 600;
    global.dispatchEvent(new Event('resize'));

    // Expect grid template columns to change after resizing
    // expect(gridContainer).toHaveStyleRule('grid-template-columns', 'repeat(auto-fill, minmax(250px, 1fr))', {
    //   media: '(max-width: 768px)',
    // });
  });
});
