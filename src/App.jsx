import React from 'react';
import { Button, Navbar, Dropdown } from 'flowbite-react';
import 'flowbite';
import Layout from './Layout/Layout';

function App() {
  return (
    <>
      <Layout></Layout>

      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Flowbite + React + Vite</h1>
        <Button color="purple" onClick={() => alert("Button Clicked!")}>
          Click Me
        </Button>
      </div>

      <Dropdown label="Dropdown button" dismissOnClick={false}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>

    </>
  );
}

export default App;
