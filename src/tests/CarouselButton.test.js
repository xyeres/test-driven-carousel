import React from 'react'; // 1
import { mount } from 'enzyme'; // 2
import CarouselButton from '../CarouselButton';
import styled from 'styled-components';

describe('CarouselButton', () => {
  const text = 'Button text';
  let mounted;

  beforeEach(() => {
    mounted = mount(<CarouselButton>{text}</CarouselButton>);
  });

  it('renders correctly', () => {
    expect(mounted.find('button')).toMatchSnapshot();
  });

  it('passes `children` through to the <button>', () => {
    expect(mounted.prop('children')).toBe(text);
  });

  it('allows color prop to be overriden', () => {
    const color = 'lightpurple';
    mounted.setProps({ color });
    expect(mounted.prop('color')).toBe(color);
  });

  it('passes other props through to the <button>', () => {
    const onClick = () => {};
    const className = 'my-carousel-button';
    const dataAction = 'prev';
    mounted.setProps({ onClick, className, 'data-action': dataAction }); // 1
    expect(mounted.prop('onClick')).toBe(onClick);
    expect(mounted.prop('className')).toBe(className);
    expect(mounted.prop('data-action')).toBe(dataAction);
  });
});
