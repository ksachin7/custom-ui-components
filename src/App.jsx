import React from 'react'; // eslint-disable-line no-unused-vars
import { AppGridContainer, Accordion, Button, ButtonIcon, ButtonsGroup, Card, CardContent, CardHeader, DataGrid, Spinner, Typography } from './components';
import GlobalStyles from './styles/GlobalStyles';
import Select from './components/Select';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import { RiAliensFill } from "react-icons/ri";

function App() {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelectChange = (value) => {
    console.log('Selected value:', value);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar logo='/react.svg' title='Elegant UI'><DarkModeToggle /></Navbar>
      <Typography className='py-1' variant='h1'>UI Components</Typography>
      <AppGridContainer>
        <Card>
          <CardHeader title='Buttons & ButtonGroup' />
          <CardContent>
            <ButtonsGroup>
              <Button variant='outlined' size='sm'>sm-outlined</Button>
              <Button variant='outlined' size='md' color='secondary'>md-outlined</Button>
            </ButtonsGroup>
            <ButtonsGroup>
              <Button size='md' color='warning'>md-button</Button>
              <Button color='danger' uppercase disabled>uppercase</Button>
            </ButtonsGroup>
            <ButtonsGroup>
            <Button size='lg' color='success'>lg-button</Button>
            <ButtonIcon color={'lightBlue'} size='lg'><RiAliensFill /></ButtonIcon>
            </ButtonsGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title='Accordian' />
          <CardContent>
            <Accordion title='Default Accordion' subtitle='Some extra text...' gutters>Accordion texts</Accordion>
            <Accordion title='No gutter space Accordion title'>Accordion texts</Accordion>
            <Accordion title='Custom color Accordion title' bg='lightGreen' gutters>Accordion texts</Accordion>
            <Accordion title='Disabled accordian title' disabled>Accordian texts</Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title='Select' />
          <CardContent>
            <Select options={options} width='100%' onChange={handleSelectChange} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader title='Spinners' />
          <CardContent>
            <Spinner type='thin' />
            <Spinner size={50} color='lightBlue' />
            <Spinner size={60} color='lightGreen' />
            <Spinner size={70} />
          </CardContent>
        </Card>

        <Card width='680px'>
          <CardHeader title='FileUploader & DataGrid' />
          <CardContent>
            {/* <DataGrid
              columns={[
                { headerName: 'ID', field: 'id' },
                { headerName: 'Name', field: 'name' },
                { headerName: 'Age', field: 'age' },
              ]}
              rows={[
                { id: 1, name: 'John', age: 30 },
                { id: 2, name: 'Alice', age: 25 },
                { id: 3, name: 'Bob', age: 40 },
              ]}
            /> */}
            <DataGrid />
          </CardContent>
        </Card>
      </AppGridContainer>
    </>
  )
}

export default App
