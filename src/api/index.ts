import { Product } from '../index.types';

export const fetchProductsData = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`http://localhost:3100/images`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export const sendLike = async (id: number): Promise<void> => {
  try {
    await fetch(`http://localhost:3100/images/${id}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
