# Walid Ali Portfolio

A modern, responsive portfolio website built with React featuring automatic project management.

## 🎨 Features

- **Dark, Oily Theme**: Professional dark color scheme with smooth gradients
- **Automatic Project Loading**: Projects are automatically detected and displayed
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Modern UI with smooth transitions
- **Easy to Customize**: Simple structure for quick customization

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 📁 Adding New Projects

### Automatic Method (Recommended)

1. Create a new folder in `/public/projects/` with your project name (e.g., `My_New_Project`)
2. Add your project images to this folder
3. (Optional) Create a `config.json` file in the project folder:

```json
{
  "name": "My New Project",
  "category": "Branding",
  "description": "Project description",
  "thumbnail": "main-image.png"
}
```

4. Run the generation script:

```bash
npm run generate-projects
```

5. Your project will automatically appear on the website!

### Manual Method

If you don't want to use the auto-generation script, you can manually add projects to the fallback list in `src/components/Projects.js`.

## 📂 Project Structure

```
walid_ali_portfolio/
├── public/
│   ├── projects/           # Your project folders go here
│   │   ├── Dr_Khaled_ElYaqout/
│   │   ├── Hadiyat_Elharam/
│   │   └── ...
│   └── me.png             # Your profile image
├── src/
│   ├── components/        # React components
│   ├── utils/            # Utility functions
│   └── data/             # Generated project data
└── scripts/
    └── generateProjects.js  # Auto-generation script
```

## 🎨 Customization

### Colors

The dark, oily theme uses these main colors:
- Background: `#0a0a0a`
- Secondary Background: `#0f0f0f`
- Cards: `#1a1a1a`
- Accent Gradient: `#2d2d2d` to `#4a4a4a`

To change colors, edit the CSS files in `src/components/`.

### Content

- **Profile Image**: Replace `/public/me.png`
- **Personal Info**: Edit `src/components/Hero.js`, `About.js`, and `Contact.js`
- **Skills**: Modify the skills array in `src/components/Skills.js`

## 📱 Sections

1. **Hero**: Introduction with profile image
2. **Skills**: Your key skills with icons
3. **About**: Detailed information about you
4. **Projects**: Automatically loaded project gallery
5. **Contact**: Contact form and information
6. **Footer**: Social links and navigation

## 🛠️ Technologies

- React 18
- Lucide React (Icons)
- CSS3 with modern features
- Responsive Grid Layout

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, please open an issue on the repository.

---

Made with ❤️ by Walid Ali
