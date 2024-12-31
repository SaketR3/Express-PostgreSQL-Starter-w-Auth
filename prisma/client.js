import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export default db;

// import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = 'https://wtqypuoenxygavxfhspz.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);