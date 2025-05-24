# Sanskriti's Portfolio

![Portfolio Preview](public/hero-bg.svg)

A modern, interactive portfolio website built with Next.js 14, featuring 3D animations, scroll effects, and a responsive design to showcase my projects, skills, and professional journey.

## ✨ Features

- **Interactive UI**: Dynamic animations and transitions using Framer Motion
- **3D Elements**: Three.js integration with React Three Fiber for immersive 3D experiences
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Modern dark theme with accent colors for optimal viewing
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **Sections**:
  - Home/Hero section with animated introduction
  - About page with personal journey timeline
  - Projects showcase with detailed project pages
  - Skills section with visual representation of technologies
  - Resume section with downloadable PDF
  - Contact form for reaching out

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 19, TailwindCSS
- **Animation**: Framer Motion, GSAP, React Three Fiber
- **3D Rendering**: Three.js
- **Styling**: TailwindCSS, SCSS
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sevyaport.git
   cd sevyaport
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

## 📁 Project Structure

```
src/
├── app/                  # App router pages
│   ├── page.js           # Home page
│   ├── about/            # About page
│   ├── projects/         # Projects page
│   ├── skills/           # Skills page
│   ├── resume/           # Resume page
│   └── contact/          # Contact page
├── components/           # Reusable components
│   ├── about/            # About page components
│   ├── Navbar/           # Navigation components
│   ├── project/          # Project components
│   └── skills/           # Skills components
└── ...
```

## 📝 Notes for Developers

- The portfolio uses React 19's concurrent features
- 3D animations may be performance-intensive on older devices
- Components follow the "use client" directive for Next.js app router
- Custom hooks and animations are used throughout for a unified experience

## 🔧 Customization

To customize this portfolio for your own use:

1. Replace personal information in `src/components` files
2. Update projects in the projects section
3. Replace images in the `public` directory
4. Modify the color scheme in `tailwind.config.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile devices
- Tablets
- Laptops/Desktops
- Large screens

## 🚀 Deployment

The portfolio is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/sevyaport)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the React framework
- [TailwindCSS](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D elements
- [GSAP](https://greensock.com/gsap/) for scroll animations
