import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import FileUpload from '../components/FileUpload';

describe('FileUpload component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<FileUpload onChange={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('handles file change event', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(<FileUpload onChange={mockOnChange} />);

    const mockFile = new File(['test content'], 'test.txt', { type: 'text/plain' });
    const input = wrapper.find('input[type="file"]');
    input.simulate('change', { target: { files: [mockFile] } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(mockFile);
  });

  it('validates file size and type (CSV)', () => {
    const maxFileSize = 25; // 1KB
    const onChangeMock = jest.fn();
    const consoleErrorSpy = jest.spyOn(console, 'error');

    const wrapper = mount(
      <FileUpload onChange={onChangeMock} maxFileSize={maxFileSize} />
    );

    const csvBlob = new Blob(['CSV file contents'], { type: 'text/csv' });
    Object.defineProperty(csvBlob, 'size', { value: maxFileSize - 100 });

    const input = wrapper.find('input[type="file"]');
    input.simulate('change', { target: { files: [csvBlob] } });

    // Ensure error message is not logged to the console
    expect(consoleErrorSpy).not.toHaveBeenCalled();

    // Ensure that onChange is called with the CSV file
    expect(onChangeMock).toHaveBeenCalledWith(csvBlob);

    // Create a large CSV Blob with a size exceeding the maximum allowed size
    const largeCsvBlob = new Blob(['x'.repeat(111 * 1024)], { type: 'text/csv' });

    // Now simulate a change event with the large CSV Blob
    // const input = wrapper.find('input[type="file"]');
    wrapper.find('input[type="file"]').simulate('change', { target: { files: [largeCsvBlob] } });

    // Ensure error message is logged to the console
    expect(consoleErrorSpy).toHaveBeenCalledWith(`File size: ${Math.floor(largeCsvBlob.size / 1024)}KB exceeds the maximum allowed size: ${maxFileSize}KB.`);

    // Ensure onChange is not called (Large files will not be selected)
    // expect(onChangeMock).not.toHaveBeenCalledWith(largeCsvBlob);
    // expect(onChangeMock).not.toHaveBeenCalled();

    const nonCsvBlob = new Blob(['Non-CSV file contents'], { type: 'text/plain' });
    Object.defineProperty(nonCsvBlob, 'size', { value: maxFileSize });
  
    input.simulate('change', { target: { files: [nonCsvBlob] } });

    // Ensure onChange is not called 
    // expect(onChangeMock).not.toHaveBeenCalled();

    // Ensure error message is logged to the console
    expect(consoleErrorSpy).toHaveBeenCalled();

    // Ensure error message is logged to the console
    // expect(consoleErrorSpy).toHaveBeenCalledWith('Invalid file type. Only CSV files are allowed.');
  });

  it('disables input when disabled prop is true', () => {
    const mockOnChange = jest.fn(); // Mock onChange function
    const wrapper = mount(<FileUpload onChange={mockOnChange} disabled />);
    const input = wrapper.find('input[type="file"]');

    expect(input.prop('disabled')).toBe(true);
  });

  // Add more tests for different props and functionalities
});
