# wtia

> A terminal-style web-based music player.

**wtia** allows you to list and play your local music files directly in your web browser without installing any dedicated desktop software. It features a nostalgic terminal-inspired UI, vim-like keyboard shortcuts, and beautiful ASCII art.

## ✨ Features

- 🎧 **Local Playback**: Load and play local audio files directly in your browser.
- 💻 **Terminal UI**: Nostalgic command-line interface built with modern web tech.
- ⌨️ **Keyboard Driven**: Fully controllable via keyboard shortcuts (vim-like bindings).
- 🔍 **Quick Search**: Fast filtering for your tracks by title or artist.
- 🎨 **Themes**: Light and dark mode support.
- 🖼️ **ASCII Art**: Beautiful ASCII representations for empty states and no-music screens.
- 📦 **No Backend Required**: 100% client-side application.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: Zustand
- **Audio Parsing**: `music-metadata`
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

If you just want to listen to music, you can use the deployed web version on Vercel (no installation required).
If you want to run the project locally or contribute, you need:

- [Node.js](https://nodejs.org/) (version 22 or higher)
- [pnpm](https://pnpm.io/) (Fast, disk space efficient package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/wtia.git
   cd wtia
   ```

2. Install dependencies:

   ```bash
   pnpm i
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

## ⌨️ Keyboard Shortcuts

The app is designed to be heavily keyboard-driven. Here are the available shortcuts:

### Global Navigation

| Key                | Action                 |
| :----------------- | :--------------------- |
| `1`                | Focus Header panel     |
| `2`                | Focus Music List panel |
| `3`                | Focus Player panel     |
| `4`                | Focus Footer panel     |
| `s`                | Open Settings dialog   |
| `?` or `Shift + /` | Open Search input      |
| `Esc`              | Close Search input     |

### Player Controls

_(Make sure the Player panel is focused by pressing `3`)_

| Key     | Action            |
| :------ | :---------------- |
| `Space` | Play / Pause      |
| `h`     | Previous Track    |
| `l`     | Next Track        |
| `u`     | Rewind 5 seconds  |
| `i`     | Forward 5 seconds |
| `y`     | Volume Down       |
| `o`     | Volume Up         |
| `m`     | Mute / Unmute     |

## 📁 Project Structure

```text
.
├── public/             # Static assets (fonts, favicons)
├── src/
│   ├── ascii/          # ASCII art images and text
│   ├── components/     # UI components (Terminal layout, UI primitives, themes)
│   │   ├── terminal/   # Core terminal layout (Header, Footer, Lists, Player)
│   │   ├── themes/     # Theme provider and toggle
│   │   └── ui/         # shadcn/ui components (Button, Slider, Dialog, etc.)
│   ├── consts/         # Constants and shortcut definitions
│   ├── lib/            # Utility functions
│   ├── state/          # Zustand stores (musics, settings, UI refs)
│   ├── App.tsx         # Main application component
│   ├── global.css      # Global Tailwind CSS imports
│   └── main.tsx        # Application entry point
├── index.html          # Vite HTML entry
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Since this is an open-source project, here is a simple guide to get you started:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bugfix (`git checkout -b feature/amazing-feature`).
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`).
4. **Push to the branch** (`git push origin feature/amazing-feature`).
5. **Open a Pull Request**.

## 📄 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026 noonefr69

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
