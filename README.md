# Grech Hardware Distributors Website

A modern, responsive website for Grech Hardware Distributors, built with React and featuring a professional design optimized for the hardware industry.

## Features

- **Modern Design**: Clean, professional interface with contemporary UI/UX principles
- **Responsive Layout**: Mobile-first design that works seamlessly across all devices
- **Interactive Elements**: Smooth animations, hover effects, and user-friendly interactions
- **Professional Branding**: Consistent visual identity reflecting industry standards
- **Fast Performance**: Optimized code and assets for quick loading times

## Technology Stack

- **Frontend**: React 16.13.1
- **Styling**: CSS3 with modern features (Grid, Flexbox, Variables)
- **Routing**: React Router v5
- **Icons**: Font Awesome 4.7.0
- **Build Tool**: Create React App 3.4.1

## Project Structure

```
src/
├── components/          # React components
│   ├── About/          # About page component
│   ├── Contact/        # Contact page component
│   ├── Footer/         # Footer component
│   ├── Home/           # Home page component
│   ├── Navigation/     # Navigation bar
│   ├── Products/       # Products page component
│   ├── ScrollToTop/    # Scroll to top functionality
│   └── SideDrawer/     # Mobile navigation drawer
├── assets/             # Images and static assets
├── App.js              # Main application component
├── index.js            # Application entry point
└── style.css           # Global styles and CSS variables
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd diy-supplier-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   **Note**: If you encounter OpenSSL errors with newer Node.js versions, use:

   ```bash
   export NODE_OPTIONS="--openssl-legacy-provider" && npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Development

### Code Style

- Use consistent indentation (2 spaces)
- Follow React best practices and component structure
- Maintain CSS organization with CSS variables for theming
- Ensure responsive design principles are followed

### Component Architecture

- Each component has its own directory with JS and CSS files
- Global styles are defined in `src/style.css`
- CSS variables are used for consistent theming
- Responsive breakpoints: 768px (tablet), 480px (mobile)

## Deployment

The application can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder contents
- **GitHub Pages**: Use the `gh-pages` package

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Company**: Grech Hardware Distributors
- **Email**: grechhd@gmail.com
- **Phone**: +356 21496475
- **Address**: Triq S-Salib ta' L-Mriehel, Central Business District, Mriehel, BKR 3020, Malta

## Acknowledgments

- React team for the excellent framework
- Font Awesome for the icon library
- Modern CSS features for enhanced styling capabilities
