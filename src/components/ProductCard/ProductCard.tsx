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
  useToast,
} from "@chakra-ui/react";
import getUrlImageById from "../../services/img";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const toast = useToast();
  const navigate = useNavigate(); // Hook de navigation

  const handleCardClick = () => {
    navigate("/product", { state: { product } }); // Redirection vers la page product
  };

  const handleClickAddToCart = () => {
    toast({
      title: "Article Ajouté",
      description:
        "L'article " + product.name + " à bien été ajouté au Panier ",
      status: "success",
      duration: 2000,
      isClosable: true,
    }); // Affichage d'un toast
    onAddToCart(product); // Appel de la fonction onAddToCart
  };

  return (
    <div className="product-card">
      <Card
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <CardBody>
          <Image
            onClick={handleCardClick}
            src={getUrlImageById(product.id)}
            alt="Image bouteille"
            minH={350}
            maxH={350}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text color="blue.600" fontSize="2xl">
              {product.price}€
            </Text>
          </Stack>
          <Stack direction="row">
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
        </CardBody>
        <Divider />
        <CardFooter style={{ marginTop: "auto" }}>
          <Button colorScheme="gray" onClick={handleClickAddToCart}>
            Ajouter au panier
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
