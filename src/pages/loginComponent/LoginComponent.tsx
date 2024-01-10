import './LoginComponent.scss'
import { Input } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function LoginComponent() {
  return (
    <div className='home-container'>

      <Stack spacing={3}>
        <Text fontSize='2xl'>Login</Text>
        <Input placeholder='Username' size='md' />
        <Input placeholder='Password' size='md' />
        <Button colorScheme='blue'>Button</Button>
      </Stack>
    </div>
  )
}

export default LoginComponent