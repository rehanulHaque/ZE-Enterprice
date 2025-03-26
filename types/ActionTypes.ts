export interface EnquiryData {
    name: string;
    email: string;
    productId: string;
    phone: string;
    location: string;
    message: string;
}

export interface ProductPageEnquiryTypes {
    productId: string;
    name: string;
    email: string;
    phone: string;
    quantity: number;
    price: number;
    requirementDetails: string;
}

export interface ProductQuickEnquiryType {
    productId: string;
    email: string;
}

export interface ServiceQuickEnquiryType {
    serviceId: string;
    email: string;
}

export interface ServicePageEnquiryTypes {
    name: string;
    email: string;
    serviceId: string;
    details: string;
    phone: string;
}