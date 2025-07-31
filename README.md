# JTL Security & Safety Limited – Frontend

This is the **frontend application** for
[JTL Security & Safety Limited](https://jtlsecurity.com.ng), a corporate
security company website built using **React (Vite)** and styled with **Tailwind
CSS**.

The website provides information about the company's services, training academy,
job opportunities, and contact details. It is optimized for performance, SEO,
and responsive design across all devices.

---

## 🚀 Features

- **Modern UI/UX**: Clean, corporate design aligned with JTL Security branding.
- **Responsive Layout**: Fully mobile-friendly design with Tailwind CSS.
- **Service Showcase**: Dedicated sections for guard services, armed escorts,
  event security, and more.
- **Training Academy Page**: Highlights in-house industrial training programs.
- **Careers Section**: Job listings with an application form.
- **Contact Form**: Integrated contact form connected to backend API
  (Node.js/Express).
- **SEO Optimized**: Meta tags, Open Graph, and fast loading speed.
- **Secure Deployment**: Hosted with SSL encryption.

---

## 🛠 Tech Stack

**Frontend:**

- [React (Vite)](https://vitejs.dev/) – Fast React build tool
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Axios](https://axios-http.com/) – For API requests
- [React Router](https://reactrouter.com/) – Client-side routing

**Design & Branding:**

- Custom brand palette (Primary Blue: `#0074C2`, Dark Navy: `#0A2342`)
- Typography: Merriweather (headings), Roboto (body), Playfair Display
  (taglines)

**Backend (API Integration):**

- Node.js + Express (separate repo)
- Nodemailer for email handling (contact & careers forms)

---

## 📂 Project Structure

jtl-security-frontend/ ├── public/ # Static assets (logo, favicon) ├── src/ │
├── assets/ # Images, icons │ ├── components/ # Reusable UI components (Navbar,
Hero, Services, Footer) │ ├── pages/ # Page components (Home, About, Services,
Training, Careers, Contact) │ ├── styles/ # Global CSS/Tailwind configuration │
├── App.jsx # Main app component │ └── main.jsx # React entry point ├──
tailwind.config.js # Tailwind configuration └── package.json

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/Johnpaulabraham/jtl-security-frontend.git
cd jtl-security-frontend


2️⃣ Install dependencies:
npm install


3️⃣ Run the development server:
npm run dev
Visit http://localhost:5173 to view the site locally.


🔧 Build for Production
npm run build
This generates an optimized production build in the /dist folder.

Deploy the contents of /dist to Vercel, Netlify, or any static hosting provider.


🌍 Deployment
Frontend Hosting: Vercel or Netlify (auto-deploy with GitHub)
Backend API: Render or Railway (Node.js/Express)
Domain & SSL: www.jtlsecurity.com.ng (custom domain with HTTPS)



📌 Branding Guidelines
Primary Colors:
Primary Blue: #0074C2
Dark Navy: #0A2342
Accent Blue: #1A8EDB
Silver Grey: #C0C0C0
White: #FFFFFF

Fonts:
Headings: Merriweather, serif
Body: Roboto, sans-serif
Taglines: Playfair Display, serif (italic)



🔒 Security Best Practices
Use HTTPS on all deployments.
Validate and sanitize form inputs.
Secure API endpoints with rate-limiting and proper CORS settings.
Keep dependencies updated.



📬 Contact
For inquiries or contributions, reach out via:
📧 Email: jtlsecltd@gmail.com
📞 Phone: +234 704 113 5965 | +234 802 624 4674



🔒 License
© 2025 JTL Security & Safety Limited. All Rights Reserved.
This project is proprietary and may not be copied, modified, or distributed without explicit written permission from JTL Security & Safety Limited. Unauthorized use or reproduction of this code or design is strictly prohibited.
```
