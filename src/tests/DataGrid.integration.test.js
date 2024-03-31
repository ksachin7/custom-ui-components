import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import DataGrid from '../components/DataGrid';

describe('DataGrid Integration Test', () => {
  test('renders table with correct data and handles sorting', () => {
    const columns = [{ headerName: 'Name', field: 'name' }, { headerName: 'Age', field: 'age' }];
    const rows = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }];

    const wrapper = shallow(<DataGrid columns={columns} rows={rows} />);

    // Verify that the table is rendered with correct data
    expect(wrapper.find('[data-testid="body-table-row"]').length).toBe(2); 
    expect(wrapper.find('[data-testid="table-cell"]').at(0).text()).toBe('John');
    expect(wrapper.find('[data-testid="table-cell"]').at(1).text()).toBe('30');
    expect(wrapper.find('[data-testid="table-cell"]').at(2).text()).toBe('Alice');
    expect(wrapper.find('[data-testid="table-cell"]').at(3).text()).toBe('25');

    // Simulate sorting by Name
    wrapper.find('[data-testid="table-head-cell"]').first().simulate('click');

    // Verify that sorting is applied correctly
    expect(wrapper.find('[data-testid="table-cell"]').at(0).text()).toBe('Alice');
    expect(wrapper.find('[data-testid="table-cell"]').at(1).text()).toBe('25');
    expect(wrapper.find('[data-testid="table-cell"]').at(2).text()).toBe('John');
    expect(wrapper.find('[data-testid="table-cell"]').at(3).text()).toBe('30');
  });

  test('toggles editing mode when edit button is clicked', () => {
    const columns = [{ headerName: 'Name', field: 'name' }, { headerName: 'Age', field: 'age' }];
    const rows = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }];

    const wrapper = shallow(<DataGrid columns={columns} rows={rows} />);
    const editButton = wrapper.find('[data-testid="edit-btn"]');

    // Initial state: not in editing mode
    expect(wrapper.find("[data-testid='cell-input']").exists()).toBe(false);
    // console.log(wrapper.debug())

    // Click edit button
    editButton.simulate('click');

    // After clicking edit button: should be in editing mode
    expect(wrapper.find("[data-testid='cell-input']").exists()).toBe(true);

    // Click edit button again
    wrapper.find('[data-testid="edit-btn"]').simulate('click');
    // console.log(wrapper.debug())

    // After clicking edit button again: should exit editing mode
    expect(wrapper.find("[data-testid='cell-input']").exists()).toBe(false);
  });
});
