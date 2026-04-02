<div align="center">

# 🤖 DocBot AI

### Chat With Any PDF Using AI

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-6E57F7?style=for-the-badge)](https://docbot-blush.vercel.app/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Groq](https://img.shields.io/badge/Groq_AI-FF6B35?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Stop reading. Start asking.**

_Upload any PDF → Ask questions in plain English → Get instant AI-powered answers_

<p align="center">
  <img width="1492" height="917" alt="Screenshot 2026-03-27 081938" src="https://github.com/user-attachments/assets/77067fa4-db4e-4750-b77b-633a82556a83" />
</p>
<!-- Record a GIF using Loom or ScreenToGif showing: upload PDF → type question → see answer -->

</div>

---

## 🤔 What is DocBot AI?

DocBot AI is a **browser-based AI application** that lets you have a conversation with any PDF document. Instead of manually scrolling through a 100-page report, research paper, or contract — just ask it a question.

> Built with **React 19**, **Groq's Llama AI models**, and **PDF.js** for client-side text extraction. All PDF processing happens in your browser — your documents never leave your device until the AI query is sent.

---

## ✨ Features

- 📄 **Upload any PDF** — Drag and drop or click to upload (up to 15MB)
- 🧠 **AI-powered Q&A** — Powered by Groq's ultra-fast Llama models
- 📊 **Auto Document Analysis** — Instantly shows page count, word count, and key info on upload
- 🔒 **Client-side extraction** — PDF text is parsed locally in your browser (privacy first)
- 🎨 **Vintage Minimalist UI** — Clean, distraction-free design with Tailwind CSS
- ⚡ **Lightning fast** — Groq's inference engine gives near-instant responses
- 📱 **Fully responsive** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer              | Technology                            |
| ------------------ | ------------------------------------- |
| **Frontend**       | React 19 (JSX), Vite                  |
| **Styling**        | Tailwind CSS                          |
| **AI Engine**      | Groq SDK (Llama 3 models)             |
| **PDF Processing** | PDF.js (pdfjs-dist) — client-side     |
| **Routing**        | History API (custom, no React Router) |
| **Deployment**     | Vercel                                |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A free [Groq API Key](https://console.groq.com/) (takes 2 minutes)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Nareshgouddev/docbot.git
cd docbot

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Add your keys in .env
# - Groq key
# - Firebase web app config keys

# 5. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
docbot/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx   # Upload UI & home screen
│   │   └── Chat.jsx          # AI chat interface
│   ├── services/
│   │   ├── groqService.js    # Groq AI API integration
│   │   └── pdfService.js     # PDF.js text extraction
│   ├── utils/
│   │   └── index.js          # Shared utilities
│   ├── App.jsx               # Root + routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables (not committed)
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Environment Variables

| Variable                            | Required | Description                                                          |
| ----------------------------------- | -------- | -------------------------------------------------------------------- |
| `VITE_GROQ_API_KEY`                 | ✅ Yes   | Your Groq API key from [console.groq.com](https://console.groq.com/) |
| `VITE_FIREBASE_API_KEY`             | ✅ Yes   | Firebase web API key from Project Settings                           |
| `VITE_FIREBASE_AUTH_DOMAIN`         | ✅ Yes   | Usually `your-project.firebaseapp.com`                               |
| `VITE_FIREBASE_PROJECT_ID`          | ✅ Yes   | Firebase project id                                                  |
| `VITE_FIREBASE_STORAGE_BUCKET`      | ✅ Yes   | Usually `your-project.appspot.com`                                   |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | ✅ Yes   | Firebase sender id                                                   |
| `VITE_FIREBASE_APP_ID`              | ✅ Yes   | Firebase app id from web app config                                  |

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

---

## 📝 Usage Notes

- **PDF size limit:** 15MB
- **Best results:** PDFs with selectable text (not scanned images)
- **Scanned PDFs:** OCR is not included — use text-based PDFs for best results
- **Privacy:** Text is extracted locally in your browser, then sent to Groq for AI processing

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m 'Add: AmazingFeature'

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

**Ideas for contributions:**

- OCR support for scanned PDFs
- Chat history / conversation memory
- Multiple PDF upload support
- Export chat as PDF/text

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

Built with ❤️ by [Naresh Goud Ediga](https://github.com/Nareshgouddev)

⭐ **Star this repo if you found it useful!**

[![Live Demo](https://img.shields.io/badge/Try_It_Live-docbot--blush.vercel.app-6E57F7?style=for-the-badge)](https://docbot-blush.vercel.app/)

</div>
