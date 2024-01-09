import "./Distrib.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../interfaces/Product";
import {  useDisclosure } from "@chakra-ui/react";
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

export default function Distrib() {
  const products: Product[] = [
    {
      id: 0,
      name: "Coca Cola Bouteille",
      price: 1.5,
      imageUrl: "url_image_coca_cola",
      sugarfree: false,
      gazeous: true,
    },
    {
      id: 1,
      name: "S.Pellegrino Bouteille",
      price: 1.2,
      imageUrl: "url_image_pellegrino",
      sugarfree: true,
      gazeous: true,
    },
    {
      id: 2,
      name: "Cristalline Bouteille",
      price: 1,
      imageUrl: "url_image_cristalline",
      sugarfree: true,
      gazeous: false,
    },
    {
      id: 3,
      name: "Volvic Zest Citron Bouteille",
      price: 1.5,
      imageUrl: "url_image_zest_citron",
      sugarfree: false,
      gazeous: true,
    },
    {
      id: 4,
      name: "Coca Cola Cherry Bouteille",
      price: 1.5,
      imageUrl: "url_image_coca_cherry",
      sugarfree: false,
      gazeous: true,
    },
    {
      id: 5,
      name: "Coca Cola Zero Bouteille",
      price: 1.5,
      imageUrl: "url_image_coca_zero",
      sugarfree: true,
      gazeous: true,
    },
    {
      id: 6,
      name: "Oasis Tropical Bouteille",
      price: 1.5,
      imageUrl: "url_image_oasis_tropical",
      sugarfree: false,
      gazeous: false,
    },
    {
      id: 7,
      name: "Powerade Bleue Bouteille",
      price: 1.5,
      imageUrl: "url_image_powerade_bleue",
      sugarfree: false,
      gazeous: true,
    },
    {
      id: 8,
      name: "Fuze Tea Bouteille",
      price: 1.5,
      imageUrl: "url_image_fuze_tea",
      sugarfree: false,
      gazeous: false,
    },
    {
      id: 9,
      name: "Fuze Tea Menthe Bouteille",
      price: 1.5,
      imageUrl: "url_image_fuze_tea_menthe",
      sugarfree: false,
      gazeous: false,
    },
    {
      id: 10,
      name: "Orangina Bouteille",
      price: 1.5,
      imageUrl: "url_image_orangina",
      sugarfree: false,
      gazeous: true,
    },
    {
      id: 11,
      name: "Volvic Juice Fraise Bouteille",
      price: 1.5,
      imageUrl: "url_image_volvic_juice_fraise",
      sugarfree: false,
      gazeous: false,
    },
    {
      id: 12,
      name: "Volvic Juice Exotique",
      price: 1.5,
      imageUrl: "url_image_volvic_juice_exotique",
      sugarfree: false,
      gazeous: false,
    },
    {
      id: 83,
      name: "Sprite Bouteille",
      price: 1.5,
      imageUrl: "url_image_sprite",
      sugarfree: false,
      gazeous: true,
    },
  ];
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    []
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeModalButton = useRef(null);

  const [cartTotal, setCartTotal] = useState(0)
  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    setCartTotal(cartTotal + product.price)
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === existingItem.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number, productPrice: number) => {
    setCartTotal(cartTotal - productPrice)
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    if (cart.length === 0 && closeModalButton.current != null) {
      //closeModalButton.current.click()
    }
  }, [cart]);

  return (
    <div>
      
      <div className="custom-header">
      <h1>Produit disponibles</h1>
      <Button leftIcon={ <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />} onClick={onOpen} colorScheme='blue' variant='solid'  size='lg'>
    Panier
  </Button>
      </div>
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
                        onClick={() => removeFromCart(item.product.id, item.product.price)}
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
            { cart.length > 0 ? <span className="total">TOTAL : {cartTotal.toFixed(2)}€</span> : null}
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            { cart.length > 0 ? (
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Validé ! 
            </Button>) : ""
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
