# mellotech-product-image-carousel
Product Image Carousel
A modern, interactive image carousel component built with React, TypeScript, and Tailwind CSS. This project provides a sleek interface for managing and displaying product images with features like drag navigation, thumbnail previews, and smooth transitions.

## Features

- **Interactive Image Carousel**: Navigate through images using arrow buttons or drag gestures
- **Multiple Image Upload**: Upload multiple product images simultaneously
- **Thumbnail Preview**: Quick access to all uploaded images with thumbnail navigation
- **Image Management**: Remove unwanted images with a single click
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Accessibility**: Built with ARIA labels and keyboard navigation in mind
- **Modern UI**: Sleek design with smooth animations and transitions

## Tech Stack

- React 18
- TypeScript
- Bootstrap
- Tailwind CSS
- Vite
- Lucide React (for icons)

## 🎨 Features in Detail

### Image Navigation
- Left/Right arrow buttons for image navigation
- Drag gesture support for touch-friendly interaction
- Image counter showing current position
- Thumbnail strip for quick navigation

### Image Management
- Multiple image upload support
- Image removal capability
- Real-time preview of uploaded images
- Automatic URL generation for uploaded files

### UI/UX Features
- Smooth transitions between images
- Hover effects on interactive elements
- Loading states and empty states
- Responsive layout adaptation

## 🔍 Code Structure

```
src/
├── components/
│   └── ImageCarousel.tsx    # Main carousel component
├── App.tsx                  # Demo implementation
└── main.tsx                # Application entry point
```

## Development

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## License

MIT License - feel free to use this component in your projects!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  Installation

1. Clone the repository:
```bash
git clone https://github.com/ngonimuro/mellotech-product-image-carousel.git
cd product-image-carousel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```


## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev)
- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)