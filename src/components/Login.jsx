// import React from "react";
// import '@mantine/core/styles.layer.css';
// import {
//   TextInput,
//   PasswordInput,
//   Button,
//   Image,
//   Text,
//   Flex,
//   Box,
//   Center,
//   Stack,
//   Anchor,
//   Select,
//   Container,
// } from "@mantine/core";
// import { IconUser } from "@tabler/icons-react";
// import logo from './Assets/proven logo.jpg'; // Adjust this path according to your project structure
// import { useNavigate } from "react-router-dom";
// function LoginPage() {
// let navigate=useNavigate();
// let loginBtn=()=>{
//     navigate('/LabwareCreate')
// }


//   const gradient =
//     "linear-gradient(0deg, rgba(12,12,69,1) 0%, rgba(15,15,93,1) 23%, rgba(90,90,215,1) 100%)";

//   return (
//     <Container size="xxl" style={{ height: '100vh',width:"100%", padding: 0 }}>
//       <Flex style={{ height: '100vh' ,width:"100%"}}>
//         {/* Left Side with Logo and Footer Text */}
//         <Flex w={"60%"} h={"100vh"} direction={"column"} style={{ padding: 0 }}>
//           <Box style={{ padding: '1rem' }}>
//             <Image alt="Header Logo" w={"7rem"} />
//           </Box>
//           <Center flex={1}>
//             <Image src={logo} alt="Company Logo" w={"50%"} />
//           </Center>
//           <Text ta={"center"} p={16}>
//             Copyright © 2024 Proven Tech. All rights reserved. Privacy Policy
//           </Text>
//         </Flex>

//         {/* Right Side with Form */}
//         <Stack
//           w={"40%"}
//           h={"100vh"}
//           bg={gradient}
//           justify={"center"}
//           align={"stretch"}
//           gap={24}
//           p={48}
//         >
//           <TextInput
//             placeholder="Enter Username"
//             size="lg"
//             rightSection={<IconUser />}
//           />
//           <PasswordInput placeholder="Enter Password" size="lg" />
//           <Flex justify={"space-between"} gap={24}>
//             <Box w={"50%"}>
//               <Select placeholder="Modules" data={['Calibre', 'Labware', 'Labvantage']} />
//             </Box>
//             <Button variant="filled" color="green" size="lg" w={"50%"} onClick={loginBtn}>
//               Login
//             </Button>
//           </Flex>
//           <Flex justify={"space-around"}>
//             <Anchor c={"white"}>Forgot Username?</Anchor>
//             <Anchor c={"white"}>Forgot Password?</Anchor>
//           </Flex>
//         </Stack>
//       </Flex>
//     </Container>
//   );
// }

// export default LoginPage;
import React from "react";
import '@mantine/core/styles.layer.css';
import {
  TextInput,
  PasswordInput,
  Button,
  Image,
  Text,
  Flex,
  Box,
  Center,
  Stack,
  Anchor,
  Select,
  Container,
} from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import logo from './Assets/proven logo.jpg'; // Existing logo
import { useNavigate } from "react-router-dom";
import Headerlogo from './Assets/header (2).png'
function LoginPage() {
  let navigate = useNavigate();
  let loginBtn = () => {
    navigate('/LabwareCreate');
  }

  const gradient =
    "linear-gradient(0deg, rgba(12,12,69,1) 0%, rgba(15,15,93,1) 23%, rgba(90,90,215,1) 100%)";

  return (
    <Container size="xxl" style={{ height: '100vh', width: "100%", padding: 0 }}>
      <Flex style={{ height: '100vh', width: "100%" }}>
        {/* Left Side with Header Logo and Footer Text */}
        <Flex w={"60%"} h={"100vh"} direction={"column"} style={{ padding: 0 }}>
          <Box style={{ padding: '1rem' }}>
            {/* Header logo */}<Image src={Headerlogo} alt="Company Logo" w={"50%"} />
          </Box>
          <Center flex={1}>
            <Image src={logo} alt="Company Logo" w={"50%"} />
          </Center>
          <Text ta={"center"} p={16}>
            Copyright © 2024 Proven Tech. All rights reserved. Privacy Policy
          </Text>
        </Flex>

        {/* Right Side with Form */}
        <Stack
          w={"40%"}
          h={"100vh"}
          bg={gradient}
          justify={"center"}
          align={"stretch"}
          gap={24}
          p={48}
        >
          <TextInput
            placeholder="Enter Username"
            size="lg"
            rightSection={<IconUser />}
          />
          <PasswordInput placeholder="Enter Password" size="lg" />
          <Flex justify={"space-between"} gap={24}>
            <Box w={"50%"}>
              <Select placeholder="Modules" data={['Calibre', 'Labware', 'Labvantage']} />
            </Box>
            <Button variant="filled" color="green" size="lg" w={"50%"} onClick={loginBtn}>
              Login
            </Button>
          </Flex>
          <Flex justify={"space-around"}>
            <Anchor c={"white"}>Forgot Username?</Anchor>
            <Anchor c={"white"}>Forgot Password?</Anchor>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
}

export default LoginPage;
