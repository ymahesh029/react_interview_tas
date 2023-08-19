// import logo from './logo.svg';
// import './App.css';

// // 1. Import the extendTheme function
// import { extendTheme, ChakraProvider } from '@chakra-ui/react'
// import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

// // 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//   <SkipNavLink>Skip to content</SkipNavLink>


//     {/* <App /> */}
//   </ChakraProvider>
//   );
// }

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import { Switch } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

import { Box } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
function Component() {
  return (
    <div >
{/* <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box> */}

<TableContainer m={4} p={20}>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th> User ID</Th>
        <Th>Name</Th>
        <Th isNumeric>Email</Th>
        <Th> Role</Th>
    <Th isNumeric>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>mahesh yadav</Td>
        <Td isNumeric>ymahesh29@gmail.com</Td>
        <Td>Administrator</Td>
        <Td><Button colorScheme='blue'>edit</Button>
        |
        <Button colorScheme='red'>Delete</Button>
        </Td>
        {/* <Td isNumeric><Button colorScheme='red'>Delete</Button></Td> */}

      </Tr>
      <Tr>
      <Td>1</Td>
        <Td>mahesh yadav</Td>
        <Td isNumeric>ymahesh29@gmail.com</Td>
        <Td>Administrator</Td>
        <Td><Button colorScheme='blue'>edit</Button>
        |
        <Button colorScheme='red'>Delete</Button>
        </Td>
      </Tr>
      <Tr>
      <Td>1</Td>
        <Td>mahesh yadav</Td>
        <Td isNumeric>ymahesh29@gmail.com</Td>
        <Td>Administrator</Td>
        <Td><Button colorScheme='blue'>edit</Button>
        |
        <Button colorScheme='red'>Delete</Button>
        </Td>
      </Tr>
      <Tr>
      <Td>1</Td>
        <Td>mahesh yadav</Td>
        <Td isNumeric>ymahesh29@gmail.com</Td>
        <Td>Administrator</Td>
        <Td><Button colorScheme='blue'>edit</Button>
        |
        <Button colorScheme='red'>Delete</Button>
        </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
   

    
  )
}
export default Component;
