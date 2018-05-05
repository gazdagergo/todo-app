import React from 'react';
import TodoListItem from './todo-list-item';
import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

const muiTheme = getMuiTheme();

const mountWithContext = (node) => mount(node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: PropTypes.object},
});

describe('<TodoListItem />', () => {
  const props = {
    id: 0,
    completed: true,
    text: 'waaa',
    onSave: id => console.log('saved', id),
    onClick: id => console.log('clicked', id),
  };
  
  it('should be mounted with required props', () => {
    mountWithContext(
      <TodoListItem { ...props } />
    );
  });

  it('should show the text', () => {
    const wrapper = shallow(<TodoListItem { ...props } />);
    expect(wrapper.find('div.todo-list-item-text').exists()).toBe(true); 
    expect(wrapper.find('div.todo-list-item-text').text()).toBe('waaa');
  });

  it('checkbox should show the completed prop', () => {
    const wrapper = mountWithContext(<TodoListItem { ...props } />);
    expect(wrapper.find('input[type="checkbox"]').instance().checked).toBe(true); 
    wrapper.setProps({ completed: false });
    expect(wrapper.find('input[type="checkbox"]').instance().checked).toBe(false); 
  });

  it('onSave should be called with id and new input value', () => {
    const onSave = jest.fn();

    const props = {
      id: 0,
      completed: true,
      text: 'waaa',
      onSave,
      onClick: jest.fn(),
    };
    const wrapper = mountWithContext(<TodoListItem { ...props } />);
    const instance = wrapper.instance();
    instance.setState({ inputValue: 'new value'});
    instance.handleSave();
    expect(onSave.mock.calls[0]).toMatchObject([0, 'new value']);
  });
});
