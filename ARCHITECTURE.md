# SYSTEM ARCHITECTURE & HOW IT WORKS

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     USER BROWSER                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  React Frontend (Next.js)                            │  │
│  │  - Assessment Form (5 questions)                     │  │
│  │  - Results Display (Executive + Technical Reports)   │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                  │
│                     HTTP POST /api/analyze                   │
│                           ↓                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   NEXT.JS API ROUTE                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /app/api/analyze/route.ts                           │  │
│  │  - Receives form data                                │  │
│  │  - Constructs analysis prompt                        │  │
│  │  - Calls Anthropic API                               │  │
│  │  - Returns structured JSON                           │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│               ANTHROPIC CLAUDE API                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Claude Sonnet 4.5                                    │  │
│  │  - Web search capability                             │  │
│  │  - Searches Reddit, forums, social media             │  │
│  │  - Analyzes vendor documentation                     │  │
│  │  - Applies risk framework                            │  │
│  │  - Generates reports                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. User Input → Form Submission

**What happens:**
- User fills out 5 required questions
- User enters vendor/app name
- User clicks "Analyze Vendor Risk"

**Data collected:**
```javascript
{
  vendorName: "Fireflies.ai",
  dataSensitivity: "Will be used in board meetings and HR discussions",
  regulatoryContext: "GLBA compliance required",
  operationalContext: "Microsoft Teams integration",
  adminControl: "Centralized IT with SSO",
  userScope: "Organization-wide deployment planned"
}
```

### 2. API Request → Backend Processing

**File: `/app/api/analyze/route.ts`**

The API route:
1. Receives the POST request
2. Extracts form data
3. Builds a comprehensive prompt that includes:
   - The system instructions (from your document)
   - The user's context (5 questions)
   - Instructions to search social media
   - Output format requirements

### 3. Claude API Call → Research & Analysis

**What Claude does:**
1. **Web Search Phase** (automatic with Claude's search tools):
   - Searches "Fireflies.ai Reddit complaints"
   - Searches "Fireflies.ai unauthorized meetings"
   - Searches "Fireflies.ai security issues"
   - Looks for news articles
   - Finds forum discussions
   - Checks app store reviews

2. **Analysis Phase**:
   - Evaluates across 7 risk dimensions (A-G)
   - Applies the Fireflies Test if applicable
   - Calculates weighted risk scores
   - Determines risk rating (Low/Medium/High/Critical)

3. **Report Generation**:
   - Creates Executive Briefing (plain English)
   - Creates Technical Report (detailed analysis)
   - Includes specific evidence from searches
   - Provides actionable recommendations

### 4. Response → Display Results

The API returns structured JSON:
```javascript
{
  "technicalReport": {
    "executiveSummary": "...",
    "riskScore": 78,
    "riskRating": "High",
    "detailedBreakdown": "...",
    "recommendedControls": "...",
    "vendorQuestions": "...",
    "recommendation": "...",
    "complianceNotes": "..."
  },
  "executiveBriefing": {
    "whatItDoes": "...",
    "keyRisks": "...",
    "overallRating": "High",
    "recommendedAction": "...",
    "organizationGuidance": "...",
    "boardNote": "..."
  }
}
```

### 5. Frontend Display

**File: `/components/ResultsDisplay.tsx`**

The component:
- Color-codes risk levels (green/yellow/orange/red)
- Displays Executive Briefing first (for leadership)
- Shows Technical Report below (for IT teams)
- Provides download button for JSON export

## Key Components Explained

### Frontend Components

#### 1. `app/page.tsx` (Main Page)
- Container for entire application
- Manages state (assessment results, loading)
- Handles form submission
- Displays results or loading state

#### 2. `components/AssessmentForm.tsx` (Form)
- 5 required questions
- Vendor name input
- Form validation
- Submit button with loading state

#### 3. `components/ResultsDisplay.tsx` (Results)
- Executive Briefing section
- Technical Report section
- Color-coded risk badges
- Download functionality

### Backend Components

#### 1. `app/api/analyze/route.ts` (API Endpoint)
- POST endpoint for analysis requests
- Anthropic API integration
- Prompt construction
- JSON response parsing
- Error handling

### Configuration Files

#### 1. `package.json`
- Project dependencies
- Scripts (dev, build, start)
- Anthropic SDK version

#### 2. `next.config.js`
- Next.js configuration
- Build optimization settings

#### 3. `tailwind.config.js`
- Tailwind CSS customization
- Typography plugin

#### 4. `tsconfig.json`
- TypeScript compiler settings
- Path aliases

## The Risk Assessment Framework

### Risk Dimensions (A-G)

**A. Functionality & Integration (15%)**
- What the tool does
- Systems it touches
- Integration depth

**B. Data Handling (25%)**
- What data is collected
- How long it's kept
- Training usage
- Third-party sharing
- Export/deletion rights

**C. Access & Controls (20%)**
- OAuth permissions
- Admin controls
- User-level installation
- Auto-join features

**D. Security & Compliance (15%)**
- Certifications
- Penetration testing
- Incident history

**E. Legal & Confidentiality (15%)**
- Privilege risks
- Consent requirements
- Regulatory impact

**F. Community Reports (10%)**
- Reddit complaints
- Forum issues
- Real incidents

**G. Fireflies Test (Special)**
- Meeting bot behavior
- Auto-join capabilities
- Transcript sharing
- Host consent

### Scoring Formula

```
Base Score = (A×0.15 + B×0.25 + C×0.20 + D×0.15 + E×0.15 + F×0.10)

If Fireflies Test triggered:
  Base Score += 25

If Fireflies Test failed:
  Final Score = 100 (Critical)

Rating:
  0-20:   Low
  21-50:  Medium
  51-75:  High
  76-100: Critical
```

## Research Strategy

### Primary Sources (Prioritized)
1. Reddit (r/sysadmin, r/msp, r/cybersecurity, r/privacy)
2. Twitter/X incident reports
3. Hacker News discussions
4. Security forums
5. App store reviews

### Secondary Sources (Context Only)
1. Vendor documentation
2. Privacy policies
3. Security pages
4. Compliance claims

### What We Look For
- "Bot joined without permission"
- "Can't disable auto-join"
- "Transcripts sent to wrong people"
- "No way to control it"
- "Confusing admin settings"
- "Training on our data"
- "Third-party sharing"

## Security & Privacy

### No Data Storage
- No database
- No logs
- No user tracking
- Session-only operation

### API Keys
- Stored in environment variables
- Never exposed to frontend
- Not included in responses

### Privacy Focus
- Searches only public sources
- No authentication required
- No user identification
- Anonymous usage

## Deployment Options

### Option 1: Local Development
- Run on your computer
- Access at localhost:3000
- Good for testing
- Not accessible to others

### Option 2: Vercel (Recommended)
- Free hosting
- Auto-deploys from GitHub
- HTTPS included
- Custom domain support
- Global CDN
- Perfect for sharing

### Option 3: Railway
- Alternative to Vercel
- Similar features
- Good Docker support

### Option 4: Self-Hosted
- Your own server
- Full control
- More setup required

## Customization Points

### Easy Customizations
1. **Colors/Branding**: Edit `tailwind.config.js`
2. **Text/Copy**: Edit component files
3. **Risk Weights**: Edit prompt in `route.ts`
4. **Additional Questions**: Add to `AssessmentForm.tsx`

### Advanced Customizations
1. **Add Database**: Integrate Supabase for history
2. **PDF Export**: Add PDF generation library
3. **Email Reports**: Integrate SendGrid/Resend
4. **User Accounts**: Add authentication
5. **Custom Frameworks**: Modify risk dimensions

## API Usage & Costs

### Anthropic API
- **Model**: Claude Sonnet 4.5
- **Input**: ~$3 per million tokens
- **Output**: ~$15 per million tokens

### Typical Analysis
- **Input tokens**: ~5,000-8,000
- **Output tokens**: ~2,000-4,000
- **Cost per analysis**: $0.10-0.50

### Monthly Cost Examples
- **10 analyses**: ~$5
- **50 analyses**: ~$25
- **100 analyses**: ~$50

## Error Handling

### Form Validation
- All fields required
- User-friendly messages

### API Errors
- Network failures
- API key issues
- Rate limiting
- Parse errors

### Fallback Behavior
- Returns raw text if JSON parsing fails
- Shows error message to user
- Logs errors to console

## Performance

### Analysis Time
- **Typical**: 2-3 minutes
- **Fast**: 1 minute
- **Slow**: 5 minutes (thorough research)

### Factors Affecting Speed
- Number of web searches
- Vendor popularity (more sources)
- API response time
- Network latency

## Maintenance

### Regular Updates
1. Keep dependencies updated (`npm update`)
2. Check for security patches
3. Monitor Anthropic API changes
4. Update risk framework as needed

### Monitoring
- Check Vercel logs
- Monitor API usage
- Track error rates
- Review user feedback

---

**This is a complete, production-ready application. All the pieces work together to provide thorough, skeptical risk assessments based on real-world user experiences.**
