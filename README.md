# Selva Jerish M — Portfolio

A modern, high-performance developer portfolio built with React 19, Vite, and Tailwind CSS. Features a futuristic deep-space dark aesthetic with interactive 3D WebGPU `<AeroShards />` ribbons floating seamlessly in the background.

---

## ⚡ Features

- **Futuristic Deep-Space Aesthetic**: Dark theme with neon cyan & electric purple/violet gradients, frosted glassmorphism cards, and glow accents.
- **3D WebGPU Background**: Powered by `<AeroShards />` from React Bits and `vgpu` with real-time mouse interaction, click pulse waves, and hold-to-gather physics.
- **Graceful Fallbacks**: Automatic fallback to ambient CSS starry glow if WebGPU is not supported by the client browser.
- **Responsive & Accessible**: Optimized for all screen sizes from mobile to desktop with semantic HTML and keyboard navigation support.
- **Clean Architecture**: Modular React components, Tailwind CSS v4 styling, and lightning-fast Vite builds.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D / GPU Graphics**: [`vgpu`](https://vgpu.sh/) & [`@vgpu/wgsl`](https://github.com/vercel-labs/vgpu) (WebGPU)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Typography**: Space Grotesk & DM Sans (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher (or pnpm / yarn)
- **Browser**: Modern browser with WebGPU support (Chrome 113+, Edge 113+, Firefox Nightly, Safari 18+) for 3D shard animations. Older browsers automatically use the CSS ambient background.

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/selva-jerish/selva-jerish-portfolio-.git
   cd selva-jerish-portfolio-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:5173](http://localhost:5173) to view the application with hot module replacement (HMR).

---

## ⚙️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the Vite development server with instant HMR |
| `npm run build` | Compiles and optimizes assets for production into `/dist` |
| `npm run preview` | Locally preview the production build output |
| `npm run lint` | Runs Oxlint to check code quality and detect issues |

---

## 🎨 Configuration & Customization

### 1. Customizing Personal Info & Content
- **Hero & Intro**: Edit [`src/components/Hero.jsx`](src/components/Hero.jsx) to update bio, headline, and stats.
- **Projects**: Edit the `projects` array in [`src/components/Projects.jsx`](src/components/Projects.jsx) to add or modify projects, tags, descriptions, and repo/live demo URLs.
- **Experience**: Edit the `timeline` array in [`src/components/Experience.jsx`](src/components/Experience.jsx) to update education and work history.
- **Skills**: Edit `skillGroups` in [`src/components/Skills.jsx`](src/components/Skills.jsx) to update technical categories and tags.
- **Contact Details**: Update email, phone, LinkedIn, and GitHub links in [`src/components/Contact.jsx`](src/components/Contact.jsx) and [`src/components/Footer.jsx`](src/components/Footer.jsx).

### 2. AeroShards Background Settings
You can customize the 3D shard ribbon behavior in [`src/App.jsx`](src/App.jsx):

```jsx
<AeroShards
  shardColor="#6900ffff"      // Primary shard body color
  accentColor="#bf00ffff"     // Rim light, markers, and glint color
  placement="full"            // 'full' | 'left' | 'right' | 'center'
  material="glass"            // 'glass' | 'chrome'
  markers="plus"              // 'plus' | 'dots' | 'none'
  count={1300}                // Number of floating shards (100 - 6000)
  depthOfField={0.75}         // Depth of field blur intensity (0 - 1)
  vignette={0.3}              // Edge vignette fade (0 - 1)
  mouseInteraction            // Cursor parting and parallax lean
  pulseOnClick                // Ripple shockwave on click
  holdToGather                // Gravitational vortex on click & hold
/>
```

---

## 🌐 Deployment

Build the production bundle:

```bash
npm run build
```

The compiled files will be in the `dist/` directory, ready to be deployed to **Vercel**, **Netlify**, **GitHub Pages**, or any static hosting service.

---

## 🤝 Acknowledgements & Contributions

- Component inspiration & AeroShards from [React Bits](https://reactbits.dev/)
- Built by [Selva Jerish M](https://github.com/selva-jerish)
- Co-authored-by: Geojero <georgejeron59@gmail.com>
