import {
    Box,
    Image,
    Text,
    Badge,
    useColorModeValue,
    Stack,
    Tag
  } from '@chakra-ui/react';
  
  function ProductComponent(
          { id, name, price, imageUrl, sugarfree, gazeous } : 
          { id: string, name: string, price: number, imageUrl: string, sugarfree?: boolean, gazeous?: boolean}
      ) {
      const bgColor = useColorModeValue('gray.100', 'gray.700');
      const textColor = useColorModeValue('gray.800', 'white');
  
      return (
          <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.600')}
              bg={bgColor}
              borderRadius="lg"
              position="relative"
          >
              <Tag
                  size="sm"
                  colorScheme="purple"
                  position="absolute"
                  top={2}
                  right={2}
              >
                  ID: {id}
              </Tag>
              <Image borderRadius="md" src={imageUrl} alt={name} objectFit="cover" />
              <Text mt={4} fontSize="xl" fontWeight="semibold" lineHeight="short">
                  {name}
              </Text>
              <Text mt={2} color={textColor}>${price}</Text>
              <Stack direction="row" mt={2}>
                {sugarfree && <Badge colorScheme="green">Sugar Free</Badge>}
                {gazeous && <Badge colorScheme="blue">Gazeous</Badge>}
              </Stack>
          </Box>
      );
  }
  
  export default ProductComponent;
  