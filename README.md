# Vikram Portfolio

A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Project Showcase**: Display projects with GitHub and live demo links
- **Skills Section**: Organized display of technical skills and tools
- **Work Experience**: Timeline of professional experience
- **Contact Links**: Quick access to social profiles and email
- **Real-time Clock**: Dynamic time and date display
- **Dark Mode Ready**: Built with theme support

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible component primitives
- **Wouter** - Lightweight routing
- **Lucide React** - Icon library
- **Framer Motion** - Animations

### Backend
- **Express.js** - Production server
- **Node.js** - Runtime environment

### Development Tools
- **ESBuild** - Fast bundler
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 📋 Prerequisites

- **Node.js** (v22.13.0 or higher recommended)
- **pnpm** (v10.4.1 or higher) - Package manager

If you don't have pnpm installed, you can:
- Install via npm: `npm install -g pnpm`
- Or use Corepack: `corepack enable`
- Or use npx: `npx --yes pnpm@latest <command>`

## 🏃 Getting Started

### Installation

1. Clone the repository:
```bash
git clone git@github.com:vikramatter/VikramPortfolio.git
cd VikramPortfolio
```

2. Install dependencies:
```bash
pnpm install
```

Or if pnpm is not installed globally:
```bash
npx --yes pnpm@latest install
```

### Running Locally

Start the development server:
```bash
pnpm dev
```

Or with npx:
```bash
npx --yes pnpm@latest dev
```

The application will be available at `http://localhost:3000` (or the next available port).

### Building for Production

Build the application:
```bash
pnpm build
```

This will:
- Build the React frontend to `dist/public`
- Bundle the Express server to `dist/index.js`

### Running Production Build

Start the production server:
```bash
pnpm start
```

The server will run on port 3000 (or the port specified in the `PORT` environment variable).

### Preview Production Build

Preview the production build locally:
```bash
pnpm preview
```

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Run production server
- `pnpm preview` - Preview production build
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## 📁 Project Structure

```
vikram-portfolio/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   └── src/
│       ├── assets/        # Images and other assets
│       ├── components/    # React components
│       │   └── ui/       # UI component library
│       ├── contexts/      # React contexts
│       ├── hooks/         # Custom React hooks
│       ├── pages/         # Page components
│       ├── lib/           # Utility functions
│       └── main.tsx       # Entry point
├── server/                 # Express server
│   └── index.ts           # Server entry point
├── shared/                 # Shared constants and utilities
├── dist/                   # Build output (generated)
├── patches/                # Dependency patches
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Adding Projects

Edit the `projects` array in `client/src/pages/Home.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    tech: ["React.js", "TypeScript"],
    impact: "Impact statement",
    github: "https://github.com/username/repo",
    live: "https://live-demo.com"
  },
  // ...
];
```

### Updating Avatar

Replace the avatar image at `client/src/assets/avatar.png` with your own image.

### Modifying Content

Edit the content in `client/src/pages/Home.tsx` to update:
- Personal information
- Work experience
- Skills
- Contact links

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory if needed:

```env
PORT=3000
NODE_ENV=development
```

### Vite Configuration

The Vite config includes path aliases:
- `@` → `client/src`
- `@shared` → `shared`
- `@assets` → `attached_assets`

## 📝 License

MIT License - see LICENSE file for details

## 👤 Author

**Bawa Vikram**
- GitHub: [@vikramatter](https://github.com/vikramatter)
- LinkedIn: [bawa-vikram](https://www.linkedin.com/in/bawa-vikram/)
- Email: bawavikram1998@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

