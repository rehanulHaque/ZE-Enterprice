export interface ProductTypes {
  products: {
    id: string;
    title: string;
    description: string;
    price: number;
    link: string;
    material: string[];
    feature: string | null;
    productImage: [
      {
        url: string;
      }
    ];
  }[];
}

export interface SingleProductTypes {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    link: string;
    material: string[];
    feature: string | null;
    productImage: [
      {
        url: string;
      }
    ];
  };
}

export interface CarouselTypes {
  products: {
    id: string;
    productImage: [
      {
        url: string;
      }
    ];
    link: string;
  }[];
}

export interface ProductsNamesTypes {
  products: {
    id: string;
    title: string;
    link: string;
  }[];
}

export interface ProductType {
  products: {
    id: string;
    title: string;
    description: string;
    price: number;
    link: string;
    productImage: {
      url: string;
    }[];
  };
}
