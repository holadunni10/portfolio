# Oladunni Oluwasegun Emmanuel — Portfolio

Personal portfolio website for **Oladunni Oluwasegun Emmanuel** — Teacher, Counselor, Graphic Designer & Media Officer.

🌐 **Live site:** [https://holadunni10.github.io/portfolio](https://holadunni10.github.io/portfolio)

---

## 📁 Project Structure

```
portfolio/
├── index.html        ← Main HTML page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← All interactions & animations
└── README.md
```

---

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in as **holadunni10**
2. Click **New repository**
3. Name it `portfolio` (or `holadunni10.github.io` for a root URL)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload Your Files
**Option A — Using GitHub Web Interface:**
1. Open your new repository
2. Click **Add file → Upload files**
3. Upload `index.html`, the `css/` folder, and the `js/` folder
4. Click **Commit changes**

**Option B — Using Git (recommended):**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/holadunni10/portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://holadunni10.github.io/portfolio`

---

## ✏️ Customising Your Portfolio

| What to update | Where |
|---|---|
| Your name & bio | `index.html` → `#about` section |
| Projects | `index.html` → `#projects` section |
| Email address | `index.html` → `#contact` section & footer |
| Social links | All `href` attributes with `@holadunn10` handles |
| Stats (years, students) | `index.html` → `.hero-stats-grid` |
| Colours & fonts | `css/style.css` → `:root` variables |

---

## 📬 Contact Form

The contact form currently **simulates a send** (no backend). To make it actually send emails, integrate one of these free services:

- **[Formspree](https://formspree.io)** — change `<form>` action to your Formspree endpoint
- **[EmailJS](https://emailjs.com)** — add their SDK and configure in `js/main.js`
- **[Web3Forms](https://web3forms.com)** — free, no backend required

---

## 📞 Contact

- **Phone / WhatsApp:** +234 810 812 5927
- **GitHub:** [@holadunni10](https://github.com/holadunni10)
- **Instagram:** [@holadunn10](https://instagram.com/holadunn10)
- **Twitter/X:** [@holadunn10](https://twitter.com/holadunn10)

---

*Built with pure HTML, CSS & JavaScript — no frameworks, no dependencies.*
