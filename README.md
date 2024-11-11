# Project **Funiro** — Furniture Online Store

**Funiro** is an online furniture store with a user-friendly interface for purchasing, viewing, and filtering products. The project uses a modern tech stack and is fully optimized for mobile and desktop devices.

`Demo version:` [Funiro](https://mofeey.github.io/Funiro)

## Project Responsiveness

The **Funiro** project is responsive and works well on various screen sizes. The site is optimized for screen widths from **`320px`** to **`1440px`**.

### Supported Screen Resolutions

The project adapts to the following screen sizes:

- **Mobile devices**: from 320px to 768px
- **Tablets and smaller screens**: from 768px to 1024px
- **Laptops and larger screens**: from 1024px to 1440px

## Tech Stack

- `HTML5`
- `CSS3`
- `JavaScript (ES6)`
- `BEM`
- `SCSS / Styled-components (for styling)`
- `Swiper`, `Fancybox`, `AOS`

- **Tools**:  
  - `Git` (for version control)
  - `npm` (for managing dependencies)
  - `Gulp` (for build and automation tasks)

## Repository Structure

The project has the following structure:

- **`/src`** — development folder. This contains the source files of the project, such as components, pages, styles, and other resources. It is the main working directory where all changes are made during development.

- **`/build`** — the build folder created when running Gulp. This folder contains intermediate files used for local development, including compiled files like HTML, CSS, and JS, for quick testing purposes.

- **`/docs`** — the production build folder. This contains the final output after running Gulp and other tools. It includes files ready for deployment to a server or hosting (compressed HTML, CSS, JavaScript files, optimized images, etc.).

## Installation and Usage

### 1. Clone the Repository

If you haven't installed **[Git](https://git-scm.com/downloads)** yet, you need to do so first.

To begin, clone the repository to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/mofeey/Funiro.git
```

Then, navigate to the project directory:
```bash
cd Funiro
```
### 2. Install Dependencies

The project uses npm to manage dependencies. If you haven't installed Node.js and npm yet, download and [install them from the official Node.js website.](https://nodejs.org/).

After installing Node.js, run the following command to install all required dependencies:

```bash
npm install
```
This command will install all necessary packages listed in the package.json file.

### 3. Run the Project

Once the dependencies are installed, you can run the project with the following command:

```bash
npm start
```

This will create a /build folder containing compiled files for local development.

The project will be available at the following URL:

`http://localhost:3000`

### 4. Prepare the Project for Production (Production Build)

Once you're ready to publish the project, use the following command to build the production-ready version:

```bash
npm docs
```
## Support

If you have any questions or suggestions, feel free to open an issue in the repository or contact me directly [email](mailto:kiselovtimofej@gmail.com) or [telegram](https://t.me/Mofeey).
