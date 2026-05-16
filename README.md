# FaizXP

**Your portfolio. Rebooted in 2001.**

FaizXP is a full-screen, Windows XP–inspired portfolio built with Next.js and React. Boot the machine, log in, open apps from the Start menu, drag windows behind the taskbar, and explore work the way an operating system invites you to explore — curious, tactile, and a little nostalgic.

> *A faithful XP-inspired interface, custom-built to showcase my work.*

---

## Meet the developer

| | |
|---|---|
| **Name** | Faiz Ali |
| **Location** | India |
| **Focus** | Full-stack web development, UI/UX, and immersive digital experiences |
| **Email** | [sfaiz.ali.rizvi@gmail.com](mailto:sfaiz.ali.rizvi@gmail.com) |

I build products where clean aesthetics meet strong functionality — fewer releases, more depth, and the kind of polish you feel in motion and interaction, not just in a screenshot.

**Find me online**

- [LinkedIn](https://www.linkedin.com/in/faiz-ali-134610250)
- [GitHub](https://github.com/faizzz2706)
- [Instagram](https://www.instagram.com/faizzz706)

---

## Live demo

**[https://faiz-xp.vercel.app](https://faiz-xp.vercel.app)**

---

## What you get when you “boot” FaizXP

The experience is staged like a real OS session:

| Stage | What happens |
|-------|----------------|
| **Boot** | Startup sequence before the desktop appears |
| **Login** | One-click sign-in to continue |
| **Welcome** | Short handoff into the desktop |
| **Desktop** | Icons, windows, taskbar, and Start menu |

From there, everything behaves the way you would expect from a classic desktop — with modern web tech under the hood.

---

## Features

### Desktop and windows

- Draggable, resizable application windows with XP-style chrome
- Focused vs unfocused window styling (active blue vs softer gradient)
- Windows can slide behind the taskbar; only the title bar stays above it
- Maximize, minimize, close, and z-order focus on click
- Desktop marquee selection (without interfering with window drag)
- Log off and Shut down flows with restart support

### Taskbar and Start menu

- Start button opens a layered Start menu (highest z-index — above windows and taskbar)
- Taskbar buttons reflect focus: active tab for the front window, muted style for the rest
- System tray: Welcome popup toggle, CRT filter, fullscreen, live clock

### Built-in “programs”

| App | Role |
|-----|------|
| **About Me** | Explorer-style window: bio, skills, tools, social links |
| **Contact Me** | Send a message via your mail client (`mailto`) |
| **My Projects** | Project showcase window |
| **My Resume** | Resume viewer / download experience |
| **Paint** | Drawing surface (see credits) |
| **Command Prompt** | Interactive terminal with `help`, `author`, `stack`, `date`, `time`, `ver`, `exit`, and more |
| **External links** | XP-style “Open link” dialog before leaving the site |

### Atmosphere

- Optional **CRT scanline overlay** for a retro monitor feel
- Custom wallpapers, Luna-style gradients, and pixel-faithful UI assets
- Open/close/minimize animations on windows

---

## Skills and stack (from the portfolio)

**Development**

- Frontend and backend development
- REST APIs, authentication, database management
- Data structures and algorithms
- Machine learning (learning / applied interest)
- Problem solving

**Tools**

- VS Code, React.js, Node.js, Express.js, Prisma ORM  
- Git / GitHub, Python, Claude, Cursor  

**This project**

- [Next.js](https://nextjs.org/) 16  
- [React](https://react.dev/) 19  
- CSS Modules (no UI framework — deliberate craft)  
- Font Awesome (icons in select views)  
- Custom window manager logic (`Windows`, `windowBounds`, `OSContext`)

---

## Project structure

```
xp-portfolio/
├── app/                 # Next.js app shell and global styles
├── components/
│   ├── Boot/            # Boot sequence
│   ├── Login/           # Login screen
│   ├── Welcome/         # Post-login welcome
│   ├── Desktop/         # Main OS shell
│   ├── Windows/         # Window chrome, drag, resize
│   ├── Taskbar/         # Taskbar and app buttons
│   ├── StartMenu/       # Start menu
│   ├── About/           # About Me app
│   ├── Contact/         # Contact Me app
│   ├── Projects/        # Projects app
│   ├── Resume/          # Resume app
│   ├── PaintApp/        # Paint integration
│   ├── CmdApp/          # Command Prompt
│   └── …                # Dialogs, tray, boot helpers
├── context/OSContext.js # boot → login → welcome → desktop
├── hooks/               # Timers for boot / welcome
├── utils/windowBounds.js
└── public/              # XP assets, icons, resume files
```

---

## Getting started

**Requirements:** Node.js 18+ recommended

```bash
# Clone the repository
git clone https://github.com/faizzz2706/xp-portfolio.git
cd xp-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production build**

```bash
npm run build
npm start
```

**Lint**

```bash
npm run lint
```

---

## Command Prompt quick reference

Open **Command Prompt** from the Start menu (All Programs) and try:

| Command | Description |
|---------|-------------|
| `help` | List available commands |
| `author` | Credits |
| `stack` | Tech used in FaizXP |
| `date` / `time` | Current date and time |
| `ver` | Version string |
| `clear` | Clear the terminal |
| `exit` | Close the window |

---

## Credits and disclaimer

FaizXP is an **independent personal portfolio**. It is not affiliated with or endorsed by Microsoft.

Visual design and interaction patterns pay homage to **Windows XP**. Logos, artwork, and third-party assets belong to their respective owners and are used here for inspiration, homage, or parody — not as claims of ownership.

Paint functionality references **[JS Paint](https://github.com/1j01/jspaint)** (`github.com/1j01/jspaint`) as noted in the Command Prompt `stack` output.

---

## License

<!-- Add your license (e.g. MIT) or "All rights reserved" -->
**[Specify your license here]**

---

## Author

**Faiz Ali** — developer, designer, builder of FaizXP  

Questions or collaboration: [sfaiz.ali.rizvi@gmail.com](mailto:sfaiz.ali.rizvi@gmail.com)

If this project resonates with you, a star on the repository or a message on LinkedIn goes a long way.

---
*FaizXP v1.0 — built with intention, one window at a time.*
