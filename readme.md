# 🚀 Modern Node.js Project with esbuild and pnpm

A blazing-fast Node.js project template using cutting-edge tools for optimal development experience! 

## ✨ Features
- 🏃‍♂️ Lightning-fast builds with esbuild
- 📦 Efficient dependency management using pnpm
- 🌳 Automatic tree-shaking and optimization
- 🔄 Hot module replacement (HMR)
- 🧪 Testing setup with Jest
- 📝 TypeScript support
- 🎨 ESLint + Prettier configuration

## 🛠️ Prerequisites

Make sure you have these tools installed:
- 📗 Node.js (v16.x or higher)
- 📦 pnpm (v8.x or higher)
- 🐙 Git

Install pnpm globally:
```bash
npm install -g pnpm
```

## 🚦 Getting Started

### 1️⃣ Clone & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-node-project.git

# Navigate to project directory
cd your-node-project [[1]](https://repost.aws/knowledge-center/lambda-deployment-package-nodejs)

# Install dependencies
pnpm install
```

### 2️⃣ Environment Configuration

```bash
# Create environment file
cp .env.example .env

# Edit your environment variables
nano .env
```
```text
# Example .env configuration:
NODE_ENV=development
PORT=5000
API_KEY=your_api_key
```
### 3️⃣ Running the Project

```bash
# Start development server with HMR
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```
### 4️⃣ Build Configuration
    
The build process includes:
- 🔄 TypeScript transpilation
- 📦 Dependency bundling
- 🗜️ Code minification
- 🗺️ Source map generation
- 🧹 Tree shaking

### 5️⃣ Development Workflow

1- 🔄 Start the dev server:
```bash
pnpm dev
```
        

