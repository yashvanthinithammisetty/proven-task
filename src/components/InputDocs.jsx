// import React, { useState } from 'react';
// import { Group, Text, Paper, Stack, FileInput, Button, Container } from '@mantine/core';
// import { IconUpload, IconCloudUpload } from '@tabler/icons-react';
// import Task from './Task'; // Assuming Task is another component that you have defined
// import Notify from './Notify'; // Import the Notify component

// function InputDocs() {
//   const [showTask, setShowTask] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [specFile, setSpecFile] = useState(null);
//   const [methodFile, setMethodFile] = useState(null);

//   const handleProcessClick = () => {
//     setShowTask(true); // Show the Task component when the Process button is clicked
//   };

//   const handleUploadClick = async () => {
//     if (!specFile || !methodFile) {
//       setNotification({
//         message: 'Please select both files before uploading.',
//         color: 'red',
//         isInProgress: false,
//       });
//       return;
//     }

//     setNotification({
//       message: 'Upload started...',
//       color: 'blue',
//       isInProgress: true,
//     });

//     const formData = new FormData();
//     formData.append('file1', specFile);
//     formData.append('file2', methodFile);

//     try {
//       const response = await fetch('http://13.235.98.215:8000/upload_files', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         setNotification({
//           message: 'Files uploaded successfully!',
//           color: 'green',
//           isInProgress: false,
//         });
//       } else {
//         setNotification({
//           message: 'Upload failed. Please try again.',
//           color: 'red',
//           isInProgress: false,
//         });
//       }
//     } catch (error) {
//       setNotification({
//         message: 'An error occurred during upload.',
//         color: 'red',
//         isInProgress: false,
//       });
//       console.error('Upload Error:', error);
//     }

//     // Clear notification after 4 seconds
//     setTimeout(() => setNotification(null), 4000);
//   };

//   const handleNotificationClose = () => {
//     setNotification(null);
//   };

//   return (
//     <Container size="xl">
//       <Group position="apart">
//         <Group align="flex-start">
//           {/* Specification */}
//           <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
//             <Stack spacing="xs">
//               <Text size="md" weight={600}>
//                 Specification
//               </Text>
//               <FileInput
//                 placeholder="File Name"
//                 rightSection={<IconCloudUpload size={20} />}
//                 onChange={setSpecFile} // Set the spec file
//               />
//             </Stack>
//           </Paper>

//           {/* Method */}
//           <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
//             <Stack spacing="xs">
//               <Text size="md" weight={600}>
//                 Method
//               </Text>
//               <FileInput
//                 placeholder="File Name"
//                 rightSection={<IconCloudUpload size={20} />}
//                 onChange={setMethodFile} // Set the method file
//               />
//             </Stack>
//           </Paper>
//         </Group>
//       </Group>

//       {/* Buttons */}
//       <Group mt="md">
//         <Button
//           variant="outline"
//           rightSection={<IconUpload size={20} />}
//           color="indigo"
//           size="md"
//           onClick={handleUploadClick} // Attach the upload handler
//         >
//           Upload Files
//         </Button>
//         <Button
//           variant="filled"
//           color="indigo"
//           size="md"
//           onClick={handleProcessClick}
//         >
//           Process
//         </Button>
//       </Group>

//       {/* Display the Task component if showTask is true */}
//       {showTask && <Task />}

//       {/* Centered Buttons */}
//       <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
//         <Button variant="filled" color="indigo" size="md">
//           Save
//         </Button>
//         <Button variant="filled" color="indigo" size="md">
//           Generate
//         </Button>
//       </Group>

//       {/* Notification */}
//       <Notify notification={notification} onClose={handleNotificationClose} />
//     </Container>
//   );
// }

// export default InputDocs;

// import React, { useState } from 'react';
// import { Group, Text, Paper, Stack, FileInput, Button, Container } from '@mantine/core';
// import { IconUpload, IconCloudUpload } from '@tabler/icons-react';
// import Task from './Task'; // Assuming Task is another component that you have defined
// import Notify from './Notify'; // Import the Notify component

// function InputDocs() {
//   const [showTask, setShowTask] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [specFile, setSpecFile] = useState(null);
//   const [methodFile, setMethodFile] = useState(null);
//   const [taskData, setTaskData] = useState({
//     company: 'DRL',
//     facility: 'FTO 2',
//     importProduct: '',
//     market: '',
//     spec: '',
//     method: '',
//   });

//   // Function to handle the API call and update the Task fields
//   const handleProcessClick = async () => {
//     if (!specFile || !methodFile) {
//       setNotification({
//         message: 'Please select both files before processing.',
//         color: 'red',
//         isInProgress: false,
//       });
//       return;
//     }

//     setNotification({
//       message: 'Processing...',
//       color: 'blue',
//       isInProgress: true,
//     });

//     // Here, you should make an API call to retrieve the data for the task
//     try {
//       const response = await fetch(`http://13.235.98.215:8000/process?file_name=${specFile.name}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json(); // Assuming the response is in JSON format
//         setTaskData({
//           company: 'DRL', // Hardcoded for now
//           facility: 'FTO 2', // Hardcoded for now
//           importProduct: data.product || 'Paracetamol',
//           market: data.market || 'USA',
//           spec: data.spec || 'SPEC-DOC-001',
//           method: data.method || 'M0-100001234-00',
//         });
//         setShowTask(true); // Show the Task component
//         setNotification({
//           message: 'Data processed successfully!',
//           color: 'green',
//           isInProgress: false,
//         });
//       } else {
//         setNotification({
//           message: 'Processing failed. Please try again.',
//           color: 'red',
//           isInProgress: false,
//         });
//       }
//     } catch (error) {
//       console.error('Error processing data:', error);
//       setNotification({
//         message: 'An error occurred while processing the data.',
//         color: 'red',
//         isInProgress: false,
//       });
//     }

//     // Clear notification after 4 seconds
//     setTimeout(() => setNotification(null), 4000);
//   };

//   const handleUploadClick = async () => {
//     // Similar to your previous upload logic...
//   };

//   const handleNotificationClose = () => {
//     setNotification(null);
//   };

//   return (
//     <Container size="xl">
//       <Group position="apart">
//         <Group align="flex-start">
//           {/* Specification */}
//           <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
//             <Stack spacing="xs">
//               <Text size="md" weight={600}>
//                 Specification
//               </Text>
//               <FileInput
//                 placeholder="File Name"
//                 rightSection={<IconCloudUpload size={20} />}
//                 onChange={setSpecFile} // Set the spec file
//               />
//             </Stack>
//           </Paper>

//           {/* Method */}
//           <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
//             <Stack spacing="xs">
//               <Text size="md" weight={600}>
//                 Method
//               </Text>
//               <FileInput
//                 placeholder="File Name"
//                 rightSection={<IconCloudUpload size={20} />}
//                 onChange={setMethodFile} // Set the method file
//               />
//             </Stack>
//           </Paper>
//         </Group>
//       </Group>

//       {/* Buttons */}
//       <Group mt="md">
//         <Button
//           variant="outline"
//           rightSection={<IconUpload size={20} />}
//           color="indigo"
//           size="md"
//           onClick={handleUploadClick} // Attach the upload handler
//         >
//           Upload Files
//         </Button>
//         <Button
//           variant="filled"
//           color="indigo"
//           size="md"
//           onClick={handleProcessClick} // Process the files and update the task data
//         >
//           Process
//         </Button>
//       </Group>

//       {/* Display the Task component if showTask is true */}
//       {showTask && (
//         <Task
//           company={taskData.company}
//           facility={taskData.facility}
//           importProduct={taskData.importProduct}
//           market={taskData.market}
//           spec={taskData.spec}
//           method={taskData.method}
//         />
//       )}

//       {/* Centered Buttons */}
//       <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
//         <Button variant="filled" color="indigo" size="md">
//           Save
//         </Button>
//         <Button variant="filled" color="indigo" size="md">
//           Generate
//         </Button>
//       </Group>

//       {/* Notification */}
//       <Notify notification={notification} onClose={handleNotificationClose} />
//     </Container>
//   );
// }

// export default InputDocs;
// import React, { useState } from 'react';
// import { Group, Text, Paper, Stack, FileInput, Button, Container, Box } from '@mantine/core';
// import { IconUpload, IconCloudUpload } from '@tabler/icons-react';
// import Task from './Task'; // Assuming Task is another component that you have defined
// import Notify from './Notify'; // Import the Notify component

// function InputDocs() {
//   const [showTask, setShowTask] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [specFile, setSpecFile] = useState(null);
//   const [methodFile, setMethodFile] = useState(null);
//   const [taskData, setTaskData] = useState({
//     company: 'DRL',
//     facility: 'FTO 2',
//     importProduct: 'Paracetamol',
//     market: 'USA',
//     spec: 'SPEC-DOC-00',
//     method: 'M0-100001234-I',
//   });

//   const handleProcessClick = async () => {
//     if (!specFile || !methodFile) {
//       setNotification({
//         message: 'Please select both files before processing.',
//         color: 'red',
//         isInProgress: false,
//       });
//       return;
//     }

//     setNotification({
//       message: 'Processing...',
//       color: 'blue',
//       isInProgress: true,
//     });

//     try {
//       // Mock API call and data handling
//       setTimeout(() => {
//         setTaskData({
//           company: 'DRL',
//           facility: 'FTO 2',
//           importProduct: 'Paracetamol',
//           market: 'USA',
//           spec: 'SPEC-DOC-00',
//           method: 'M0-100001234-I',
//         });
//         setShowTask(true);
//         setNotification({
//           message: 'Data processed successfully!',
//           color: 'green',
//           isInProgress: false,
//         });
//       }, 2000);
//     } catch (error) {
//       setNotification({
//         message: 'An error occurred while processing the data.',
//         color: 'red',
//         isInProgress: false,
//       });
//     }

//     setTimeout(() => setNotification(null), 4000);
//   };

//   return (
//     <Container size="xl">
//       <Box style={{ borderBottom: '2px solid #e0e0e0', paddingBottom: '20px', marginBottom: '20px' }}>
//         <Text size="xl" weight={700}>Create Master Data</Text>
//       </Box>

//       <Box style={{ borderBottom: '2px solid #e0e0e0', paddingBottom: '20px', marginBottom: '20px' }}>
//         <Text size="lg" weight={600}>Input Docs</Text>
//       </Box>

//       <Group position="apart">
//         {/* Specification */}
//         <Paper shadow="xs" withBorder style={{ width: '45%', padding: '20px' }}>
//           <Stack spacing="xs">
//             <Text size="md" weight={600}>
//               Specification
//             </Text>
//             <FileInput
//               placeholder="File Name"
//               rightSection={<IconCloudUpload size={20} />}
//               onChange={setSpecFile}
//             />
//           </Stack>
//         </Paper>

//         {/* Method */}
//         <Paper shadow="xs" withBorder style={{ width: '45%', padding: '20px' }}>
//           <Stack spacing="xs">
//             <Text size="md" weight={600}>
//               Method
//             </Text>
//             <FileInput
//               placeholder="File Name"
//               rightSection={<IconCloudUpload size={20} />}
//               onChange={setMethodFile}
//             />
//           </Stack>
//         </Paper>
//       </Group>

//       <Group mt="md" position="left">
//         <Button
//           variant="outline"
//           rightSection={<IconUpload size={20} />}
//           color="indigo"
//           size="md"
//         >
//           Upload Files
//         </Button>
//         <Button
//           variant="filled"
//           color="indigo"
//           size="md"
//           onClick={handleProcessClick}
//         >
//           Process
//         </Button>
//       </Group>

//       {showTask && (
//         <Box mt="md">
//           <Task taskData={taskData} />
//         </Box>
//       )}

//       <Group position="center" mt="xl">
//         <Button variant="filled" color="indigo" size="md">
//           Save
//         </Button>
//         <Button variant="filled" color="indigo" size="md">
//           Generate
//         </Button>
//       </Group>

//       <Notify notification={notification} onClose={() => setNotification(null)} />
//     </Container>
//   );
// }

// export default InputDocs;
import React, { useState } from 'react';
import { Group, Text, Paper, Stack, FileInput, Button, Container } from '@mantine/core';
import { IconUpload, IconCloudUpload } from '@tabler/icons-react';
import Task from './Task'; // Importing the Task component
import Notify from './Notify'; // Importing the Notify component

function InputDocs() {
  const [showTask, setShowTask] = useState(false);
  const [notification, setNotification] = useState(null);
  const [specFile, setSpecFile] = useState(null);
  const [methodFile, setMethodFile] = useState(null);
  const [taskData, setTaskData] = useState({
    company: 'DRL',
    facility: 'FTO 2',
    importProduct: 'Paracetamol',
    market: 'USA',
    spec: 'SPEC-DOC-001',
    method: 'MO-100001234-00',
  });

  const handleProcessClick = async () => {
    if (!specFile || !methodFile) {
      setNotification({
        message: 'Please select both files before processing.',
        color: 'red',
        isInProgress: false,
      });
      return;
    }

    setNotification({
      message: 'Processing...',
      color: 'blue',
      isInProgress: true,
    });

    try {
      const response = await fetch(`http://13.235.98.215:8000/process?file_name=${specFile.name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTaskData({
          company: 'DRL',
          facility: 'FTO 2',
          importProduct: data.product || 'Paracetamol',
          market: data.market || 'USA',
          spec: data.spec || 'SPEC-DOC-001',
          method: data.method || 'M0-100001234-00',
        });
        setShowTask(true);
        setNotification({
          message: 'Data processed successfully!',
          color: 'green',
          isInProgress: false,
        });
      } else {
        setNotification({
          message: 'Processing failed. Please try again.',
          color: 'red',
          isInProgress: false,
        });
      }
    } catch (error) {
      console.error('Error processing data:', error);
      setNotification({
        message: 'An error occurred while processing the data.',
        color: 'red',
        isInProgress: false,
      });
    }

    setTimeout(() => setNotification(null), 4000);
  };

  const handleUploadClick = async () => {
    // Upload logic can be placed here
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <Container size="xl">
      <Group position="apart">
        <Group align="flex-start">
          {/* Specification */}
          <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
            <Stack spacing="xs">
              <Text size="md" weight={600}>Specification</Text>
              <FileInput
                placeholder="File Name"
                rightSection={<IconCloudUpload size={20} />}
                onChange={setSpecFile}
              />
            </Stack>
          </Paper>

          {/* Method */}
          <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
            <Stack spacing="xs">
              <Text size="md" weight={600}>Method</Text>
              <FileInput
                placeholder="File Name"
                rightSection={<IconCloudUpload size={20} />}
                onChange={setMethodFile}
              />
            </Stack>
          </Paper>
        </Group>
      </Group>

      {/* Buttons */}
      <Group mt="md">
        <Button
          variant="outline"
          rightSection={<IconUpload size={20} />}
          color="indigo"
          size="md"
          onClick={handleUploadClick}
        >
          Upload Files
        </Button>
        <Button
          variant="filled"
          color="indigo"
          size="md"
          onClick={handleProcessClick}
        >
          Process
        </Button>
      </Group>

      {/* Display the Task component if showTask is true */}
      {showTask && (
        <Task taskData={taskData} />
      )}

      {/* Centered Buttons */}
      <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
        <Button variant="filled" color="indigo" size="md">Save</Button>
        <Button variant="filled" color="indigo" size="md">Generate</Button>
      </Group>

      {/* Notification */}
      <Notify notification={notification} onClose={handleNotificationClose} />
    </Container>
  );
}

export default InputDocs;
