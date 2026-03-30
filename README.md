# DigiTools — Premium Digital Tools Marketplace

> A modern, fully responsive digital tools buying platform built with React.js and Tailwind CSS. Browse, add to cart, and checkout premium digital products with a sleek UI and smooth user experience.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI architecture |
| **Vite** | Lightning-fast build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Tailwind component library |
| **React-Toastify** | Beautiful toast notifications |
| **JavaScript (ES6+)** | Modern JS features |
| **JSON** | Local product data store |

---

## Key Features

### Smart Cart System
Add products to cart with a single click, view a running total, remove individual items, and proceed to checkout — all with toast notifications confirming every action. Cart count is always visible in the navbar.

### Pixel-Perfect UI
Faithfully reproduces the provided Figma/PDF design with a purple-violet brand palette, Sora typeface, gradient accents, and smooth hover animations across every card and button.

### Fully Responsive
Optimized for all screen sizes — mobile, tablet, and desktop — using Tailwind's responsive grid utilities and flexible layouts.

---

## Project Structure

```
DigiTools/
├── public/
├── src/
│   ├── assets/          # All icons & images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Stats.jsx
│   │   ├── ProductsSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartSection.jsx
│   │   ├── CartItem.jsx
│   │   ├── Steps.jsx
│   │   ├── Pricing.jsx
│   │   ├── CallToAction.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---
