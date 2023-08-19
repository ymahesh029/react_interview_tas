// import logo from './logo.svg';
// import './App.css';

// // 1. Import the extendTheme function
// import { extendTheme, ChakraProvider } from '@chakra-ui/react'

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
//     <div className="App">
//         <SkipNavLink>Skip to content</SkipNavLink>

//     </div>
//   );
// }

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider,Text,Grid, GridItem , Button, ButtonGroup } from '@chakra-ui/react'
import Component from './components/component';
// import { } from '@chakra-ui/react'
// import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
// import { Text } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import DrawerExample from './components/add-user';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem   >item</GridItem>
  <GridItem >item</GridItem>
  <GridItem >item</GridItem>
  <GridItem >item</GridItem>
  <GridItem >item</GridItem>
</Grid>
  </GridItem>
  <GridItem pl='2' w='100%' bg='pink.100' h='1000' area={'nav'}>
    Nav
    <Text fontSize="md" > add user </Text>
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
    {/* <Button  colorScheme='teal' size='sm'>add user</Button> */}
    <DrawerExample />
    
    <Component/>
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
      
    </ChakraProvider>
  )
}
export default App;
