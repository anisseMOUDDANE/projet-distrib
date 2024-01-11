export default function getUrlImageById(id: number) {
    let urlImage;
  
    switch (id) {
      case 0:
        urlImage = 'https://www.epidrive.fr/28-large_fashion_default/coca-cola-bouteille-1l.jpg';
        break;
      case 1:
        urlImage = 'https://halalcourses.com/634-large_default/san-pellegrino.jpg';
        break;
      case 2:
        urlImage = 'https://cdn.mcommerce.franprix.fr/product-images/3268840001008_C1N1_s08';
        break;
      case 3:
        urlImage = 'https://cdn.store-factory.com/www.noon-restaurant.fr/content/product_2564347b.jpg?v=1663841592';
        break;
      case 4:
        urlImage = 'https://www.clicmarket.fr/3515-large_default/12-bouteilles-de-coca-cola-cherry-12-x-50-cl.jpg';
        break;
      case 5:
        urlImage = 'https://halalfs.com/258-large_default/coca-cola-zero-12-x-50-cl.jpg';
        break;
      case 6:
        urlImage = 'https://central-hal.com/wp-content/uploads/2023/05/OASIS-TROPICAL.png';
        break;
      case 7:
        urlImage = 'https://cdn.monoprix.fr/cdn-cgi/image/width=580,quality=80,format=auto,metadata=none/assets/images/grocery/1035498/580x580.jpg';
        break;
      case 8:
        urlImage = 'https://media.auchan.fr/A0220171215000247083PRIMARY_2048x2048/B2CD/';
        break;
      case 9:
        urlImage = 'https://www.sucre-sale58.fr/upload/modules/mosaic/produit/fr_pim_857395001002_01.webp';
        break;
      case 10:
        urlImage = 'https://m.media-amazon.com/images/I/510Vs8e0fGS.jpg';
        break;
      case 11:
        urlImage = 'https://media.auchan.fr/A0220141023000268230PRIMARY_1200x1200/B2CD/';
        break;
      case 12:
        urlImage = 'https://barcodes.fr/cdn/shop/products/Eau_Volvic_Exotic_50cl_512x.jpg?v=1571709238';
        break;
      case 13:
        urlImage = 'https://media.carrefour.fr/medias/490ece8f5d013418859f4f22b5d51099/p_540x540/05449000286192-a1n1-s03.jpg';
        break;
      default:
        urlImage = 'chemin/vers/image-par-defaut.jpg';
    }
  
    return urlImage;
  }