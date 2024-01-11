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
import getUrlImageById from '../../services/img';
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
          duration: 2000,
          isClosable: true,
        })
        onAddToCart(product)
      }
      
  
  return (
    <div className="product-card" onClick={handleCardClick}>
      <Card maxW="sm">
        <CardBody>
          <Image
            src= {getUrlImageById(product.id)}
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
            { !product.sugarFree ? <Badge colorScheme="red">Sucrée</Badge> : <Badge colorScheme="green"> Sans Sucre</Badge> }
            { product.sparkling ? <Badge colorScheme="black">Gaseux</Badge> : <Badge> Sans Gaz</Badge> }
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
