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
  }
}
