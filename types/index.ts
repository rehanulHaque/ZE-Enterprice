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
export interface CarouselProductTypes {
  products: {
    id: string;
    productImage: [
      {
        url: string;
      }
    ];
    link: string;
    title: string;
  }[];
}

export interface SingleProductTypes {
  product: {
    id: string;
    title: string;
    description?: string;
    price?: number;
    link: string;
    material?: string[];
    feature?: string | null;
    productImage: [
      {
        url: string;
      }
    ];
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
    description?: string;
    details?: {
      raw: any;
    };
    id: string;
    title: string;
    link: string;
    serviceImage: {
      url: string;
    };
  };
}

export interface CarouselServiceTypes {
  services: {
    id: string;
    serviceImage: {
      url: string;
    };
    link: string;
    title: string;
  }[];
}

export interface ProductNamesTypes {
  products: {
    id: string;
    link: string;
    title: string;
  }[];
}

export interface ServicesNamesTypes {
  services: {
    id: string;
    link: string;
    title: string;
  }[];
}


export interface ServiceType {
  title: string;
  serviceImage: {
    url: string;
  };
  link: string;
  id: string;
}

export interface ProductType {
  title: string;
  productImage: [{
    url: string;
  }];
  link: string;
  id: string;
  description?: string;
}