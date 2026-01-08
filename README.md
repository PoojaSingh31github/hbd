# Happy Birthday Final 🎂

A beautiful, animated birthday celebration website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ **Beautiful Animations** - Floating balloons, confetti, sparkles, and smooth transitions
- 🎵 **Background Music** - Optional music player with mute controls
- 🎂 **Interactive Cake** - Click to cut the cake with confetti celebration
- 📸 **Memory Gallery** - Photo gallery with lightbox view
- 💌 **Personal Note** - Heartfelt message section with animated reveal
- 📱 **Responsive** - Works on all devices

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Change Recipient Name & Details

Edit `src/utils/constants.ts`:

```typescript
export const BIRTHDAY_CONFIG = {
  recipientName: "Your Name Here",
  relationship: "brother", // or sister, friend, etc.
  fromName: "Your Sister",
  birthdayDate: "9th January",
};
```

### Add Your Photos

Replace the placeholder images in `src/utils/constants.ts`:

```typescript
export const MEMORIES: Memory[] = [
  {
    id: 1,
    image: "/path/to/your/photo.jpg",
    caption: "Your memory caption",
    year: "2023",
  },
  // ... more memories
];
```

### Customize Colors

Edit `src/index.css` to change the color scheme.

### Change Music

Update the music URL in `src/utils/constants.ts`:

```typescript
export const MUSIC_CONFIG = {
  url: "/path/to/your/music.mp3",
  volume: 0.3,
  loop: true,
};
```

## Project Structure

```
src/
├── assets/          # Images, music, GIFs
├── components/
│   ├── animations/  # Confetti, balloons, sparkles
│   ├── common/      # Reusable UI components
│   └── sections/    # Page sections (Hero, Cake, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
└── utils/           # Constants and helpers
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Canvas Confetti
- Lucide Icons

## License

Made with ❤️ for celebrating special people.
