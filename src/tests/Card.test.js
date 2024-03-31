import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import { Card, CardActions, CardContent, CardHeader, CardMedia } from '../components/Card';

describe('Card component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders children correctly', () => {
    const wrapper = mount(
      <Card>
        <CardContent>Hello</CardContent>
        <CardActions>Actions</CardActions>
      </Card>
    );
    expect(wrapper.find(CardContent).text()).toBe('Hello');
    expect(wrapper.find(CardActions).text()).toBe('Actions');
  });

  it('passes width prop correctly', () => {
    const width = '200px';
    const wrapper = mount(<Card width={width} />);
    expect(wrapper.find(Card).prop('width')).toBe(width);
  });
});

describe('CardActions component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<CardActions />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('CardContent component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<CardContent />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders children correctly', () => {
    const wrapper = mount(<CardContent>Hello</CardContent>);
    expect(wrapper.text()).toBe('Hello');
  });
});

describe('CardHeader component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<CardHeader title="Title" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders title and subheader correctly', () => {
    const title = 'Title';
    const subheader = 'Subheader';
    const wrapper = mount(<CardHeader title={title} subheader={subheader} />);
    expect(wrapper.find('code').text()).toBe(title + subheader);
  });
});

describe('CardMedia component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<CardMedia image="image.jpg" title="Title" />);
    expect(wrapper.exists()).toBe(true);
  });
});
