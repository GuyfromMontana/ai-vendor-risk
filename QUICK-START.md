# AI VENDOR RISK ANALYST - QUICK START

## What I Built For You

A complete web application that helps businesses evaluate AI tools BEFORE they deploy them, with a special focus on finding REAL user complaints and issues from Reddit, forums, and social media - not just vendor PR.

## Key Features

✅ **Real-World Intelligence**: Searches Reddit, Twitter, forums for actual user problems
✅ **Comprehensive Risk Scoring**: 7 risk dimensions (0-100 scale)
✅ **The Fireflies Test**: Special scrutiny for meeting bots and transcription tools
✅ **Dual Reports**: Executive briefing + technical assessment
✅ **No Login Required**: Anyone can use it
✅ **No Data Storage**: Privacy-focused, session-only
✅ **Download Reports**: Save assessments as JSON

## What Makes This Different

Most risk tools just read vendor security pages and marketing. This tool:
- Digs into Reddit threads where people complain
- Finds Twitter posts about unauthorized bots
- Searches forums for admin confusion stories
- Looks for actual security incidents
- Is SKEPTICAL of vendor claims

## Files You Have

```
ai-risk-analyst/
├── SETUP-GUIDE.md          ← START HERE - step-by-step instructions
├── README.md               ← Full documentation
├── app/
│   ├── page.tsx           ← Main page
│   ├── layout.tsx         ← App layout
│   ├── globals.css        ← Styles
│   └── api/
│       └── analyze/
│           └── route.ts   ← Analysis API (Claude integration)
├── components/
│   ├── AssessmentForm.tsx ← The 5-question form
│   └── ResultsDisplay.tsx ← Report display
├── package.json           ← Dependencies
├── .env.example           ← API key template
└── [config files]         ← TypeScript, Tailwind, etc.
```

## How To Get Started

### FASTEST WAY (Local Development):

1. Open Command Prompt in the `ai-risk-analyst` folder
2. Run: `npm install`
3. Create `.env` file with your Anthropic API key
4. Run: `npm run dev`
5. Open: http://localhost:3000

**See SETUP-GUIDE.md for detailed steps!**

### TO SHARE WITH OTHERS (Deploy to Vercel):

1. Push code to GitHub (use GitHub Desktop - it's easy)
2. Go to https://vercel.com and connect your GitHub
3. Add your `ANTHROPIC_API_KEY` as environment variable
4. Click Deploy
5. Share the URL with friends and businesses!

## How It Works

1. **User fills out 5 questions** about their organization:
   - Data sensitivity
   - Regulatory requirements
   - Systems to integrate
   - Admin controls
   - User scope

2. **User enters vendor name** (e.g., "Fireflies.ai", "Otter.ai", "Fathom")

3. **Claude searches extensively** for:
   - Reddit complaints (r/sysadmin, r/msp, r/privacy)
   - Forum posts about problems
   - News about security incidents
   - Twitter reports of unauthorized behavior
   - App store reviews with warnings

4. **Generates two reports**:
   - **Executive Briefing**: Plain English for leadership
   - **Technical Report**: Detailed analysis for IT/security

5. **Provides clear recommendation**:
   - Approve
   - Approve with Controls
   - Pilot Only
   - Do Not Approve

## Special Focus: Meeting Bots

The app is TOUGH on meeting bots because they're the highest risk. Any tool that can:
- Join meetings automatically
- Transcribe conversations
- Share transcripts

Gets the **"Fireflies Test"** which:
- Starts at HIGH RISK
- Upgrades to CRITICAL if it can join meetings without consent
- Looks specifically for Reddit posts about "uninvited bots"
- Checks if admins can actually prevent auto-joining

## Example Use Cases

Perfect for assessing:
- Fireflies.ai, Otter.ai, Fathom (meeting bots)
- Microsoft Copilot, GitHub Copilot
- ChatGPT Enterprise, Claude
- Grammarly Business
- Any AI tool that touches company data

## Cost

- **Development**: FREE (Next.js is free)
- **Hosting**: FREE on Vercel
- **API Costs**: Only pay for Anthropic API usage
  - ~$0.10-0.50 per analysis (varies by depth)
  - Claude Sonnet 4.5 pricing: https://www.anthropic.com/pricing

## Tech Stack

- **Frontend**: Next.js 15 + React + Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: Anthropic Claude Sonnet 4.5
- **Hosting**: Vercel (recommended)
- **Database**: None needed (no data storage)

## Customization Ideas

You could easily add:
- PDF export of reports
- Email reports to stakeholders
- Save assessments to Supabase (if you want history)
- Custom risk frameworks for specific industries
- Integration with your CRM

## Important Notes

✅ No branding - completely generic
✅ No authentication needed
✅ No logging or tracking
✅ Skeptical of vendor claims
✅ Focuses on real user experiences
✅ Conservative risk posture

## Support Resources

- **Setup Problems**: See SETUP-GUIDE.md
- **Code Questions**: See README.md
- **Anthropic API**: https://docs.anthropic.com/
- **Next.js Help**: https://nextjs.org/docs
- **Vercel Deployment**: https://vercel.com/docs

## Next Steps

1. Read SETUP-GUIDE.md
2. Get it running locally first
3. Test with a few vendors
4. Deploy to Vercel
5. Share with friends and businesses!

---

**You now have a professional AI risk assessment tool that cuts through vendor marketing to find real issues. Use it to help businesses make informed decisions about AI tools!**
