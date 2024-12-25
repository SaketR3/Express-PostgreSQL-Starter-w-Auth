import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supabaseUrl = 'https://wtqypuoenxygavxfhspz.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const PORT = process.env.PORT || 3001;

app.get('/api', (_req, res) => {
  res.status(200).json({ message: 'Hello from the server!' });
});

app.get('/products', async (req, res) => {
  const { data, error } = supabase; 
  const products = await prisma.products.findMany();
  res.status(200).json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});