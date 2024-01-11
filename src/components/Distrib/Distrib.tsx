import "./Distrib.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../interfaces/Product";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import axios from "axios"; // Importez Axios
import { Spinner } from "@chakra-ui/react";

export default function Distrib() {
  /*const products: Product[] = [
    {
      id: 0,
      name: "Coca Cola Bouteille",
      price: 1.5,
      imageUrl: "url_image_coca_cola",
      sugarFree: false,
      sparkling: true,
    },
    {
      id: 1,
      name: "S.Pellegrino Bouteille",
      price: 1.2,
      imageUrl: "url_image_pellegrino",
      sugarFree: true,
      sparkling: true,
    },
    {
      id: 2,
      name: "Cristalline Bouteille",
      price: 1,
      imageUrl: "url_image_cristalline",
      sugarFree: true,
      sparkling: false,
    },
    {
      id: 3,
      name: "Volvic Zest Citron Bouteille",
      price: 1.5,
      imageUrl: "url_image_zest_citron",
      sugarFree: false,
      sparkling: true,
    },
    {
      id: 4,
      name: "Coca Cola Cherry Bouteille",
      price: 1.5,
      imageUrl: "url_image_coca_cherry",
      sugarFree: false,
      sparkling: true,
    },
    {
      id: 5,
      name: "Coca Cola Zero Bouteille",
      price: 1.5,
      imageUrl: "url_image_coca_zero",
      sugarFree: true,
      sparkling: true,
    },
    {
      id: 6,
      name: "Oasis Tropical Bouteille",
      price: 1.5,
      imageUrl: "url_image_oasis_tropical",
      sugarFree: false,
      sparkling: false,
    },
    {
      id: 7,
      name: "Powerade Bleue Bouteille",
      price: 1.5,
      imageUrl: "url_image_powerade_bleue",
      sugarFree: false,
      sparkling: true,
    },
    {
      id: 8,
      name: "Fuze Tea Bouteille",
      price: 1.5,
      imageUrl: "url_image_fuze_tea",
      sugarFree: false,
      sparkling: false,
    },
    {
      id: 9,
      name: "Fuze Tea Menthe Bouteille",
      price: 1.5,
      imageUrl: "url_image_fuze_tea_menthe",
      sugarFree: false,
      sparkling: false,
    },
    {
      id: 10,
      name: "Orangina Bouteille",
      price: 1.5,
      imageUrl: "url_image_orangina",
      sugarFree: false,
      sparkling: true,
    },
    {
      id: 11,
      name: "Volvic Juice Fraise Bouteille",
      price: 1.5,
      imageUrl: "url_image_volvic_juice_fraise",
      sugarFree: false,
      sparkling: false,
    },
    {
      id: 12,
      name: "Volvic Juice Exotique",
      price: 1.5,
      imageUrl: "url_image_volvic_juice_exotique",
      sugarFree: false,
      sparkling: false,
    },
    {
      id: 83,
      name: "Sprite Bouteille",
      price: 1.5,
      imageUrl: "url_image_sprite",
      sugarFree: false,
      sparkling: true,
    },
  ];*/

  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    []
  );

  const [products, setProducts] = useState<Product[]>([]);

  const [cartItemCount, setCartItemCount] = useState(0.0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeModalButton = useRef(null); // Créez une référence pour le bouton de fermeture de la modale

  const [cartTotal, setCartTotal] = useState(0);
  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id); // Vérifiez si le produit existe déjà dans le panier

    setCartTotal(cartTotal + product.price); // Mettez à jour le total du panier
    if (existingItem) {
      const updatedCart = cart.map(
        (
          item // Mettez à jour la quantité si le produit existe déjà dans le panier
        ) =>
          item.product.id === existingItem.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
      );
      setCart(updatedCart); // Mettez à jour le panier
    } else {
      setCart([...cart, { product, quantity: 1 }]); // Ajoutez le produit au panier
    }
  };

  const removeFromCart = (productId: number, productPrice: number) => {
    setCartTotal(cartTotal - productPrice);
    const updatedCart = cart.filter((item) => item.product.id !== productId); // Supprimez le produit du panier
    setCart(updatedCart);
  };

  const validateCart = () => {
    // Mettez à jour le nombre d'articles dans le panier lors de la validation
    const totalCount = cart.reduce(
      (total, item) => total + item.product.price, // Ajoutez le prix de chaque produit au total
      0
    );
    setCartItemCount(totalCount.toLocaleString()); // Mettez à jour le nombre d'articles dans le panierm convertissez le nombre en chaîne de caractères

    cart.forEach((element) => {
      const objToSend = {
        userId: 0,
        productId: element.product.id,
        number: 1,
      };
      const apiUrl = "https://0pah.dev:8081/api/products/stolen"; // mettre api angel

      axios
        .post(apiUrl, objToSend)
        .then((response) => {
          console.log("Réponse de l'API:", response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi à l'API:", error);
        });
    });
  };

  useEffect(() => {
    // Effectuer l'appel API pour récupérer les produits
    axios
      .get("https://0pah.dev:8081/api/products") // mettre api angel
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  useEffect(() => {
    if (cart.length === 0 && closeModalButton.current != null) {
      //closeModalButton.current.click()
    }
  }, [cart]);

  return (
    <div>
      <div className="custom-header">
        <h1>Produit disponibles</h1>
        <div className="cart-counter">{cartItemCount} €</div>
        <Button
          leftIcon={
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          }
          onClick={onOpen}
          colorScheme="blue"
          variant="solid"
          size="lg"
        >
          Panier
        </Button>
      </div>
      {products.length === 0 ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : null}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            total={cartTotal}
            setTotal={setCartTotal}
          />
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mon Panier</ModalHeader>
          <ModalCloseButton ref={closeModalButton} />
          <ModalBody>
            <div>
              <h2>Panier</h2>
              {cart.length > 0 ? (
                <div className="cart">
                  {cart.map((item) => (
                    <div key={item.product.id} className="cart-item">
                      <p>{item.product.name}</p>
                      <p>Prix: {item.product.price} €</p>
                      <p className="quantity">
                        {item.quantity > 1 ? `x${item.quantity}` : ""}
                      </p>
                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeFromCart(item.product.id, item.product.price)
                        }
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Votre panier est vide.</p>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            {cart.length > 0 ? (
              <span className="total">TOTAL : {cartTotal.toFixed(2)}€</span>
            ) : null}
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            {cart.length > 0 ? (
              <Button
                colorScheme="green"
                mr={3}
                onClick={() => {
                  onClose();
                  validateCart();
                }}
              >
                Validé !
              </Button>
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
