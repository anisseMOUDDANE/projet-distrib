import {
  Box,
  Image,
  Text,
  Badge,
  useColorModeValue,
  Stack,
  Tag,
  Flex,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import getUrlImageById from "../../services/img";
function ProductComponent() {
  const location = useLocation(); // Get the current location
  const product = location.state?.product; // Get the product if it exists

  if (!product)
    // Display a message or redirect if the product details are not available
    return <div>Product not found</div>;

  const { id, name, price, imageUrl, sugarFree, sparkling } = product;

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Flex justifyContent="center" alignContent="center" padding={10}>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        bg={bgColor}
        borderRadius="lg"
        position="relative"
        width={800}
        height={600}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
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
        <Image
          borderRadius="md"
          src={getUrlImageById(id)}
          alt={name}
          objectFit="cover"
          width={300}
        />
        <Text
          mt={4}
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="short"
          textAlign="center"
        >
          {name}
        </Text>
        <Text mt={2} color={textColor} textAlign="center">
          ${price}
        </Text>
        <Stack direction="row" mt={2}>
          {!product.sugarFree ? (
            <Badge colorScheme="red">Sucrée</Badge>
          ) : (
            <Badge colorScheme="green"> Sans Sucre</Badge>
          )}
          {product.sparkling ? (
            <Badge colorScheme="black">Gazeux</Badge>
          ) : (
            <Badge> Sans Gaz</Badge>
          )}
        </Stack>
      </Box>
    </Flex>
  );
}

export default ProductComponent;
