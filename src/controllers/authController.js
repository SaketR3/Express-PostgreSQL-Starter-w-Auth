import supabase from '../../config/supabase.js';

const authController = {
  register: async (req, res, next) => {
    const { email, password } = req.body;
    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(201).json({ message: 'User registered successfully', user });
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.json({ message: 'Login successful', token: data.session.access_token });
  },

  logout: async (req, res, next) => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.json({ message: 'Logout successful' });
  }
};

export default authController; 