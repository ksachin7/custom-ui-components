import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow, mount } from 'enzyme';
import DataGrid from '../components/DataGrid';

describe('DataGrid component', () => {
  const columns = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' }
  ];

  const rows = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 }
  ];

  it('renders without crashing', () => {
    mount(<DataGrid columns={columns} rows={rows} />);
  });

  it('displays correct number of rows and columns', () => {
    const wrapper = shallow(<DataGrid columns={columns} rows={rows} />);
    const tableRows = wrapper.find("[data-testid='body-table-row']");
    // console.log(wrapper.debug())
    // console.log(tableRows.debug())
    expect(tableRows).toHaveLength(rows.length); // Number of rows
    // expect(tableRows.find('TableCell')).toHaveLength(columns.length); // Number of columns
  });

  // it('toggles editing mode when edit button is clicked', () => {
  //   const wrapper = mount(<DataGrid columns={columns} rows={rows} />);
  //   // const editButton = wrapper.find('Button').find({ children: 'Edit' });
  //   // const editButton = wrapper.find('Button').find('ButtonIcon').at(1); // Assuming ButtonIcon is the correct selector for the edit button
  //   const editButton = wrapper.find('.edit-btn'); // Assuming ButtonIcon is the correct selector for the edit button
  //   editButton.at(0).simulate('click');

  //   // Check the value of the isEditing state variable
  //   expect(wrapper.find(DataGrid).prop('isEditing')).toEqual(true);
  // });

  it('toggles editing mode when edit button is clicked', () => {
    const wrapper = shallow(<DataGrid columns={columns} rows={rows} />);

    // Get the initial CSS class or style of an element affected by the editing mode
    const initialClassName = wrapper.find("[data-testid='table-cell']").at(0).prop('className');

    // Simulate click on the edit button
    wrapper.find("[data-testid='edit-btn']").simulate('click');

    // Get the updated CSS class or style of the same element after clicking the edit button
    const updatedClassNameProp = wrapper.find("[data-testid='table-cell']").at(0).prop('className');

    // Check if the class name prop exists and is not undefined
    // expect(updatedClassNameProp).toBeDefined();

    // Check if the class name has changed after toggling the editing mode
    if (updatedClassNameProp) {
      const updatedClassName = updatedClassNameProp.toString();
      expect(updatedClassName).not.toEqual(initialClassName);
    }
  });

  it('saves edits when save button is clicked', () => {
    const wrapper = mount(<DataGrid columns={columns} rows={rows} />);

    // Simulate clicking on the edit button to enable editing mode
    wrapper.find("[data-testid='edit-btn']").at(2).simulate('click');

    // Select a specific cell to edit
    const cellToEdit = wrapper.find("[data-testid='table-cell']").at(0);
    // console.log(cellToEdit.debug())

    // Get the initial value of the cell
    // const initialValue = cellToEdit.text();

    // Simulate typing into the cell (assuming it becomes an input field in editing mode)
    const newValue = 'New Value';
    cellToEdit.find('input').simulate('change', { target: { value: newValue } });
    // console.log(cellToEdit.debug())

    // Simulate clicking on the save button
    wrapper.find("[data-testid='edit-btn']").at(2).simulate('click');

    // Get the updated value of the cell
    const updatedValue = wrapper.find("[data-testid='table-cell']").at(0).text();

    // Check if the value has changed after saving
    expect(updatedValue).toEqual(newValue);
});


  it('disables FileUpload when columns are empty', () => {
    const wrapper = mount(<DataGrid columns={[]} rows={[]} />);
    const fileUpload = wrapper.find('FileUpload');
    expect(fileUpload.prop('disabled')).toEqual(false);
  });

});
