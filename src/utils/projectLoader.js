/**
 * Automatic Project Loader
 * This utility automatically detects and loads projects from the projects folder
 * 
 * To add a new project:
 * 1. Create a new folder in /public/projects/ with your project name
 * 2. Add images to that folder
 * 3. Optionally create a config.json file in the project folder with metadata:
 *    {
 *      "name": "Project Name",
 *      "category": "Branding",
 *      "description": "Project description",
 *      "thumbnail": "1.png"
 *    }
 */

// Import all project configurations
const loadProjectsFromFolder = () => {
  const projects = [];
  
  // Define your projects here - this will be automatically generated
  const projectFolders = [
    'Dr_Khaled_ElYaqout',
    'Hadiyat_Elharam',
    'Nukhbat_ElJouf',
    'Qima_Travel'
  ];

  projectFolders.forEach(folder => {
    // Default project configuration
    const project = {
      name: folder.replace(/_/g, ' '),
      folder: folder,
      category: 'Design',
      thumbnail: '1.png',
      images: []
    };

    // Try to load custom configuration if exists
    try {
      const config = require(`../../public/projects/${folder}/config.json`);
      Object.assign(project, config);
    } catch (e) {
      // No config file, use defaults
    }

    projects.push(project);
  });

  return projects;
};

export const getProjects = () => {
  return loadProjectsFromFolder();
};

export const getProjectsByCategory = (category) => {
  const projects = getProjects();
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectByFolder = (folder) => {
  const projects = getProjects();
  return projects.find(project => project.folder === folder);
};
