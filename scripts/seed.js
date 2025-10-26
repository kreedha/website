// Sample data seeding script
// Run this to populate your database with sample products
// Usage: node scripts/seed.js

const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  originalPrice: Number,
  category: String,
  images: [String],
  stock: Number,
  weight: String,
  featured: Boolean,
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const sampleProducts = [
  {
    name: 'Premium Roasted Makhana',
    description: 'Crispy and healthy fox nuts, roasted to perfection. Rich in protein and low in calories. Perfect for guilt-free snacking anytime, anywhere.',
    price: 299,
    originalPrice: 399,
    category: 'Plain',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800',
      'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800'
    ],
    stock: 100,
    weight: '250g',
    featured: true,
  },
  {
    name: 'Peri Peri Makhana',
    description: 'Spicy and tangy peri peri flavored makhana. A perfect blend of spices that will tantalize your taste buds. Great for parties and movie nights.',
    price: 349,
    originalPrice: 449,
    category: 'Flavored',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'
    ],
    stock: 75,
    weight: '250g',
    featured: true,
  },
  {
    name: 'Cheese & Herbs Makhana',
    description: 'Delicious cheese and herbs flavored makhana. Creamy cheese combined with aromatic herbs creates an irresistible snack.',
    price: 349,
    originalPrice: 449,
    category: 'Flavored',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'
    ],
    stock: 80,
    weight: '250g',
    featured: true,
  },
  {
    name: 'Premium Jumbo Makhana',
    description: 'Extra large premium quality makhana. Handpicked jumbo fox nuts that are crunchy and nutritious. Perfect for health-conscious individuals.',
    price: 449,
    originalPrice: 599,
    category: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'
    ],
    stock: 50,
    weight: '500g',
    featured: true,
  },
  {
    name: 'Salted Caramel Makhana',
    description: 'Sweet and salty caramel coated makhana. A unique fusion of flavors that creates a delightful snacking experience.',
    price: 399,
    originalPrice: 499,
    category: 'Flavored',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'
    ],
    stock: 60,
    weight: '250g',
    featured: false,
  },
  {
    name: 'Tandoori Masala Makhana',
    description: 'Authentic tandoori masala flavored makhana. Traditional Indian spices roasted to perfection for an authentic taste.',
    price: 329,
    originalPrice: 429,
    category: 'Flavored',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'
    ],
    stock: 90,
    weight: '250g',
    featured: false,
  },
  {
    name: 'Makhana Gift Hamper',
    description: 'Premium gift box containing 4 varieties of makhana. Perfect for festivals, celebrations, or as a healthy gift option.',
    price: 1299,
    originalPrice: 1599,
    category: 'Gift Pack',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'
    ],
    stock: 30,
    weight: '1kg (4x250g)',
    featured: false,
  },
  {
    name: 'Chocolate Makhana',
    description: 'Decadent chocolate coated makhana. Rich dark chocolate meets healthy fox nuts for a guilt-free dessert snack.',
    price: 399,
    originalPrice: 499,
    category: 'Flavored',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'
    ],
    stock: 70,
    weight: '250g',
    featured: false,
  },
];

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected successfully!');

    console.log('Clearing existing products...');
    await Product.deleteMany({});

    console.log('Inserting sample products...');
    await Product.insertMany(sampleProducts);

    console.log(`✅ Successfully added ${sampleProducts.length} products!`);
    console.log('\nYou can now:');
    console.log('1. Visit http://localhost:3000 to see products');
    console.log('2. Login to admin panel at http://localhost:3000/admin/login');
    console.log('3. Manage products and orders\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
