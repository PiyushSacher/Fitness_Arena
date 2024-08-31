// // const express = require('express');
// // const fs = require('fs');
// // const path = require('path');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');

// // const app = express();
// // const PORT = 3000;

// // // Middleware to parse JSON bodies
// // app.use(bodyParser.json());
// // app.use(cors());

// // // Serve static files from the "frontend" directory
// // app.use(express.static(path.join(__dirname, '../frontend')));

// // // Serve static files from the "assets" directory
// // app.use('/assets', express.static(path.join(__dirname, '../assets')));

// // // Serve index.html at the root URL
// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
// // });

// // let cart = [];

// // // Add to cart route
// // app.post('/add-to-cart', (req, res) => {
// //   const { plan, price } = req.body;
// //   const itemIndex = cart.findIndex(item => item.plan === plan);
// //   if (itemIndex > -1) {
// //     cart[itemIndex].quantity += 1;
// //   } else {
// //     cart.push({ plan, price, quantity: 1 });
// //   }
// //   res.json(cart);
// // });

// // // Remove from cart route
// // app.post('/remove-from-cart', (req, res) => {
// //   const { plan } = req.body;
// //   const itemIndex = cart.findIndex(item => item.plan === plan);
// //   if (itemIndex > -1) {
// //     cart[itemIndex].quantity -= 1;
// //     if (cart[itemIndex].quantity === 0) {
// //       cart.splice(itemIndex, 1);
// //     }
// //   }
// //   res.json(cart);
// // });

// // // Get cart items route
// // app.get('/cart-items', (req, res) => {
// //   res.json(cart);
// // });

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());
// app.use(cors());

// // Serve static files from the "frontend" directory
// app.use(express.static(path.join(__dirname, '../frontend')));

// // Serve static files from the "assets" directory
// app.use('/assets', express.static(path.join(__dirname, '../assets')));

// // Serve index.html at the root URL
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
// });

// // In-memory cart storage
// let cart = [];

// // Add to cart route
// app.post('/add-to-cart', (req, res) => {
//   const { plan, price } = req.body;
//   const itemIndex = cart.findIndex(item => item.plan === plan);
//   if (itemIndex > -1) {
//     cart[itemIndex].quantity += 1;
//   } else {
//     cart.push({ plan, price, quantity: 1 });
//   }
//   res.json(cart);
// });

// // Remove from cart route
// app.post('/remove-from-cart', (req, res) => {
//   const { plan } = req.body;
//   const itemIndex = cart.findIndex(item => item.plan === plan);
//   if (itemIndex > -1) {
//     cart[itemIndex].quantity -= 1;
//     if (cart[itemIndex].quantity === 0) {
//       cart.splice(itemIndex, 1);
//     }
//   }
//   res.json(cart);
// });

// // Get cart items route
// app.get('/cart-items', (req, res) => {
//   res.json(cart);
// });

// // Path to data.json file
// const dataFilePath = path.join(__dirname, 'data.json');

// // Helper function to read data from data.json
// function readData() {
//   if (fs.existsSync(dataFilePath)) {
//     try {
//       const data = fs.readFileSync(dataFilePath);
//       return JSON.parse(data);
//     } catch (err) {
//       console.error("Error reading data.json:", err);
//       return { users: [] };
//     }
//   }
//   return { users: [] };
// }

// // Helper function to write data to data.json
// function writeData(data) {
//   try {
//     fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
//   } catch (err) {
//     console.error("Error writing to data.json:", err);
//   }
// }

// // User registration route
// app.post('/signup', (req, res) => {
//   const { name, age, phone, email, password } = req.body;
//   let data = readData();

//   // Check if the email already exists
//   const userExists = data.users.some(user => user.email === email);
//   if (userExists) {
//     return res.status(400).json({ error: 'User already exists' });
//   }

//   // Add the new user to data.json
//   const newUser = { name, age, phone, email, password };
//   data.users.push(newUser);
//   writeData(data);

//   res.json({ message: 'User registered successfully' });
// });

// // User login route
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const data = readData();

//   // Find the user by email and password
//   const user = data.users.find(user => user.email === email && user.password === password);
//   if (!user) {
//     return res.status(401).json({ error: 'Invalid email or password' });
//   }

//   res.json({ message: 'Login successful' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// In-memory cart storage
let cart = [];

// Add to cart route
app.post('/add-to-cart', (req, res) => {
  const { plan, price } = req.body;
  const itemIndex = cart.findIndex(item => item.plan === plan);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ plan, price, quantity: 1 });
  }
  res.json(cart);
});

// Remove from cart route
app.post('/remove-from-cart', (req, res) => {
  const { plan } = req.body;
  const itemIndex = cart.findIndex(item => item.plan === plan);
  if (itemIndex > -1) {
    cart[itemIndex].quantity -= 1;
    if (cart[itemIndex].quantity === 0) {
      cart.splice(itemIndex, 1);
    }
  }
  res.json(cart);
});

// Get cart items route
app.get('/cart-items', (req, res) => {
  res.json(cart);
});

// Path to data.json file

const dataFilePath = path.join(__dirname, 'data.json');

// Helper function to read data from data.json
function readData() {
  if (fs.existsSync(dataFilePath)) {
    try {
      const data = fs.readFileSync(dataFilePath);
      console.log('Data read from file:', data.toString()); // Log raw data
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading data file:', err);
      return { users: [] };
    }
  } else {
    return { users: [] };
  }
}


// Helper function to write data to data.json
function writeData(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log('Data written to file:', JSON.stringify(data, null, 2)); // Log data being written
  } catch (err) {
    console.error('Error writing data file:', err);
  }
}


// Sign up route
app.post('/signup', (req, res) => {
  const { name, age, phone, email, password } = req.body;
  console.log('Received data:', { name, age, phone, email, password }); // Log incoming data
  
  let data = readData();
  const userExists = data.users.some(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const newUser = { name, age, phone, email, password };
  data.users.push(newUser);
  writeData(data);

  res.status(201).json({ message: 'User registered successfully' });
});


// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readData();

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
