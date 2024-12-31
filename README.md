A minimal boilerplate/starter code project to build Express-PostgreSQL-Supabase-Prisma projects with! 

<br/>

If instead of cloning this you want to set up a project by yourself (for example to use TS instead of JS), here's what I did:
- To set up Express, I followed the Express part of this tutorial (feel free to follow the rest if you want a full-stack project!): https://medium.com/@ctrlaltmonique/setting-up-an-express-typescript-server-with-vue-vite-9d415a51facc
- To set up PostgreSQL & Supabase, I followed this tutorial: https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910
- To set up Prisma, I followed these steps:

<br/>

Prisma Set Up:
- Install Prisma with the following:
```
npm install @prisma/client
npx prisma init
```
- In your .env file, add DATABASE_URL; I recommend using the "Session pooler" connection string from Supabase, the other connection strings didn't work 
- Run Prisma introspection to make the schema.prisma file have the same schema as the table in Supabase:
```
npx prisma db pull
```
- Generate the Prisma Client:
```
npx prisma generate
```
- Change main.js to look like this:
```
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
  const { data, error } = await supabase
  const products = await prisma.product.findMany();
  res.status(200).json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
