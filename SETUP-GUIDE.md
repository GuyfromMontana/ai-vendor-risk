# STEP-BY-STEP SETUP GUIDE

Follow these steps exactly to get your AI Risk Analyst app running.

## STEP 1: Install Node.js (if not already installed)

1. Go to https://nodejs.org/
2. Download the LTS version (recommended)
3. Run the installer
4. Open Command Prompt and verify: `node --version`

## STEP 2: Get Your Anthropic API Key

1. Go to https://console.anthropic.com/
2. Log in or create an account
3. Click "API Keys" in the left menu
4. Click "Create Key"
5. Copy the key (starts with "sk-ant-...")
6. **SAVE THIS KEY** - you'll need it in Step 4

## STEP 3: Open the Project Folder

1. Open File Explorer
2. Navigate to the `ai-risk-analyst` folder
3. In the address bar, type `cmd` and press Enter
   (This opens Command Prompt in the project folder)

## STEP 4: Create Your .env File

1. In the project folder, find the file `.env.example`
2. Right-click it and select "Open with Notepad"
3. Replace `your_api_key_here` with your actual Anthropic API key
4. Save the file
5. Close Notepad
6. Rename the file from `.env.example` to `.env`
   (Remove the ".example" part)

**Your .env file should look like this:**
```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxx
```

## STEP 5: Install Dependencies

In the Command Prompt window (from Step 3), run:

```bash
npm install
```

Wait for this to complete (might take 2-3 minutes).

## STEP 6: Start the Development Server

In the same Command Prompt window, run:

```bash
npm run dev
```

You should see:
```
▲ Next.js 15.0.3
- Local:        http://localhost:3000
```

## STEP 7: Open the App

1. Open your web browser (Chrome, Edge, Firefox)
2. Go to: http://localhost:3000
3. You should see the AI Vendor Risk Analyst app!

## STEP 8: Test It

1. Fill out the form with test data
2. Enter a vendor name like "Fireflies.ai" or "Otter.ai"
3. Click "Analyze Vendor Risk"
4. Wait 2-3 minutes for the analysis
5. Review the results!

## TROUBLESHOOTING

### "npm is not recognized"
- Node.js isn't installed correctly
- Close and reopen Command Prompt
- Try Step 1 again

### "ANTHROPIC_API_KEY is not set"
- Your .env file isn't configured correctly
- Make sure the file is named `.env` (not `.env.example`)
- Make sure there are no spaces around the `=` sign
- Make sure the key starts with `sk-ant-`

### Port 3000 is already in use
- Something else is using that port
- Either close that application, or
- Run: `npm run dev -- --port 3001`
- Then go to http://localhost:3001

### Analysis takes too long or fails
- Check your internet connection
- Verify your API key is correct
- Make sure you have API credits in your Anthropic account

## DEPLOYING TO VERCEL (OPTIONAL)

### Prerequisites:
1. Create a GitHub account (if you don't have one)
2. Create a Vercel account at https://vercel.com

### Steps:

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

2. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - In "Environment Variables":
     - Name: `ANTHROPIC_API_KEY`
     - Value: [paste your Anthropic API key]
   - Click "Deploy"

3. **Access Your Live App**
   - Vercel will give you a URL like: `https://ai-risk-analyst.vercel.app`
   - Share this URL with friends and businesses!

## USING GITHUB DESKTOP (EASIER METHOD)

1. **Download GitHub Desktop**
   - Go to https://desktop.github.com/
   - Install it

2. **Add Your Project**
   - Open GitHub Desktop
   - Click "File" → "Add Local Repository"
   - Select your `ai-risk-analyst` folder
   - Click "Create Repository"

3. **Publish to GitHub**
   - Click "Publish repository"
   - Uncheck "Keep this code private" if you want it public
   - Click "Publish repository"

4. **Then follow Vercel steps above**

## MAKING CHANGES

If you want to modify the app:

1. Edit files in VS Code or your preferred editor
2. Save the changes
3. The app will automatically reload in your browser
4. To deploy changes to Vercel:
   - Just commit and push to GitHub
   - Vercel auto-deploys!

## NEED HELP?

- Check the README.md file
- Anthropic docs: https://docs.anthropic.com/
- Next.js docs: https://nextjs.org/docs

---

**You're all set! The app is ready to help you and others assess AI vendor risks.**
