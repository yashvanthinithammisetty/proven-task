// import React from 'react'
// import { Title,Paper, Group,Text ,Stepper,Flex, Container} from '@mantine/core'
// import { FaDatabase } from 'react-icons/fa';
//  import Steppper from './Steppper';
// import Sidebar from './Sidebar';
 
// function Create() {
//   return (
//     <Container ml="sm" size="lg">
   
//     <div style={{ display: 'flex', alignItems: 'center' }}>
     
//     <FaDatabase size={30} />
   
//     <Title  order={1} weight={700} >
//       Create Master Data
//     </Title>
//     </div>
//     <Flex mt='xl' justify="space-between">
//     <Steppper></Steppper>
//     <Sidebar></Sidebar>
//     </Flex>
//     </Container>
 
 
//   )
// }
//  export default Create

// import React from 'react';
// import { Title, Container, Flex } from '@mantine/core';
// import { FaDatabase } from 'react-icons/fa';
// import Steppper from './Steppper';
// import Sidebar from './Sidebar';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Create = () => {
//   const navigate = useNavigate();
//   const [inputDocs, setInputDocs] = useState('');
//   const [method, setMethod] = useState('');

//   const handleInputDocsChange = (e) => {
//     setInputDocs(e.target.value);
//   };

//   const handleMethodChange = (e) => {
//     setMethod(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send data to backend
//     const response = await fetch('/api/tasks', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         inputDocs,
//         method,
//       }),
//     });

//     if (response.ok) {
//       // Navigate to the task page
//       const taskId = await response.json();
//       navigate(`/tasks/${taskId}`);
//     } else {
//       // Handle error
//       console.error('Error creating task:', response.status);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Task</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="inputDocs">Input Docs:</label>
//           <input
//             type="text"
//             id="inputDocs"
//             value={inputDocs}
//             onChange={handleInputDocsChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="method">Method:</label>
//           <input
//             type="text"
//             id="method"
//             value={method}
//             onChange={handleMethodChange}
//           />
//         </div>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default Create;
// function Create() {
//   return (
//     <Container ml="sm" size="lg">
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <FaDatabase size={30} />
//         <Title order={1} weight={700}>
//           Create Master Data
//         </Title>
//       </div>

//       <Flex mt="xl" style={{ flexWrap: 'nowrap' }}>
//         <div style={{ flexGrow: 1, marginRight: '1rem' }}>
//           <Steppper />
//         </div>
//         <div style={{ flexBasis: '300px', flexShrink: 0 }}>
//           <Sidebar />
//         </div>
//       </Flex>
//     </Container>
//   );
// }

// export default Create;


import React, { useState } from 'react';
import { Title } from '@mantine/core';
import { FaDatabase } from 'react-icons/fa';
import Steppper from './Steppper';
import Sidebar from './Sidebar';
import '@mantine/core/styles.layer.css';
 
function Create() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar component */}
      <Sidebar opened={sidebarOpen} setOpened={setSidebarOpen} />
 
      {/* Main content area */}
      <div
        style={{
          marginLeft: sidebarOpen ? '200px' : '80px', // Adjust margin for sidebar
          marginTop: '60px', // Add top margin or padding to avoid header overlap
          transition: 'margin-left 0.3s',
          flexGrow: 1,
          padding: '20px',
        }}
      >
        {/* Title section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaDatabase size={30} style={{ marginRight: '10px' }} />
          <Title order={2} weight={700}>
            Create Master Data
          </Title>
        </div>
        <br />
 
        {/* Stepper component */}
        <Steppper />
      </div>
    </div>
  );
}
 
export default Create;