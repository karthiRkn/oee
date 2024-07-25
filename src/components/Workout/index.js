// DynamicRangePicker.test.jsx
import React from 'react';
import { shallow } from 'enzyme';
import DynamicRangePicker from '../DynamicRangePicker'; // Adjust import path as per your project structure

describe('DynamicRangePicker Component', () => {
  it('renders without crashing', () => {
    shallow(<DynamicRangePicker />);
  });

  it('renders DatePicker.RangePicker component', () => {
    const wrapper = shallow(<DynamicRangePicker />);
    expect(wrapper.find('DatePicker').exists()).toBe(true);
    expect(wrapper.find('DatePicker').prop('RangePicker')).toBeTruthy();
  });

  it('passes style and other props correctly', () => {
    const mockStyle = { color: 'red' };
    const wrapper = shallow(<DynamicRangePicker style={mockStyle} placeholder="Select Dates" />);

    expect(wrapper.prop('style')).toEqual(expect.objectContaining({
      color: 'red',
      marginRight: '10px',
    }));

    expect(wrapper.prop('placeholder')).toBe('Select Dates');
  });
});
