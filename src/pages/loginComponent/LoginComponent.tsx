import './LoginComponent.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Stack, Button, Text, useToast } from '@chakra-ui/react';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    try {
      console.log(email, password)
      const response = await fetch('https://0pah.dev:8081/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'  // Include credentials for cookie handling
      });
      console.log(response)
      if (response.ok) {
        navigate('/');
      } else {
        toast({
          title: "Authentication failed.",
          description: "Failed to authenticate user.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error occurred.",
        description: "An error occurred while attempting to login.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className='home-container'>
      <Stack spacing={3}>
        <Text fontSize='2xl' textAlign="center">Login</Text>
        <Input 
          placeholder='Email' 
          size='md'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          placeholder='Password' 
          size='md'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme='blue' onClick={handleLogin}>Login</Button>
      </Stack>
    </div>
  );
}

export default LoginComponent;