# PROJECT STRUCTURE

## Complete File Layout

```
ai-risk-analyst/
│
├── 📄 START-HERE.md              ⭐ READ THIS FIRST!
├── 📄 SETUP-GUIDE.md              Step-by-step setup instructions
├── 📄 QUICK-START.md              Quick overview and getting started
├── 📄 README.md                   Full documentation
├── 📄 ARCHITECTURE.md             How everything works
├── 📄 TROUBLESHOOTING.md          Common issues and fixes
│
├── ⚙️ package.json                Dependencies and scripts
├── ⚙️ tsconfig.json               TypeScript configuration
├── ⚙️ next.config.js              Next.js configuration
├── ⚙️ tailwind.config.js          Tailwind CSS configuration
├── ⚙️ postcss.config.js           PostCSS configuration
│
├── 🔒 .env.example                Environment variable template
├── 🔒 .gitignore                  Git ignore rules
│
├── 📁 app/
│   ├── 📄 page.tsx               ⭐ Main application page
│   ├── 📄 layout.tsx              App layout wrapper
│   ├── 📄 globals.css             Global styles
│   │
│   └── 📁 api/
│       └── 📁 analyze/
│           └── 📄 route.ts       ⭐ Analysis API endpoint
│
└── 📁 components/
    ├── 📄 AssessmentForm.tsx     ⭐ The 5-question form
    └── 📄 ResultsDisplay.tsx     ⭐ Report display
```

## File Purposes

### 📚 Documentation (Read These!)

| File | What It's For |
|------|---------------|
| **START-HERE.md** | Your first stop - overview and next steps |
| **SETUP-GUIDE.md** | Step-by-step setup for beginners |
| **QUICK-START.md** | Quick reference and overview |
| **README.md** | Complete documentation |
| **ARCHITECTURE.md** | Technical details and how it works |
| **TROUBLESHOOTING.md** | Fixing common problems |

### ⚙️ Configuration Files

| File | What It Does |
|------|--------------|
| **package.json** | Lists dependencies and scripts |
| **tsconfig.json** | TypeScript compiler settings |
| **next.config.js** | Next.js framework settings |
| **tailwind.config.js** | Styling configuration |
| **postcss.config.js** | CSS processing settings |

### 🔒 Environment & Security

| File | What It's For |
|------|---------------|
| **.env.example** | Template for API key file |
| **.env** | YOUR API key (create this!) |
| **.gitignore** | Files to not commit to Git |

### 💻 Application Code

| File | What It Does |
|------|--------------|
| **app/page.tsx** | Main page - form and results |
| **app/layout.tsx** | Wrapper for all pages |
| **app/globals.css** | Global styling |
| **app/api/analyze/route.ts** | Analysis logic (uses Claude API) |
| **components/AssessmentForm.tsx** | The 5-question form |
| **components/ResultsDisplay.tsx** | Shows reports |

## What Each Component Does

### Main Page (`app/page.tsx`)
```
┌─────────────────────────────────────┐
│  AI Vendor Risk Analyst             │
│  [Header and Description]           │
│                                     │
│  ┌──────────────┐  ┌─────────────┐ │
│  │ Assessment   │  │   Results   │ │
│  │    Form      │  │   Display   │ │
│  │  [5 Qs]      │  │  [Reports]  │ │
│  │  [Submit]    │  │             │ │
│  └──────────────┘  └─────────────┘ │
│                                     │
│  [Footer]                           │
└─────────────────────────────────────┘
```

### Assessment Form Component
```
┌─────────────────────────────────┐
│  Risk Assessment Form           │
├─────────────────────────────────┤
│  Vendor/App Name: [________]    │
│                                 │
│  1. Data Sensitivity            │
│     [text area]                 │
│                                 │
│  2. Regulatory Context          │
│     [text area]                 │
│                                 │
│  3. Operational Context         │
│     [text area]                 │
│                                 │
│  4. Administrative Control      │
│     [text area]                 │
│                                 │
│  5. User Scope                  │
│     [text area]                 │
│                                 │
│  [Analyze Vendor Risk Button]   │
└─────────────────────────────────┘
```

### Results Display Component
```
┌─────────────────────────────────┐
│  📊 Executive Briefing          │
├─────────────────────────────────┤
│  Risk Level: [HIGH]             │
│                                 │
│  What This Tool Does            │
│  • Bullet points                │
│                                 │
│  Key Risks                      │
│  • Risk details                 │
│                                 │
│  Recommended Action             │
│  [Action with rationale]        │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  🔬 Technical Report            │
├─────────────────────────────────┤
│  Risk Score: 78/100 [HIGH]      │
│                                 │
│  Executive Summary              │
│  Detailed Breakdown (A-G)       │
│  Recommended Controls           │
│  Vendor Questions               │
│  Final Recommendation           │
│                                 │
│  [Download Report Button]       │
└─────────────────────────────────┘
```

### API Route (`app/api/analyze/route.ts`)
```
User submits form
      ↓
POST /api/analyze
      ↓
Extract form data
      ↓
Build analysis prompt
      ↓
Call Anthropic Claude API
      ↓
Claude searches web:
  - Reddit
  - Forums
  - Social media
  - News
  - Vendor docs
      ↓
Claude analyzes:
  - 7 risk dimensions
  - Fireflies Test
  - Real-world reports
      ↓
Generate reports:
  - Executive Briefing
  - Technical Report
      ↓
Return JSON response
      ↓
Display results
```

## Files You Need to Create

### ✅ Required Before Running

1. **`.env`** - Contains your API key
   ```
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```

### ✅ Auto-Generated (Don't Create)

These are created automatically when you run `npm install`:
- `node_modules/` - Dependencies (large folder)
- `package-lock.json` - Dependency tree
- `.next/` - Build output

## Files You'll Edit Most Often

If you want to customize the app:

1. **`components/AssessmentForm.tsx`** - Change questions or add fields
2. **`components/ResultsDisplay.tsx`** - Change how reports look
3. **`app/api/analyze/route.ts`** - Adjust analysis logic
4. **`tailwind.config.js`** - Change colors/styling
5. **`app/page.tsx`** - Change layout or add features

## Files You'll Rarely Edit

These usually work as-is:
- `tsconfig.json`
- `next.config.js`
- `postcss.config.js`
- `app/layout.tsx`
- `app/globals.css`

## Quick Command Reference

```bash
# Install everything
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm run start
```

## Where Things Live

### Frontend (What Users See)
- `app/page.tsx` - Main page
- `components/*.tsx` - Reusable components
- `app/globals.css` - Styles

### Backend (Server Side)
- `app/api/analyze/route.ts` - Analysis endpoint

### Configuration
- Root directory `*.js`, `*.json` files

### Documentation
- Root directory `*.md` files

## Key Technologies

| Technology | What It Does | File(s) |
|------------|--------------|---------|
| **Next.js** | Web framework | `next.config.js`, `app/*` |
| **React** | UI components | `*.tsx` files |
| **TypeScript** | Type-safe JavaScript | `tsconfig.json`, `*.ts`, `*.tsx` |
| **Tailwind CSS** | Styling | `tailwind.config.js`, className attributes |
| **Anthropic SDK** | Claude API | `app/api/analyze/route.ts` |

## Data Flow

```
User Input
    ↓
AssessmentForm.tsx (collects data)
    ↓
app/page.tsx (sends to API)
    ↓
app/api/analyze/route.ts (calls Claude)
    ↓
Anthropic Claude API (analyzes)
    ↓
app/api/analyze/route.ts (returns results)
    ↓
app/page.tsx (receives data)
    ↓
ResultsDisplay.tsx (shows reports)
    ↓
User sees results
```

## Remember

- ⭐ **START-HERE.md** is your first stop
- 📖 Documentation files explain everything
- 💻 `.tsx` files are React components
- ⚙️ `.js` and `.json` files are configuration
- 🔒 Never commit `.env` to Git
- 📦 `node_modules/` is huge but necessary

---

**This is a complete, working application. All the pieces are here!**
