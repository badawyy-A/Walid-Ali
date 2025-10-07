import React, { useState, useEffect } from 'react';
import './Projects.css';

// ✅ Dynamically import all images from subfolders inside /assets/projects/
const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    const match = key.match(/\.\/([^/]+)\/(.+)$/); // capture folder and filename
    if (match) {
      const folder = match[1];
      const file = match[2];
      if (!images[folder]) images[folder] = [];
      images[folder].push(r(key));
    }
  });
  return images;
};

// ✅ Try to import all project images (ignore if empty)
let projectImages = {};
try {
  projectImages = importAll(
    require.context('../assets/projects', true, /\.(png|jpe?g|svg|webp)$/)
  );
} catch (err) {
  console.warn('⚠️ No project images found:', err);
}

const Projects = () => {
  const categories = Object.keys(projectImages || {});
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');
  const [images, setImages] = useState(projectImages[selectedCategory] || []);

  useEffect(() => {
    if (selectedCategory && projectImages[selectedCategory]) {
      setImages(projectImages[selectedCategory]);
    } else {
      setImages([]);
    }
  }, [selectedCategory]);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        {/* ✅ Safe check — render only if categories exist */}
        {categories.length > 0 ? (
          <>
            {/* Category Buttons */}
            <div className="project-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.replace(/_/g, ' ')}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {images.length > 0 ? (
                images.map((imgSrc, index) => (
                  <div key={index} className="project-card">
                    <div className="project-image">
                      <img
                        src={imgSrc}
                        alt={`${selectedCategory} - ${index + 1}`}
                        onError={(e) => {
                          console.error('❌ Image failed to load:', imgSrc);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-images">No images available for this project.</p>
              )}
            </div>
          </>
        ) : (
          <p className="no-projects">No project folders found in /assets/projects.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
