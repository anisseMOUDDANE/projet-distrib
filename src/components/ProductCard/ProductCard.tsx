import React from "react";
import { ProductCardProps } from "../../interfaces/ProductCard";
import "./ProductCard.scss";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Badge,
  useToast
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const toast = useToast()
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/product', { state: { product } });
  };

  const handleClickAddToCart = () => {
    toast({
          title: 'Article Ajouté',
          description: "L'article "+ product.name + " à bien été ajouté au Panier ",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        onAddToCart(product)
      }
      
  
  return (
    <div className="product-card" onClick={handleCardClick}>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text color="blue.600" fontSize="2xl">
              {product.price}€
            </Text>
          </Stack>
          <Stack direction="row">
            { !product.sugarfree ? <Badge colorScheme="red">Sucrée</Badge> : <Badge colorScheme="green"> Sans Sucre</Badge> }
            { product.gazeous ? <Badge colorScheme="black">Gaseux</Badge> : <Badge> Sans Gaz</Badge> }
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button colorScheme="gray" onClick={handleClickAddToCart} >
            Ajouter au panier
          </Button>
        </CardFooter>
      </Card>

      
    </div>
  );
};

export default ProductCard;
