# Frontend Interview Preparation

A comprehensive repository for frontend development interview preparation, covering JavaScript fundamentals, React concepts, and practical coding exercises.

> Note: All the data is taken from publicly available domain at that time.

## 📁 Repository Structure

### `/JS` - JavaScript & TypeScript Practice

Core JavaScript and TypeScript interview questions and solutions:

- **Async Programming** - Promise handling, async/await patterns
- **Data Structures** - Common implementations (arrays, objects, etc.)
- **Algorithms** - Problem-solving exercises
- **Design Patterns** - JavaScript design pattern examples
- **Core Concepts** - Fundamental JS/TS demonstrations

### `/ui` - React + TypeScript Application

Modern React application built with:

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Biome** for linting and formatting
- **Vitest** for testing

#### UI Components

Interactive React components commonly asked in frontend interviews:

- **Image Slider/Carousel** ![Medium](https://img.shields.io/badge/Difficulty-Medium-yellow)
  - A responsive image carousel/slider component that displays a collection of images with navigation controls and optional auto-scroll functionality. Users can navigate through images using previous/next buttons or automatic progression.
  - 📁 `/ui/src/components/ImageSlider/`

- **Search with Autocomplete** ![Medium](https://img.shields.io/badge/Difficulty-Medium-yellow)
  - A search input component with real-time autocomplete suggestions that fetches and displays results as the user types. Features debounced API calls to optimize performance and provides a dropdown list of matching suggestions.
  - 📁 `/ui/src/components/SearchWithAutocomplete/`

- **Star Rating System** ![Medium](https://img.shields.io/badge/Difficulty-Medium-yellow)
  - No description available
  - 📁 `/ui/src/components/StarRating/`

- **Accordion Component** ![Unknown](https://img.shields.io/badge/Difficulty-Unknown-lightgrey)
  - No description available
  - 📁 `/ui/src/components/Accordion/`

- **Modal** ![Unknown](https://img.shields.io/badge/Difficulty-Unknown-lightgrey)
  - No description available
  - 📁 `/ui/src/components/Modal/`

- **Tabs Component - Unified Requirements** ![Unknown](https://img.shields.io/badge/Difficulty-Unknown-lightgrey)
  - Create a React component named `Tab` that displays a tabbed interface allowing users to switch between different content panels. The component must be reusable, accessible, and follow modern React best practices.
  - 📁 `/ui/src/components/Tabs/`


## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS version)
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd frontend-prep

# Install dependencies
pnpm install
```

### Running the Projects

#### JavaScript Practice

```bash
cd JS
pnpm test
```

#### React UI Application

```bash
cd ui
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm test       # Run tests
```

## 🛠️ Tech Stack

### Core Technologies

- **JavaScript/TypeScript** - Primary languages
- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools

- **ESLint** - Code linting
- **Vitest** - Testing framework
- **pnpm** - Package management
- **TypeScript** - Type safety

### Key Dependencies

- React & React DOM
- Vite plugins for React
- ESLint plugins for React
- Tailwind CSS with Vite integration
- TypeScript configuration

## 📚 Learning Resources

This repository is structured to help with:

- **Algorithm Practice** - Common coding interview problems
- **JavaScript Fundamentals** - Core language concepts
- **React Development** - Modern React patterns and practices
- **TypeScript** - Type-safe JavaScript development
- **Testing** - Unit testing with Vitest
- **Code Quality** - ESLint configuration and best practices

## 🤝 Contributing

Feel free to contribute by:

- Adding new practice problems
- Improving existing solutions
- Enhancing documentation
- Fixing bugs or issues

## 📄 License

This project is for educational purposes and interview preparation.
