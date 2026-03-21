# 🥃 Birthday Invite — Setup Guide

A vintage-styled birthday party invite built with Next.js.

---

## 📁 Files in This Project

```
birthday-invite/
├── app/
│   ├── layout.js        ← HTML shell + metadata
│   ├── page.js          ← All content & logic
│   ├── page.module.css  ← All styling
│   └── globals.css      ← Fonts & base styles
├── next.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Step-by-Step Setup

### STEP 1 — Install Prerequisites (one time only)

1. Install **Node.js** (v18+): https://nodejs.org
2. Install **VS Code**: https://code.visualstudio.com
3. Install **Git**: https://git-scm.com

---

### STEP 2 — Set Up the Project in VS Code

1. Create a folder on your computer called `birthday-invite`
2. Copy all the downloaded files into that folder (keeping the folder structure)
3. Open VS Code → **File → Open Folder** → select `birthday-invite`
4. Open the Terminal in VS Code: **Terminal → New Terminal**
5. Run:
   ```bash
   npm install
   ```
6. Then start the dev server:
   ```bash
   npm run dev
   ```
7. Open your browser to **http://localhost:3000** — you should see the invite! 🎉

---

### STEP 3 — Customize Your YouTube Playlist

1. In VS Code, open `app/page.js`
2. Find this line near the top:
   ```js
   const YT_PLAYLIST = 'PLDIoUOhQQPlXr63I_ewno6lf0GB5KNmkH';
   ```
3. Replace the playlist ID with yours:
   - Go to your YouTube playlist
   - Copy the URL — it looks like:
     `https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxxxx`
   - Paste just the part after `list=` into the quotes
4. Save the file — the page will auto-refresh!

---

### STEP 4 — Push to GitHub

1. Go to **https://github.com** → Sign in → Click **New Repository**
2. Name it `birthday-invite` → Click **Create repository**
3. Back in VS Code terminal, run these commands one by one:
   ```bash
   git init
   git add .
   git commit -m "Initial birthday invite"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/birthday-invite.git
   git push -u origin main
   ```
   *(Replace YOUR_USERNAME with your GitHub username)*

---

### STEP 5 — Deploy to Vercel

1. Go to **https://vercel.com** → Sign up/in with your GitHub account
2. Click **"Add New Project"**
3. Click **"Import"** next to your `birthday-invite` repo
4. Leave all settings as default → Click **"Deploy"**
5. Wait ~1 minute → Vercel gives you a live URL like:
   `https://birthday-invite-xyz.vercel.app`

**That's it! 🎉 Share that URL with your guests.**

---

### STEP 6 — Making Changes Later

Every time you edit files and want to update the live site:
```bash
git add .
git commit -m "Update invite"
git push
```
Vercel automatically deploys every push to GitHub. ✅

---

## 🎵 Music Notes

- The floating **♫ button** (bottom-right) opens a YouTube player
- Music requires user interaction to play (browser security policy)
- Replace `YT_PLAYLIST` in `page.js` with any YouTube playlist ID

## 📞 Questions?

If something doesn't work, double-check:
- Node.js is installed (`node --version` in terminal)
- You're in the right folder when running `npm install`
- All files are in the correct locations (see folder structure above)
