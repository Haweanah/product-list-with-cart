# 🛒 Product List With Cart

- A responsive e-commerce product listing app where users can add desserts to a cart, adjust quantities, view totals, and confirm orders with a floating success modal.
--- 

[productlistwithcart](https://product-list-with-cart-15jy.onrender.com/)

📂 Repository

[haweanah](https://github.com/Haweanah/product-list-with-cart)
---

## 📌 Overview

This project is a dynamic product listing page built with React.
Users can:

- View a list of desserts

- Add items to cart

- Increase/decrease quantities

- See real-time total price updates

- Confirm orders

- View a floating order confirmation modal

- Experience responsive layouts across mobile, tablet, and desktop

The focus of this project was state management, conditional rendering, UI overlays, and responsive design.

## 🚀 Features

- 🛍 Add & remove products from cart

- 🔢 Dynamic quantity control per product

- 💰 Automatic total price calculation

- 📱 Fully responsive (mobile-first approach)

- 🎉 Floating order confirmation modal

- 🌫 Background dimming when modal is active

- 🔒 Scroll locking when order is confirmed

## 🧠 What I Practiced & Learned

- Managing complex state using useState

- Preventing layout shifts in responsive design

- Using .filter() and .map() for dynamic UI rendering

- Calculating totals with loops and array methods

- Conditional rendering in React

- Creating modal overlays with position: fixed

- Preventing background scrolling

- Handling UI transitions between states

- Fixing flexbox layout issues

- Formatting prices to 2 decimal places

--- 
## 🛠 Built With

- React

- JavaScript (ES6+)

- CSS3 (Flexbox & Media Queries)

- JSON data

### 📐 Responsive Breakpoints

- Mobile: 0 – 767px

- Tablet: 768px – 1023px

- Desktop: 1024px+

### 💡 Key Implementation Details
- Dynamic Cart Rendering

- Items only appear in the cart if their quantity is greater than zero:

- data.filter(item => quantities[item.id] > 0)
- Total Price Calculation
let total = 0

for (let i = 0; i < data.length; i++) {
  const item = data[i]
  const quantity = quantities[item.id] || 0
  total += item.price * quantity
}
- Floating Confirmation Modal

Uses position: fixed

- Scroll locked with:

## 🎨 UI Highlights

- Smooth layout stability (no shifting images)

- Clean card structure

- Floating confirmation modal

- Subtle elevation effect using shadows

- Price formatting with .toFixed(2)

📷 Screenshots

Add screenshots here (desktop + mobile)

## 🧩 Future Improvements

- Add animations to modal

- Add cart persistence using localStorage

- Improve accessibility (ARIA roles)

- Add checkout form validation

- Add toast notifications

👤 Author

Hauwa Abdulkadir
ahauwa48@yahoo.com[
[haweanah](https://github.com/Haweanah/product-list-with-cart)]