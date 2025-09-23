ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own data" ON auth.users FOR SELECT USING (auth.uid() = id);
