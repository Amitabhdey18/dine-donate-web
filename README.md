# 🍽️ FoodBridge — Food Waste Management & Donation Platform

FoodBridge connects hotels, restaurants, and cafés that have surplus food with NGOs, shelters, and individuals who need it — turning would-be food waste into meals for the community.

> Every year, millions of tonnes of edible food are thrown away while people go hungry. FoodBridge makes it effortless for food businesses to donate and for recipients to claim what's available — safely, quickly, and for free.

---

## ✨ Features

- **For Donors (Hotels, Cafés, Restaurants)**
  - Post surplus food with quantity, pickup window, and location
  - Simple donation form — takes under a minute
  - Track what has been donated and claimed

- **For Recipients (NGOs, Shelters, Individuals)**
  - Browse available food donations in real time
  - Claim items that match your community's needs
  - Request-based intake for organizations with specific needs

- **General**
  - Fully responsive design — works on mobile, tablet, and desktop
  - Clean, warm, community-first interface
  - Fast, client-side routing with dedicated pages for donors and recipients

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [TypeScript 5](https://www.typescriptlang.org) | Type-safe JavaScript |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible UI components (Radix UI) |
| [React Router 6](https://reactrouter.com) | Client-side routing |
| [Lucide React](https://lucide.dev) | Icons |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or later — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** 9 or later (ships with Node.js)

### Installation

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate into the project
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app runs at **http://localhost:8080** with hot reloading enabled.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 📁 Project Structure

```
├── public/               # Static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui component library
│   ├── hooks/            # Custom React hooks (use-mobile, use-toast)
│   ├── lib/              # Utilities (class merging, helpers)
│   ├── pages/            # Route-level page components
│   ├── App.tsx           # Root component with routes
│   ├── index.css         # Global styles & design tokens
│   └── main.tsx          # App entry point
├── index.html            # HTML template
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json
```

---

## 🌍 Deployment

**Publish from Lovable:** open your [Lovable project](https://lovable.dev/projects/01bdf809-bb0f-4d42-8ebc-3aa407590134) and click **Share → Publish**.

**Self-host with Vite:** run `npm run build` and serve the contents of `dist/` on any static host (Netlify, Vercel, GitHub Pages, etc.).

### Custom Domain

Go to **Project → Settings → Domains → Connect Domain** in Lovable.
See the [custom domain guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide).

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is available for use under the MIT License.

---

## 📬 Contact & Support

Built with ❤️ using [Lovable](https://lovable.dev).
Questions or partnership enquiries? Reach out through the project repository.

---

*Together we can make sure good food never goes to waste.* 🌱
