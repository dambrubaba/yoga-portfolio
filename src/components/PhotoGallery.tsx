import React from 'react';

const PhotoGallery: React.FC = () => {
  const photos = [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1599447421373-89c0616a3f7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ];

  return (
    <section id="gallery" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;