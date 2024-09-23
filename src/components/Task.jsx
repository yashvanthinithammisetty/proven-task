//  import React from 'react';
// import { Card, Group, Text, ActionIcon, TextInput, Stack ,Flex, Container} from '@mantine/core';
// import { IconEye, IconDownload ,IconEdit } from '@tabler/icons-react';
 
// const Task = () => {
//   return (
//     <Container size='lg'>
//     <Card shadow="sm" padding="lg" radius="md" withBorder >
//       <Stack spacing="md">
//         <Text weight={700} color="green">
//           Task Id: D-Cas24010001
//         </Text>
 
//         <Group grow spacing="sm"  size="sm" style={{width:"40%"}}>
//           <TextInput
//             label="Company"
//             value="DRL"
//             size="sm"
//             rightSection={
//               <ActionIcon size="sm"  radius='lg' color="#23295A">
//                 <IconEdit  size="1rem" />
//               </ActionIcon>
//             }
//           />
//           <TextInput
//             label="Facility"
//             value="FTO 2"
//           size="sm"
//           weight={400}
//             rightSection={
//               <ActionIcon size="sm"  radius='lg' color="#23295A">
//                 <IconEdit  size="1rem" />
//               </ActionIcon>
//             }
//             readOnly
//           />
//         </Group>
 
//         <Group grow spacing="lg">
//           <Card shadow="sm" padding="md" radius="md" withBorder>
//             <Stack spacing="xs" >
//               <Flex wrap="nowrap">
//             import
//               <Group position="apart">
//                 <Text weight={500}>Product</Text>
//                 <TextInput placeholder='Paracetamol' mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Market</Text>
//                 <TextInput placeholder='USA'  mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>spec</Text>
//                 <TextInput placeholder='SPEC-DOC-001'></TextInput>
//               </Group>
             
//                 <Flex justify="start">
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconEye size="1rem" />
//                 </ActionIcon>
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconDownload size="1rem" />
//                 </ActionIcon>
//                 </Flex>
               
           
//               </Flex>
           
//             </Stack>
//           </Card>
 
//           <Card shadow="sm" padding="md" radius="md" withBorder>
//             <Stack spacing="xs">
//               <Flex>

//               <Group position="apart">
//                 <Text weight={500}>Product</Text>
//                 <TextInput placeholder='Paracetamol' mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Market</Text>
//                 <TextInput placeholder='USA' mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Method</Text>
         
//                 <TextInput placeholder='M0-100001234-00' mr='sm'></TextInput>
//               </Group>
           
//               <Flex justify="start">
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconEye size="1rem" />
//                 </ActionIcon>
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconDownload size="1rem" />
//                 </ActionIcon>
//                 </Flex>
//               </Flex>
//             </Stack>
//           </Card>
//         </Group>
//       </Stack>
//     </Card>
//     </Container>
//   );
// };
 
// export default Task;
 
// import React from 'react';
// import { Paper, Text, Group, Stack } from '@mantine/core';

// function Task({ company, facility, importProduct, market, spec, method }) {
//   return (
//     <Paper shadow="xs" withBorder p="md" mt="lg">
//       <Stack spacing="md">
//         <Text size="lg" weight={500}>Task Details</Text>

//         <Group position="apart">
//           <Text size="sm" weight={500}>Company:</Text>
//           <Text size="sm">{company}</Text>
//         </Group>

//         <Group position="apart">
//           <Text size="sm" weight={500}>Facility:</Text>
//           <Text size="sm">{facility}</Text>
//         </Group>

//         <Group position="apart">
//           <Text size="sm" weight={500}>Import Product:</Text>
//           <Text size="sm">{importProduct}</Text>
//         </Group>

//         <Group position="apart">
//           <Text size="sm" weight={500}>Market:</Text>
//           <Text size="sm">{market}</Text>
//         </Group>

//         <Group position="apart">
//           <Text size="sm" weight={500}>Specification:</Text>
//           <Text size="sm">{spec}</Text>
//         </Group>

//         <Group position="apart">
//           <Text size="sm" weight={500}>Method:</Text>
//           <Text size="sm">{method}</Text>
//         </Group>
//       </Stack>
//     </Paper>
//   );
// }

// export default Task;
// import React from 'react';
// import { Paper, Text, Group, Stack, Box } from '@mantine/core';
// import { IconEdit, IconEye, IconDownload } from '@tabler/icons-react';

// function Task({ taskData }) {
//   return (
//     <Paper shadow="xs" withBorder p="md">
//       <Stack spacing="md">
//         <Text size="lg" weight={500} color="green">Task Id: D-Cas24010001</Text>

//         <Group grow>
//           <Box style={{ width: '45%' }}>
//             <Text size="sm" weight={500}>Company</Text>
//             <Group>
//               <Text>{taskData.company}</Text>
//               <IconEdit size={16} />
//             </Group>
//           </Box>

//           <Box style={{ width: '45%' }}>
//             <Text size="sm" weight={500}>Facility</Text>
//             <Group>
//               <Text>{taskData.facility}</Text>
//               <IconEdit size={16} />
//             </Group>
//           </Box>
//         </Group>

//         <Group grow mt="md">
//           <Box style={{ width: '45%' }}>
//             <Text size="sm" weight={500}>importProduct</Text>
//             <Text>{taskData.importProduct}</Text>
//           </Box>

//           <Box style={{ width: '45%' }}>
//             <Text size="sm" weight={500}>Market</Text>
//             <Text>{taskData.market}</Text>
//           </Box>
//         </Group>

//         <Group grow mt="md">
//           <Box style={{ width: '45%' }}>
//             <Text size="sm" weight={500}>spec</Text>
//             <Group>
//               <Text>{taskData.spec}</Text>
//               <IconEye size={16} />
//               <IconDownload size={16} />
//             </Group>
//           </Box>

//           <Box style={{ width: '45%' }}>
//             <Text size="sm" weight={500}>Method</Text>
//             <Group>
//               <Text>{taskData.method}</Text>
//               <IconEye size={16} />
//               <IconDownload size={16} />
//             </Group>
//           </Box>
//         </Group>
//       </Stack>
//     </Paper>
//   );
// }


import React from 'react';
import { Paper, Text, Group, Stack, Box, TextInput } from '@mantine/core';
import { IconEdit, IconEye, IconDownload } from '@tabler/icons-react';

function Task({ taskData }) {
  return (
    <Paper shadow="xs" withBorder p="md" mt="md">
      <Stack spacing="md">
        {/* Task ID */}
        <Text size="md" weight={600} color="green">
          Task Id: D-Cas24010001
        </Text>

        {/* Company and Facility */}
        <Group grow spacing="md">
          <Box style={{ width: '100%' }}>
            <Text size="sm" weight={500}>Company</Text>
            <Group noWrap>
              <TextInput
                value={taskData.company}
                readOnly
                size="sm"
                styles={{ input: { backgroundColor: '#F0F3FF' } }}
              />
              <IconEdit size={18} color="#364FC7" style={{ cursor: 'pointer' }} />
            </Group>
          </Box>

          <Box style={{ width: '100%' }}>
            <Text size="sm" weight={500}>Facility</Text>
            <Group noWrap>
              <TextInput
                value={taskData.facility}
                readOnly
                size="sm"
                styles={{ input: { backgroundColor: '#F0F3FF' } }}
              />
              <IconEdit size={18} color="#364FC7" style={{ cursor: 'pointer' }} />
            </Group>
          </Box>
        </Group>

        {/* Import Product, Market, Spec, Method */}
        <Group grow spacing="md" mt="sm">
          <Box style={{ width: '100%' }}>
            <Text size="sm" weight={500}>importProduct</Text>
            <TextInput
              value={taskData.importProduct}
              readOnly
              size="sm"
              styles={{ input: { backgroundColor: '#F0F3FF' } }}
            />
          </Box>

          <Box style={{ width: '100%' }}>
            <Text size="sm" weight={500}>Market</Text>
            <TextInput
              value={taskData.market}
              readOnly
              size="sm"
              styles={{ input: { backgroundColor: '#F0F3FF' } }}
            />
          </Box>
        </Group>

        <Group grow spacing="md" mt="sm">
          <Box style={{ width: '100%' }}>
            <Text size="sm" weight={500}>spec</Text>
            <Group noWrap>
              <TextInput
                value={taskData.spec}
                readOnly
                size="sm"
                styles={{ input: { backgroundColor: '#F0F3FF' } }}
              />
              <IconEye size={18} color="#364FC7" style={{ cursor: 'pointer' }} />
              <IconDownload size={18} color="#364FC7" style={{ cursor: 'pointer' }} />
            </Group>
          </Box>

          <Box style={{ width: '100%' }}>
            <Text size="sm" weight={500}>Method</Text>
            <Group noWrap>
              <TextInput
                value={taskData.method}
                readOnly
                size="sm"
                styles={{ input: { backgroundColor: '#F0F3FF' } }}
              />
              <IconEye size={18} color="#364FC7" style={{ cursor: 'pointer' }} />
              <IconDownload size={18} color="#364FC7" style={{ cursor: 'pointer' }} />
            </Group>
          </Box>
        </Group>
      </Stack>
    </Paper>
  );
}

export default Task


