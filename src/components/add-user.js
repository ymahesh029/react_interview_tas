import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,MenuButton,MenuList,MenuItem,Menu,Button,
  } from '@chakra-ui/react'
  import { Grid, GridItem } from '@chakra-ui/react'
  // import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
  import { PhoneIcon, AddIcon, WarningIcon,ChevronDownIcon } from '@chakra-ui/icons'

  
function DrawerExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);

    // dispatch(addMembers({ formData, callback: () => navigate("/members") }))
  };
  
    return (
      <>
        <FormControl  onSubmit={handleSubmit}>
  {/* <FormLabel>Email address</FormLabel> */}
  {/* <Input type='email' /> */}
  {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
  <Grid templateColumns='repeat(5, 1fr)' gap={6}>

  <GridItem w='100%' h='10' bg='red.50' >
    {/* <FormLabel> User ID</FormLabel> */}
    <Input type="text" name="id" required />
  {/* <FormHelperText>We'll never share your  User ID.</FormHelperText> */}
  </GridItem>

  <GridItem w='100%' h='10' bg='red.50' >
    {/* <FormLabel>Name</FormLabel> */}
    <Input type='Name' />
  {/* <FormHelperText>We'll never share your Name.</FormHelperText>*/}
  </GridItem> 

  {/* <GridItem w='100%' h='10' bg='red.50' >
    <FormLabel>Email address</FormLabel><Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  </GridItem> */}

  <GridItem w='100%' h='10' bg='red.50' >
    {/* <FormLabel>Email address</FormLabel><Input type='email' /> */}
  {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
  </GridItem>

  <GridItem w='100%' h='10' bg='blue.50' >
    {/* <FormLabel> Role</FormLabel>
    <Input type='role' />
  <FormHelperText>We'll never share your Role.</FormHelperText> */}
      {/* <FormLabel>Role</FormLabel> */}
  {/* <FormLabel> Actions</FormLabel>  */}
  <Menu>

  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
  Role
  </MenuButton>
  <MenuList>
    <MenuItem>Administrator</MenuItem>
    <MenuItem>Editor</MenuItem>
    <MenuItem>Viewer</MenuItem>
    {/* <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
  </MenuList>
</Menu>
  </GridItem>

  <GridItem w='100%' h='10' bg='blue.50' >
    {/* <FormLabel> Actions</FormLabel>
    <Input type='Actions' />
  <FormHelperText>We'll never share your Role.</FormHelperText> */}
  <Button colorScheme='blue'   type="submit" >Submit</Button>
  </GridItem>
</Grid>
</FormControl>
      </>
    )
  }

  export default DrawerExample;