import React, { useState } from 'react';
import { ImageCarousel } from './components/ImageCarousel';
import { Laptop } from 'lucide-react';

function App() {
  const [images, setImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1600&q=80'
  ]);

  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation Bar */}
      <nav className="navbar navbar-light bg-white shadow-sm border-bottom border-primary">
        <div className="container">
          <div className="d-flex align-items-center">
            <Laptop className="text-primary" size={32} />
            <span className="ms-3 fs-4 fw-bold text-dark">ProductHub</span>
          </div>
          <span className="text-muted small">Mellotech Challenge</span>
        </div>
      </nav>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">
            Product Image Gallery
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Upload and showcase your product images with our interactive carousel. 
            Drag to navigate between images or use the arrow buttons.
          </p>
        </div>

        <ImageCarousel images={images} onImagesChange={setImages} />
      </div>
    </div>
  );
}

export default App;