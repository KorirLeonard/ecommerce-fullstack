# 🛍️ Full Stack E-Commerce Management System

A complete full-stack e-commerce platform for managing products, browsing items, and processing shopping carts with a professional admin dashboard.

---

## ✨ Features

### 👥 Customer Features
- ✅ Browse all products with descriptions
- ✅ Search and filter products
- ✅ Add products to shopping cart
- ✅ Remove items from cart
- ✅ View cart total
- ✅ Responsive design for all devices

### 🛠️ Admin Features
- ✅ Add new products
- ✅ Update existing products
- ✅ Delete products
- ✅ View all products
- ✅ Manage inventory
- ✅ Admin dashboard

### 🔧 Technical Features
- ✅ RESTful API endpoints
- ✅ SQL Server database integration
- ✅ Form validation
- ✅ Error handling
- ✅ Professional UI/UX

---

## 🎖️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

### Frontend
- HTML5 for structure
- CSS3 for styling & responsive design
- JavaScript (Vanilla) for interactivity
- Modern, clean UI

### Backend
- Node.js runtime environment
- Express.js web framework
- RESTful API architecture
- Error handling & validation

### Database
- Microsoft SQL Server
- Relational data model
- Secure connection pooling
- Transaction support

---

## 📂 Project Structure

```
ecommerce-fullstack/
├── frontend/
│   ├── index.html          # Main page
│   ├── admin.html          # Admin dashboard
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── admin.css       # Admin styles
│   ├── js/
│   │   ├── app.js          # Main app logic
│   │   └── admin.js        # Admin logic
│   └── images/             # Product images
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js # DB configuration
│   │   ├── routes/
│   │   │   ├── products.js # Product routes
│   │   │   └── cart.js     # Cart routes
│   │   ├── controllers/
│   │   │   ├── productController.js
│   │   │   └── cartController.js
│   │   ├── middleware/
│   │   │   └── validation.js
│   │   └── server.js       # Entry point
│   ├── .env.example        # Environment template
│   ├── package.json        # Dependencies
│   └── README.md           # Backend docs
├── .gitignore
└── README.md               # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Microsoft SQL Server (local or cloud)
- Git

### Installation

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KorirLeonard/ecommerce-fullstack.git
cd ecommerce-fullstack
```

#### 2️⃣ Set Up Backend

```bash
cd backend
npm install
```

#### 3️⃣ Configure Environment Variables

Create a `.env` file in the `backend` folder:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database Configuration
DB_USER=your_username
DB_PASSWORD=your_password
DB_SERVER=your_server_name
DB_DATABASE=ecommerce1
DB_PORT=1433

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

**Get your SQL Server credentials:**
- `DB_USER`: Your SQL Server login username
- `DB_PASSWORD`: Your SQL Server login password
- `DB_SERVER`: Your server name (e.g., "LAPTOP-XXXXX" or IP address)

#### 4️⃣ Set Up Database

Run the database setup script (create tables, etc.):

```bash
npm run setup-db
```

Or manually execute the SQL script in your SQL Server:

```sql
CREATE DATABASE ecommerce1;
USE ecommerce1;

CREATE TABLE products (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    price DECIMAL(10, 2) NOT NULL,
    quantity INT DEFAULT 0,
    image NVARCHAR(255),
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE cart_items (
    id INT PRIMARY KEY IDENTITY(1,1),
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    added_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### 5️⃣ Start Backend Server

```bash
npm start
```

The backend will run on `http://localhost:4000`

#### 6️⃣ Open Frontend

Open `frontend/index.html` in your browser or use a live server:

**Option A: Direct File**
- Simply open `frontend/index.html` in your browser

**Option B: Live Server (VS Code)**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"
- Runs on `http://localhost:5500` (or similar)

**Option C: Python HTTP Server**
```bash
cd frontend
python -m http.server 8000
```

Then visit `http://localhost:8000`

---

## 📡 API Endpoints

### Products
```
GET  /api/products           # Get all products
GET  /api/products/:id       # Get product by ID
POST /api/products           # Create new product
PUT  /api/products/:id       # Update product
DELETE /api/products/:id     # Delete product
```

### Cart
```
GET  /api/cart               # Get cart items
POST /api/cart               # Add to cart
PUT  /api/cart/:id           # Update cart item
DELETE /api/cart/:id         # Remove from cart
DELETE /api/cart             # Clear cart
```

### Example Requests

**Get all products:**
```bash
curl http://localhost:4000/api/products
```

**Add product:**
```bash
curl -X POST http://localhost:4000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "High performance laptop",
    "price": 999.99,
    "quantity": 10
  }'
```

**Add to cart:**
```bash
curl -X POST http://localhost:4000/api/cart \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 1,
    "quantity": 2
  }'
```

---

## 💻 Usage

### 👥 As a Customer

1. **Open the website** → `frontend/index.html`
2. **Browse products** - See all available items
3. **Add to cart** - Click "Add to Cart" button
4. **View cart** - See total and items
5. **Checkout** - (Feature for future enhancement)

### 🔧 As an Admin

1. **Open admin panel** → `frontend/admin.html`
2. **Add products** - Fill form and submit
3. **Edit products** - Update existing items
4. **Delete products** - Remove items
5. **Manage inventory** - Update stock levels

---

## 🌐 Live Deployment

### Option 1: Deploy on GitHub Pages (Frontend Only)

1. **Enable GitHub Pages**
   - Go to Repository Settings
   - Scroll to "GitHub Pages"
   - Select `frontend` folder as source
   - Your site will be live at: `https://korirleonard.github.io/ecommerce-fullstack/`

2. **Update API URL** in `frontend/js/app.js`:
   ```javascript
   const API_URL = 'https://your-backend-url/api';
   ```

### Option 2: Deploy Backend on Render.com (Free)

1. **Connect GitHub repository**
2. **Deploy backend service**
3. **Add environment variables** in Render dashboard
4. **Get live backend URL**

### Option 3: Full Stack on Vercel + Serverless Database

1. Deploy frontend on Vercel
2. Deploy backend as serverless functions
3. Use cloud database (Azure SQL, AWS RDS, etc.)

---

## 🧪 Testing

### Test Products Endpoint
```bash
# Get all products
curl http://localhost:4000/api/products

# Should return:
[
  { "id": 1, "name": "Product 1", "price": 29.99, ... },
  { "id": 2, "name": "Product 2", "price": 49.99, ... }
]
```

### Test Admin Panel
1. Open `frontend/admin.html`
2. Add a new product
3. Verify it appears in product list
4. Edit the product
5. Delete the product

---

## 🐛 Troubleshooting

### Backend won't start
- Check Node.js is installed: `node -v`
- Check npm dependencies: `npm install`
- Verify `.env` file exists and is correct
- Check port 4000 is not in use

### Database connection error
- Verify SQL Server is running
- Check credentials in `.env`
- Ensure database `ecommerce1` exists
- Check firewall isn't blocking connections

### Frontend won't load products
- Verify backend is running on port 4000
- Check browser console for errors (F12)
- Verify API URLs in `app.js`
- Check CORS is enabled in backend

### CORS errors
Add this to `backend/server.js`:
```javascript
const cors = require('cors');
app.use(cors());
```

---

## 🚀 Roadmap / Future Features

- [ ] User authentication & login
- [ ] Payment integration (Stripe, PayPal)
- [ ] Order history & tracking
- [ ] Product reviews & ratings
- [ ] Search & filtering
- [ ] Product categories
- [ ] Wishlist feature
- [ ] Email notifications
- [ ] Admin analytics dashboard
- [ ] Mobile app version

---

## 📸 Screenshots

### Customer View
- Product listing page
- Shopping cart interface
- Responsive mobile design

### Admin View
- Product management dashboard
- Add/Edit/Delete products
- Inventory tracking

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Make improvements
- Submit a pull request

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👤 Author

**Leonard Korir** (Korirdev)

- **GitHub:** [@KorirLeonard](https://github.com/KorirLeonard)
- **Portfolio:** [korirleonard.github.io/portfolio](https://korirleonard.github.io/portfolio/)
- **Email:** Open an issue or discussion for inquiries

---

## 🙏 Acknowledgments

- Express.js documentation
- Node.js community
- SQL Server best practices
- Inspired by real-world e-commerce systems

---

## 📞 Support

Need help? 
- 📖 Check the Troubleshooting section
- 💬 Open a GitHub issue
- 📧 Contact me through my portfolio

---

**Built with ❤️ by Leonard Korir**

Last Updated: July 2026

⭐ **If you find this project useful, please give it a star!** ⭐
