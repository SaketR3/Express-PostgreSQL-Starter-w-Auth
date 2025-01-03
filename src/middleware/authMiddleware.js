import supabase from '../../config/supabase.js';

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const { data, error } = await supabase.auth.getUser(token);
  if (error) {
    return res.status(401).json({ message: 'Token is not valid' });
  }

  req.user = { userId: data.user.id }; 
  next();
};

export default authMiddleware;