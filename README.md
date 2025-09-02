# Collabrix

Collabrix is a collaborative whiteboard application inspired by Miro, built with modern web technologies.

## 🎥 Video Walkthrough

https://github.com/user-attachments/assets/343919c1-5708-41d1-a3e5-9ff17ab811d0

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: [Convex](https://www.convex.dev/)
- **Real-time Collaboration**: [Liveblocks](https://liveblocks.io/)

## Deployment

The application is deployed on Vercel.  
👉 [Check it out here](https://collabrix-hazel.vercel.app/)

## Getting Started

Follow the steps below to set up the project locally.

### Prerequisites

- Node.js (>= 14.x)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/collabrix
   cd collabrix
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Environment variables:**
   Create a `.env.local` file in the root directory. You can check `.env.example` for reference.

4. **Clerk Setup:**
   - Enable Organization from "Organization settings".
   - Add a JWT Template named "convex".
   - Add `org_id` and `org_role` inside **Claims**.
   - Update `auth.config.js` inside `/convex` with the correct issuer.

5. **Convex Setup:**
   ```sh
   npx convex dev
   ```

6. **Start the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Real-time collaboration**: Multiple users can work together on the same board.
- **Interactive UI**: Responsive, intuitive design for seamless use.
- **Scalable backend**: Convex for backend logic and data storage.
- **Live updates**: Real-time sync with Liveblocks.

### Additional Features

- **Keyboard Shortcuts**:
  - Move selected layers.
  - Duplicate layers (`Ctrl + D`).
  - Focus on search input quickly.

- **Enhanced Selection Tool**:
  - Duplicate icon in selection box.
  - Select fully inside rectangle.
  - Keyboard shortcuts for insertion.

- **Board Creation Limit**:
  - Users can create up to 5 boards per organization.

- **Reset Camera**:
  - Button to reset the canvas position after scrolling.

- **Color Picker**:
  - Infinite combinations with debounced input to reduce undo/redo noise.

- **Export as PNG**:
  - Export boards as PNG for sharing.


  ## 🔄 Updates
- Migrated from **Next.js 14 → Next.js 15**
- Integrated latest **Clerk authentication flow**
- Updated **Convex functions** for better compatibility and performance


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
