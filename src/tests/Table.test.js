import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import Table, { TableHead, TableBody, TableRow, TableCell } from '../components/Table';

describe('Table component', () => {
  const headers = ['Header 1', 'Header 2', 'Header 3'];
  const data = [
    ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
    ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3'],
    ['Row 3 Cell 1', 'Row 3 Cell 2', 'Row 3 Cell 3'],
  ];

  it('renders without crashing', () => {
    shallow(<Table headers={headers} data={data} />);
  });

  it('renders the correct number of headers', () => {
    const wrapper = shallow(<Table headers={headers} data={data} />);
    expect(wrapper.find(TableHead).find(TableCell)).toHaveLength(headers.length);
  });

  it('renders the correct number of rows', () => {
    const wrapper = shallow(<Table headers={headers} data={data} />);
    expect(wrapper.find(TableBody).find(TableRow)).toHaveLength(data.length);
  });

  it('renders the correct number of cells in each row', () => {
    const wrapper = shallow(<Table headers={headers} data={data} />);
    wrapper.find(TableBody).find(TableRow).forEach((row, index) => {
      expect(row.find(TableCell)).toHaveLength(data[index].length);
    });
  });
});
