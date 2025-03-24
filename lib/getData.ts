/* eslint-disable  @typescript-eslint/no-explicit-any */
import { request } from 'graphql-request';

export const getProducts = async (page = 1, itemsPerPage = 12) => {
  try {
    const skip = (page - 1) * itemsPerPage;
    const data = await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query getProducts($first: Int!, $skip: Int!) {
          products(first: $first, skip: $skip) {
            id
            title
            price
            link
            description
            productImage {
              url
            }
          }
          productsConnection {
            aggregate {
              count
            }
          }
        }
      `,
      {
        first: itemsPerPage,
        skip: skip
      }
    ) as any
    
    return {
      products: data.products,
      totalCount: data.productsConnection.aggregate.count
    };
  } catch (error: any) {
    console.log(error.message);
    return { products: [], totalCount: 0 };
  }
}