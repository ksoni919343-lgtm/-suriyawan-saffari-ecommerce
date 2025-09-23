INSERT INTO categories (id, name) VALUES
('cat-1-mobile', 'Mobile Phones'),
('cat-2-laptop', 'Laptops'),
('cat-3-audio', 'Audio'),
('cat-4-tv', 'Televisions'),
('cat-5-footwear', 'Footwear');

INSERT INTO users (id, email, blocked) VALUES
('seller-001-apple', 'apple@store.com', FALSE),
('seller-002-techworld', 'techworld@store.com', FALSE),
('seller-003-electronicshub', 'electronics@hub.com', FALSE),
('seller-004-sportswear', 'sportswear@store.com', FALSE);

INSERT INTO roles (user_id, role) VALUES
('seller-001-apple', 'seller'),
('seller-002-techworld', 'seller'),
('seller-003-electronicshub', 'seller'),
('seller-004-sportswear', 'seller');

INSERT INTO products (id, name, price, image, description, category_id, seller_id) VALUES
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'iPhone 15 Pro Max 256GB', 119999.00, '/images/iphone15-promax.jpg', 'Latest iPhone...', 'cat-1-mobile', 'seller-001-apple');

INSERT INTO auth.users (id, email) VALUES ('owner-id-xxxx', 'memberpoint89@gmail.com');
INSERT INTO users (id, email) VALUES ('owner-id-xxxx', 'memberpoint89@gmail.com');
INSERT INTO roles (user_id, role) VALUES ('owner-id-xxxx', 'owner');
