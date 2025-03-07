# PrecisionGolf - Modern Golf Website

A modern, responsive golf website built with React, TypeScript, and Tailwind CSS. The site features a beautiful dark theme with gradient effects, an admin dashboard, and a blog system.

## 🌟 Features

### Frontend
- Modern, responsive design with dark theme
- Dynamic gradient backgrounds and animations
- Blog system with rich content management
- Product showcase
- Contact form
- About section
- Mobile-friendly navigation

### Admin Dashboard
- Secure admin interface
- Blog post management (CRUD operations)
- Product management
- User-friendly content editor
- SEO optimization tools
- Media management

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router v6
- Lucide Icons
- Supabase (for backend)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/golf-site.git
cd golf-site
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
golf-site/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   │   └── admin/     # Admin dashboard pages
│   ├── styles/        # Global styles
│   └── App.tsx        # Main application component
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Project dependencies
```

## 🔒 Admin Access

The admin dashboard is accessible at `/admin` with the following routes:
- Dashboard: `/admin`
- Blog Posts: `/admin/posts`
- Edit Post: `/admin/posts/:id`
- New Post: `/admin/posts/new`

## 🎨 Design Features

- Custom color scheme with primary color: #b605cd
- Dynamic gradient backgrounds
- Modern UI components
- Responsive layout for all screen sizes
- Smooth animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ☕ Support

If you find this project helpful, consider buying me a coffee to support my work!

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg)](https://buymeacoffee.com/asheint)

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Lucide Icons](https://lucide.dev/) 
