# AI Vendor Risk Analyst

An independent risk assessment tool for evaluating AI-powered applications, meeting bots, transcription tools, copilots, and SaaS AI features before deployment.

## 🎯 What This Does

This tool helps organizations prevent incidents like:
- Unauthorized meeting bots joining confidential meetings
- Transcribing sensitive information without permission
- Auto-sharing transcripts or recordings
- Data exfiltration through AI integrations

**Key Feature:** Prioritizes real-world user experiences from Reddit, forums, and social media over vendor marketing claims.

## 🔍 Assessment Methodology

The tool evaluates AI vendors across seven risk dimensions:

1. **Functionality & Integration Surface** (15%)
2. **Data Sensitivity, Handling & Usage** (25%)
3. **Access Model & Administrative Controls** (20%)
4. **Security & Compliance Posture** (15%)
5. **Legal, Confidentiality & Privilege** (15%)
6. **Community & Real-World Reports** (10%)
7. **The Fireflies Test** (Special Category for meeting bots)

## 📊 Output Reports

Each assessment generates two reports:

1. **Executive Briefing** - Plain-language summary for leadership
2. **Technical Risk Assessment** - Detailed analysis for IT, security, and compliance teams

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ installed
- An Anthropic API key (get one at https://console.anthropic.com/)

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to: http://localhost:3000

## 🌐 Deployment to Vercel

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `ANTHROPIC_API_KEY`
   - Click "Deploy"

Your app will be live at: `https://your-project-name.vercel.app`

## 🔧 How to Use

1. **Fill out the assessment form** with your organization's context:
   - Data sensitivity requirements
   - Regulatory obligations
   - Systems to integrate with
   - Administrative controls
   - User scope

2. **Enter the vendor/app name** you want to assess (e.g., "Fireflies.ai", "Otter.ai")

3. **Click "Analyze Vendor Risk"**

4. **Review the results**:
   - Executive Briefing (for leadership decisions)
   - Technical Report (for IT/security teams)
   - Risk score and rating
   - Recommended controls
   - Go/No-Go recommendation

5. **Download the report** as JSON for your records

## 🎯 Special Focus: Meeting Bots & Transcription Tools

The tool applies the **"Fireflies Test"** to any tool that:
- Uses meeting bots
- Auto-joins meetings
- Records/transcribes conversations
- Reads calendars
- Sends transcripts automatically

These tools start at **HIGH RISK** until proven safe, with automatic upgrade to **CRITICAL RISK** if:
- Bots can join meetings without all participants knowing
- Transcripts can be auto-shared
- Community reports show "silent guest" behavior

## 🔒 Privacy & Security

- **No data retention**: Assessments are not stored (session-only)
- **No authentication required**: Use anonymously
- **Research-focused**: Searches public sources only
- **API calls**: Only to Anthropic Claude for analysis

## 📚 Research Sources

The tool searches:
- Reddit (r/sysadmin, r/msp, r/cybersecurity, r/privacy)
- Twitter/X for incident reports
- Hacker News discussions
- Security forums and blogs
- App store reviews
- News articles and legal commentary
- Academic research and security papers

## ⚠️ Important Notes

- This tool provides risk analysis, **not legal advice**
- Results are based on publicly available information
- Recommendations are conservative and focus on protecting confidentiality
- Analysis typically takes 2-3 minutes per vendor
- Always verify findings with the vendor directly

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **AI**: Anthropic Claude Sonnet 4.5 (with web search)
- **Deployment**: Vercel-ready

## 📝 License

This is a free tool to help organizations make informed decisions about AI vendor risk.

## 🤝 Contributing

Feel free to fork and modify for your organization's needs.

## 📧 Support

For issues or questions, refer to the Anthropic documentation at https://docs.anthropic.com/

---

**Remember**: The goal is to help organizations prevent unauthorized access to confidential information while still enabling productive use of AI tools.
