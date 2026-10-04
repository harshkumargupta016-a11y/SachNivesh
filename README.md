# SachNivesh – Financial Content Intelligence & Content Literacy Platform

**SachNivesh** (*सच निवेश*) is an AI-powered financial content literacy assistant designed to protect retail investors from financial fraud, fake Telegram/WhatsApp stock tip channels, misleading finfluencers, and unregistered advisory schemes.

Aligned with the **IIT BHU Problem Statement on "Misinformation & Content Literacy"**, SachNivesh helps users **"Think. Verify. Then Invest."** by evaluating raw financial content before they act or transfer money.

---

## 🌟 Key Features

### 1. Three Central Content Literacy Pillars
- **Claim Evidence-Checker:** Extracts financial promises (e.g., *"5% daily return"*, *"multibagger in 3 days"*) and cross-checks them against realistic market benchmarks (Nifty 50 historical CAGR, risk-free interest rates) and SEBI Investment Adviser Regulations, 2013.
- **Promotion vs Education Classifier:** Identifies hidden affiliate links, paid tip subscriptions, sponsored calls, pump-and-dump triggers, and scarcity bias vs genuine neutral educational content.
- **Source Tracer:** Traces origin signals of viral WhatsApp forwards, Telegram tip channels, and YouTube finfluencer claims, checking stated registration numbers against official SEBI/RBI directories.

### 2. Interactive "Pause & Verify" Studio
- **Multi-Format Input:** Supports plain text messages, screenshot OCR, voice queries in regional Indian languages, and payment handle / UPI ID verification (`@valid` handle checker).
- **Client-Side Privacy Anonymization:** Adheres to DPDP Act privacy principles with zero data persistence by default. Personal Identifiable Information (PII) like phone numbers, account numbers, names, and personal UPI handles are masked in the browser before external processing.
- **Google Gemini LLM Integration:** Uses Google Gemini (`gemini-2.5-flash`) for localized, explainable, and multi-language content risk analysis.

### 3. Spot-the-Trap Literacy Game
- A 60-second interactive challenge for users to practice spotting pump-and-dump schemes, personal GPay handle fee requests, and unverified APK download links.

### 4. Help Centre & Grievance Redressal
- Dedicated Help Centre (`/help`) with Frequently Asked Questions (FAQs) and direct links to official complaint portals:
  - **National Cybercrime Helpline:** `1930` / [cybercrime.gov.in](https://cybercrime.gov.in)
  - **SEBI SCORES Portal:** [scores.sebi.gov.in](https://scores.sebi.gov.in)
  - **RBI Sachet Portal:** [sachet.rbi.org.in](https://sachet.rbi.org.in)
  - **IRDAI Bima Bharosa Portal:** [bimabharosa.irdai.gov.in](https://bimabharosa.irdai.gov.in)

### 5. Multi-Language Support
- Full reactive translation for **English**, **Hindi (हिन्दी)**, **Hinglish**, **Marathi (मराठी)**, **Gujarati (ગુજરાતી)**, and **Tamil (தமிழ்)**.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) & React 19
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React / Lucide
- **AI & Natural Language Processing:** Google Gemini API (`gemini-2.5-flash`) & Local Rule Engine
- **Testing:** Native Node.js Test Runner (`node --test`)
- **Deployment:** Vercel (`vercel.json`)

---

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshkumargupta016-a11y/SachNivesh.git
   cd SachNivesh
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables (Optional):**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run Test Suite:**
   ```bash
   npm test
   ```

---

## 🌐 Deploy on Vercel

SachNivesh is pre-configured for Vercel deployment with `vercel.json`:

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Add `GEMINI_API_KEY` under Environment Variables in Vercel.
4. Click **Deploy**.

---

## ⚖️ Disclaimer & Privacy

- **Educational Purpose Only:** SachNivesh provides educational risk signals and financial content literacy analysis. It is **not** a SEBI-registered investment adviser and never provides stock recommendations or trading calls.
- **Privacy First:** All data anonymization runs locally on the user's browser in compliance with India's DPDP Act.
