# DocuChat AI

AI-powered PDF chat with a vintage, minimalist UI. Upload a PDF, extract its text in the browser, and ask questions powered by Groq Llama models.

## Highlights

- **PDF-to-text extraction** via PDF.js (client-side)
- **Conversational Q&A** with document context using Groq SDK
- **Auto analysis summary** after upload (pages, word count, key info)
- **Responsive, vintage UI** with Tailwind CSS
- **Lightweight routing** with History API for `/` and `/chat`

## Tech Stack

- **Frontend**: React 19 (JSX)
- **Styling**: Tailwind CSS
- **AI**: Groq SDK (Llama models)
- **PDF**: pdfjs-dist (browser extraction)
- **Build**: Vite

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Add environment variables

```bash
echo "VITE_GROQ_API_KEY=your_groq_api_key_here" > .env
```

3. Start the dev server

```bash
npm run dev
```

4. Open http://localhost:5173

## Environment Variables

| Name              | Required | Description                         |
| ----------------- | -------- | ----------------------------------- |
| VITE_GROQ_API_KEY | Yes      | Groq API key used by the client SDK |

## Routes

- `/` Landing page
- `/chat` PDF chat interface

## Project Structure

```
src/
	App.jsx
	main.jsx
	index.css
	components/
		LandingPage.jsx
		Chat.jsx
	services/
		groqService.js
		pdfService.js
	utils/
		index.js
```

## Usage Notes

- **PDF size limit**: 15MB
- **Best results**: PDFs with selectable text (not image-only scans)
- **Privacy**: text is extracted locally, then sent to Groq for AI responses

## Build & Preview

```bash
npm run build
npm run preview
```

## Troubleshooting

- **Blank responses or errors**: verify VITE_GROQ_API_KEY in .env
- **Upload fails**: ensure the file is a valid PDF and under 15MB
- **Scanned PDFs**: OCR is not included; use text-based PDFs for best results

---

Built with modern web tools for fast document understanding.
