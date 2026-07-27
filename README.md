Day 1: Setup & File Ingestion

    Goal: Get files from the user's computer into the app.
    Tasks:
        Initialize Vite + React + TypeScript.
        Create a file picker component (allow selecting single files or a whole folder).
        Read the files and store them in your global state.
        Tech tip: Use Zustand for state management. It’s much faster to set up than Redux.

Day 2: Metadata Parsing & Audio Engine

    Goal: Read the tags and actually play the sound.
    Tasks:
        Install music-metadata-browser. Parse the metadata for every file added on Day 1.
        Create an AudioPlayer hook/class. Wrap the native HTML5 <audio> element.
        Implement basic controls: Play, Pause, Next, Previous, Seek.
        Handle the onEnded event to auto-play the next track.

Day 3: The Terminal UI (CSS & Layout)

    Goal: Make it look like a terminal.
    Tasks:
        Set up a monospace font (e.g., Fira Code, JetBrains Mono, or VT323).
        Build the layout:
            Top bar: Now Playing (Title - Artist).
            Left/Main panel: The Playlist (scrollable list of tracks).
            Bottom bar: Playback controls and progress bar.
        Style the progress bar to look like a terminal loading bar (e.g., [=======>      ] 45%).

Day 4: Keyboard & Vim Keybindings

    Goal: Make it fully navigable without a mouse.
    Tasks:
        Create a global keydown event listener.
        Implement a "Selected Index" state for the playlist.
        Vim Mappings:
            j / Down: Move selection down.
            k / Up: Move selection up.
            Enter / l: Play selected track.
            Space: Play / Pause.
            h: Seek backward 5s.
            gg: Go to top of playlist.
            G: Go to bottom of playlist.
            /: Focus a search input to filter the playlist.
            Esc: Blur search input / clear selection.

Day 5: Mouse Support & Interactivity

    Goal: Ensure mouse users aren't left out.
    Tasks:
        Add onClick handlers to playlist items to play them and update the "Selected Index".
        Make the progress bar clickable/draggable to seek.
        Add a volume slider (style it like a terminal meter: VOL: [||||||--]).
        Add hover effects to playlist items (e.g., invert colors like a terminal highlight).

Day 6: Polish, Edge Cases & Visuals

    Goal: Make it feel premium and handle errors.
    Tasks:
        Handle missing metadata (display "Unknown Artist" if tags are missing).
        Add the CRT/Scanline CSS effects.
        Ensure the UI doesn't break if the user adds 1,000 songs (implement virtualization if the list gets too long, or just use CSS overflow-y: auto).
        Add a blinking cursor █ at the end of the "Now Playing" text.

Day 7: Testing, Refactoring & Open Source Prep

    Goal: Ship it.
    Tasks:
        Test on Chrome, Firefox, and Safari (Safari handles some audio codecs differently).
        Write a clean README.md with screenshots, a list of Vim keybindings, and instructions on how to run it.
        Add an MIT or GNU GPL LICENSE file.
        Deploy to Vercel or Netlify (it's a static site, so it's free and takes 2 minutes).
        Push to GitHub.
