const fs = require('fs');
const path = require('path');

/**
 * This script automatically scans the projects folder and generates
 * a projects.json file with all available projects
 * 
 * Run this script whenever you add new projects:
 * node scripts/generateProjects.js
 */

const projectsDir = path.join(__dirname, '../public/projects');
const outputFile = path.join(__dirname, '../src/data/projects.json');

function scanProjects() {
  const projects = [];

  try {
    const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => !dirent.name.startsWith('.'))
      .map(dirent => dirent.name);

    folders.forEach(folder => {
      const folderPath = path.join(projectsDir, folder);
      
      // Get all images in the folder
      const images = fs.readdirSync(folderPath)
        .filter(file => /\.(png|jpe?g|gif|svg)$/i.test(file))
        .map(file => `/projects/${folder}/${file}`);

      // Check if config.json exists
      const configPath = path.join(folderPath, 'config.json');
      let config = {};
      
      if (fs.existsSync(configPath)) {
        const configContent = fs.readFileSync(configPath, 'utf8');
        config = JSON.parse(configContent);
      }

      // Create project object
      const project = {
        id: folder,
        name: config.name || folder.replace(/_/g, ' '),
        category: config.category || 'Design',
        description: config.description || '',
        thumbnail: images[0] || '',
        images: images,
        folder: folder
      };

      projects.push(project);
    });

    // Ensure output directory exists
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write projects to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
    
    console.log(`✅ Successfully generated projects.json with ${projects.length} projects`);
    console.log('Projects:', projects.map(p => p.name).join(', '));
    
  } catch (error) {
    console.error('❌ Error generating projects:', error);
    process.exit(1);
  }
}

scanProjects();
