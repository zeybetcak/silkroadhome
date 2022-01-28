import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Zeynep',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: true,
    },
    {
      name: 'Nur',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
    }
  ],
  products: [
    {
      _id: '1',
      name: '100% Linen Turkish Towel',
      category: 'Towels',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'SilkRoadHome',
      rating: 4.7,
      numReviews: 32,
      description: 'high quality product',
    },
    {
      _id: '2',
      name: '100% Linen Turkish Hand Towel',
      category: 'Towels',
      image: '/images/p2.jpg',
      price: 90,
      countInStock: 20,
      brand: 'SilkRoadHome',
      rating: 4.7,
      numReviews: 22,
      description: 'high quality product',
    },
    {
      _id: '3',
      name: '100% Linen Turkish Pajama Set',
      category: 'Clothing',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'SilkRoadHome',
      rating: 4.9,
      numReviews: 43,
      description: 'high quality product',
    },
    {
      _id: '4',
      name: '100% Cotton Turkish Bathrobe',
      category: 'Clothing',
      image: '/images/p4.jpg',
      price: 190,
      countInStock: 25,
      brand: 'SilkRoadHome',
      rating: 5.0,
      numReviews: 54,
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'Turkish Takunya Bath Sandals',
      category: 'Shoes',
      image: '/images/p5.jpg',
      price: 75,
      countInStock: 7,
      brand: 'SilkRoadHome',
      rating: 4.8,
      numReviews: 7,
      description: 'high quality product',
    },
  ],
};

export default data;