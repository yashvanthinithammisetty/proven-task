import React from 'react';
import { Card, Group, Text, ActionIcon, Button, Title } from '@mantine/core';
import { IconEye, IconDownload, IconExternalLink, IconRun } from '@tabler/icons-react';
 
const ProductCard = ({ title }) => {
  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <Card shadow="sm" padding="lg" style={{ position: 'relative', paddingRight: '100px' }}>
        {/* Card content */}
        <Group position="apart">
          <Text weight={500}>{title}</Text>
        </Group>
 
        {/* Icons positioned in the right corner of the card */}
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '40px', // Adjust to align with heading
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <ActionIcon variant="light" color="blue" style={{ marginRight: '8px' }}>
            <IconEye size={16} />
          </ActionIcon>
          <ActionIcon variant="light" color="blue" style={{ marginRight: '8px' }}>
            <IconDownload size={16} />
          </ActionIcon>
          <ActionIcon variant="light" color="blue">
            <IconExternalLink size={16} />
          </ActionIcon>
        </div>
      </Card>
    </div>
  );
};
 
const ProductList = () => {
  return (
    <div>
      {/* Heading with Run icon placed outside and above the ProductCard */}
      <Group position="apart" style={{ marginBottom: '20px' }}>
        <Group spacing="xs">
          <Title order={4}>Product Details</Title>
          <ActionIcon variant="light" color="blue">
            <IconRun size={16} />
          </ActionIcon>
        </Group>
      </Group>
 
      {/* Product cards */}
      <ProductCard title="Product" />
      <ProductCard title="Product Grade" />
 
      {/* Footer with Save, Export, and Generate Analysis buttons */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        {/* Save button aligned to the left */}
        <Button variant="outline" size="md">
          Save
        </Button>
 
        {/* Export and Generate Analysis buttons aligned to the right */}
        <Group spacing="xs">
          <Button variant="outline" size="md">
            Export
          </Button>
          <Button variant="outline" size="md">
            Generate Analysis
          </Button>
        </Group>
      </div>
    </div>
  );
};
 
export default ProductList;
// import React, { useState } from 'react';

// const ProductDetails = () => {
//   const [inputDocs, setInputDocs] = useState(null);
//   const [method, setMethod] = useState(null);

//   const handleInputDocsChange = (event) => {
//     setInputDocs(event.target.files[0]);
//   };

//   const handleMethodChange = (event) => {
//     setMethod(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('inputDocs', inputDocs);
//     formData.append('method', method);

//     try {
//       // Send the data to the server
//       const response = await fetch('/api/products', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         // Handle successful response
//         console.log('Product details submitted successfully');
//       } else {
//         // Handle error response
//         console.error('Error submitting product details');
//       }
//     } catch (error) {
//       console.error('Error submitting product details:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="inputDocs">Input Docs:</label>
//         <input type="file" id="inputDocs" onChange={handleInputDocsChange} />
//       </div>
//       <div>
//         <label htmlFor="method">Method:</label>
//         <input type="text" id="method" onChange={handleMethodChange} />
//       </div>
//       <button type="submit">Generate</button>
//     </form>
//   );
// };

// export default ProductDetails; 
 
