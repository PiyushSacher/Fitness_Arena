// // script.js
// function addToCart(planName, planPrice) {
//     const cartItemsContainer = document.getElementById('cartItems');
//     const cartItem = document.createElement('div');
//     cartItem.className = 'cart__item';
//     cartItem.innerHTML = `
//       <p>${planName} - $${planPrice}</p>
//       <button class="btn remove__btn" onclick="removeFromCart(this)">Remove</button>
//     `;
//     cartItemsContainer.appendChild(cartItem);
//     openCartModal();
//   }
  
//   function openCartModal() {
//     document.getElementById('cartModal').style.display = 'block';
//   }
  
//   function closeCartModal() {
//     document.getElementById('cartModal').style.display = 'none';
//   }
  
//   function removeFromCart(button) {
//     button.parentElement.remove();
//     if (document.getElementById('cartItems').children.length === 0) {
//       closeCartModal();
//     }
//   }
  
//   document.querySelector('.cart__btn').addEventListener('click', openCartModal);
//   //Add a script to handle modal display 
//     function openModal() {
//       document.getElementById("loginSignupModal").style.display = "block";
//     }
  
//     function closeModal() {
//       document.getElementById("loginSignupModal").style.display = "none";
//     }
  
//     function showSignupForm() {
//       document.getElementById("loginForm").style.display = "none";
//       document.getElementById("signupForm").style.display = "block";
//     }
  
//     function showLoginForm() {
//       document.getElementById("signupForm").style.display = "none";
//       document.getElementById("loginForm").style.display = "block";
//     }
//     async function login() {
//         const email = document.getElementById('loginEmail').value;
//         const password = document.getElementById('loginPassword').value;
      
//         try {
//           const response = await fetch('/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//           });
      
//           const message = await response.text();
//           alert(message);
//           if (response.ok) closeModal();
//         } catch (error) {
//           console.error('Error logging in:', error);
//         }
//       }
      
//       async function signup() {
//         const name = document.getElementById('signupName').value;
//         const age = document.getElementById('signupAge').value;
//         const phone = document.getElementById('signupPhone').value;
//         const email = document.getElementById('signupEmail').value;
//         const password = document.getElementById('signupPassword').value;
      
//         try {
//           const response = await fetch('/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name, age, phone, email, password })
//           });
      
//           const message = await response.text();
//           alert(message);
//           if (response.ok) closeModal();
//         } catch (error) {
//           console.error('Error signing up:', error);
//         }
//       }
      
// script.js

function addToCart(planName, planPrice) {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart__item';
    cartItem.innerHTML = `
      <p>${planName} - $${planPrice}</p>
      <button class="btn remove__btn" onclick="removeFromCart(this)">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
    openCartModal();
}

function openCartModal() {
    document.getElementById('cartModal').style.display = 'block';
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function removeFromCart(button) {
    button.parentElement.remove();
    if (document.getElementById('cartItems').children.length === 0) {
        closeCartModal();
    }
}

document.querySelector('.cart__btn').addEventListener('click', openCartModal);

// Modal display functions
function openModal() {
    document.getElementById("loginSignupModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginSignupModal").style.display = "none";
}

function showSignupForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Function to handle login
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle signup
    async function signup(event) {
      event.preventDefault();  // Prevent form submission reload if using forms
      const name = document.getElementById('signupName').value;
      const age = document.getElementById('signupAge').value;
      const phone = document.getElementById('signupPhone').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
  
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, age, phone, email, password })
        });
  
        const result = await response.json(); // Parse JSON response
        alert(result.message);
        if (response.ok) {
          window.location.href = 'login.html';  // Redirect to login page
        }
      } catch (error) {
        console.error('Error signing up:', error);
      }
    }
  
    // Function to handle login
    async function login(event) {
      event.preventDefault();  // Prevent form submission reload if using forms
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
  
        const result = await response.json(); // Parse JSON response
        alert(result.message);
        if (response.ok) {
          window.location.href = 'index.html';  // Redirect to home page
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  
    // Add event listeners to forms
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
  
    if (signupForm) {
      signupForm.addEventListener('submit', signup);
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', login);
    }
  });
  