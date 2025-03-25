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

export interface ServicesTypes {
  services: {
    description: string;
    details: {
      raw: any;
    };
    id: string;
    title: string;
    link: string;
    serviceImage: {
      url: string;
    };
  }[];
}
export interface ServicesSingleTypes {
  services: {
    description: string;
    details: {
      raw: any;
    };
    id: string;
    title: string;
    link: string;
    serviceImage: {
      url: string;
    };
  }
}
