import React from 'react';
import { X } from 'lucide-react';
import './ProjectDetail.css';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  // Get all images from the project folder
  const getProjectImages = () => {
    const images = [];
    const imageNames = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', 
                        '1-تعديل خامس.png', '2-2.png', 'حصوات ولحميات المرارة-3.png'];
    
    imageNames.forEach(imageName => {
      images.push(`/projects/${project.folder}/${imageName}`);
    });
    
    return images;
  };

  const images = getProjectImages();

  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2>{project.name}</h2>
        <p className="project-category">{project.category}</p>
        
        <div className="project-images-grid">
          {images.map((image, index) => (
            <div key={index} className="project-image-item">
              <img 
                src={image} 
                alt={`${project.name} - ${index + 1}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
