import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
}

export function ImageCarousel({ images, onImagesChange }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map(file => URL.createObjectURL(file));
    onImagesChange([...images, ...newImages]);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
    if (currentIndex >= newImages.length) {
      setCurrentIndex(Math.max(0, newImages.length - 1));
    }
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const dragEndX = e.clientX;
    const diff = dragEndX - dragStartX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }
    
    setIsDragging(false);
  };

  return (
    <div className="card shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
      {/* Header */}
      <div className="card-header bg-primary text-white p-4">
        <h2 className="h4 mb-1">Product Images</h2>
        <p className="mb-0 text-white-50 small">Upload and manage your product photos</p>
      </div>

      <div className="card-body p-4">
        {/* Image Preview Carousel */}
        <div id="productCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner ratio ratio-16x9 bg-dark rounded">
            {images.length > 0 ? (
              images.map((image, index) => (
                <div
                  key={image}
                  className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                  onMouseDown={handleDragStart}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={() => setIsDragging(false)}
                  style={{ cursor: 'grab' }}
                >
                  <img
                    src={image}
                    className="d-block w-100 h-100 object-fit-contain"
                    alt={`Product ${index + 1}`}
                  />
                </div>
              ))
            ) : (
              <div className="d-flex align-items-center justify-content-center text-muted h-100">
                No images uploaded yet
              </div>
            )}
          </div>

          {images.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}

          {images.length > 0 && (
            <div className="position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-pill bg-dark bg-opacity-75 text-white small">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Preview */}
        <div className="d-flex gap-3 overflow-auto pb-2">
          {images.map((image, index) => (
            <div key={image} className="position-relative">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail-img rounded ${index === currentIndex ? 'thumbnail-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
              <button
                onClick={() => removeImage(index)}
                className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-circle p-1 m-1"
                style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
              >
                <X size={14} />
              </button>
            </div>
          ))}
          
          {/* Upload Button */}
          <label className="btn btn-primary upload-button d-flex flex-column align-items-center justify-content-center p-0">
            <Upload size={24} />
            <span className="mt-2 small">Upload</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="d-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
}