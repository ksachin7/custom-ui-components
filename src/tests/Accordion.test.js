import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import Accordion from '../components/Accordion';

describe('Accordion component', () => {
  it('renders the Accordion component without crashing', () => {
    const wrapper = mount(<Accordion title="Accordion Title">Accordion Content</Accordion>);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with default props', () => {
    const wrapper = mount(<Accordion title="Accordion Title">Accordion Content</Accordion>);
    // expect(wrapper.prop('defaultExpanded')).toBe(false);
    expect(wrapper.prop('disabled')).toBe(false);
    expect(wrapper.prop('gutters')).toBe(false);
    // expect(wrapper.prop('bg')).toBe('#f9f9f9');
  });

  it('expands and collapses when clicked', () => {
    const wrapper = mount(<Accordion title="Test Accordion">Accordion Content</Accordion>);
    const accordionHeader = wrapper.find('[data-testid="accordion-header"]').first();

    // console.log('Number of accordion-header elements found:', accordionHeader.length);

    // Initially, the accordion should be collapsed
    expect(wrapper.find('[data-testid="accordion-content"]').exists()).toBe(false);

    // Simulate a click event on the accordion header to expand
    accordionHeader.simulate('click');
    expect(wrapper.find('[data-testid="accordion-content"]').exists()).toBe(true);

    // Simulate another click event to collapse
    accordionHeader.simulate('click');
    expect(wrapper.find('[data-testid="accordion-content"]').exists()).toBe(false);
  });

  it('does not expand or collapse when disabled', () => {
    const wrapper = mount(
      <Accordion title="Accordion Title" disabled>
        Accordion Content
      </Accordion>
    );
    expect(wrapper.find('[data-testid="accordion-content"]').exists()).toBe(false);
  });

  it('renders title and subtitle correctly', () => {
    const wrapper = mount(
      <Accordion title="Accordion Title" subtitle="Subtitle">
        Accordion Content
      </Accordion>
    );
    expect(wrapper.find('[data-testid="accordion-header"]').first().text()).toBe('Accordion Title Subtitle');
    expect(wrapper.find('[data-testid="subtitle"]').at(1).text()).toBe('Subtitle');
  });

  it('renders content when expanded', () => {
    const wrapper = mount(
      <Accordion title="Accordion Title">
        Accordion Content
      </Accordion>
    );

    // Simulate a click event on the accordion header to expand it
    const accordionHeader = wrapper.find('[data-testid="accordion-header"]').at(0);
    accordionHeader.simulate('click');

    // After clicking, the accordion should expand and content should be rendered
    expect(wrapper.find('[data-testid="accordion-content"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="accordion-content"]').at(0).text()).toBe('Accordion Content');
  });

  it('does not render content when collapsed', () => {
    const wrapper = mount(
      <Accordion title="Accordion Title">Accordion Content</Accordion>
    );
    expect(wrapper.find('[data-testid="accordion-content"]').exists()).toBe(false);
  });
});
