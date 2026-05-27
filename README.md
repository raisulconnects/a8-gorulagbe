# GoruLagbe — Online Qurbani Hat Platform

A modern web marketplace for browsing and booking Qurbani (sacrificial) animals in Bangladesh. Built with Next.js 16, React 19, MongoDB, and better-auth.

## Features

- Browse cows, goats, and bulls with detailed info (breed, weight, age, price, location)
- Sort animals by price
- User registration & login (email/password + Google OAuth)
- Authenticated user profile
- Featured animals curated by livestock experts
- Qurbani tips and breed guide sections
- Responsive design with Tailwind CSS & daisyUI

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4 + daisyUI 5
- **Authentication:** better-auth (email/password, Google OAuth)
- **Database:** MongoDB (via better-auth MongoDB adapter)
- **Icons:** react-icons
- **Notifications:** react-hot-toast
- **Animations:** animate.css

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Then fill in your MongoDB URI and OAuth credentials

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Environment Variables

| Variable | Description |
|---|---|
| `BETTER_AUTH_SECRET` | Secret key for better-auth |
| `BETTER_AUTH_URL` | Auth callback URL (e.g. http://localhost:3000) |
| `MONGO_DB_URI` | MongoDB connection string |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login & register pages
│   │   ├── login/
│   │   └── register/
│   ├── (main)/          # Main app pages (animals, profile)
│   │   ├── animals/     # All animals + individual [id] page
│   │   └── my-profile/
│   ├── api/auth/        # Auth API route (better-auth handler)
│   ├── layout.js        # Root layout (Navbar + Footer)
│   ├── page.js          # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── AnimalCard.jsx
│   ├── FeaturedAnimals.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   └── Navbar.jsx
├── data/
│   └── animals.json     # Animal listings data
└── lib/
    ├── auth-client.js   # better-auth client config
    ├── auth.js          # better-auth server config
    └── utils.js         # Helper functions (formatPrice, featured)
```
