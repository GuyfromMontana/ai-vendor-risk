# TROUBLESHOOTING GUIDE

## Common Issues & Solutions

### Installation Issues

#### ❌ "npm is not recognized as an internal or external command"

**Problem**: Node.js is not installed or not in PATH

**Solution**:
1. Download Node.js from https://nodejs.org/
2. Run the installer
3. **Restart your Command Prompt** (important!)
4. Test: `node --version`

#### ❌ "npm install" fails with errors

**Problem**: Various possibilities

**Solutions**:
Try these in order:
```bash
# 1. Clear npm cache
npm cache clean --force

# 2. Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# 3. Try installing again
npm install

# 4. If still failing, try with legacy peer deps
npm install --legacy-peer-deps
```

#### ❌ "Cannot find module '@anthropic-ai/sdk'"

**Problem**: Dependencies not installed

**Solution**:
```bash
npm install
```

### Environment Variable Issues

#### ❌ "ANTHROPIC_API_KEY is not set"

**Problem**: .env file missing or incorrect

**Solutions**:
1. Make sure file is named `.env` (not `.env.example` or `.env.txt`)
2. File should be in root of project (same folder as package.json)
3. Content should be:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
   ```
4. No spaces around the `=` sign
5. No quotes around the key
6. **Restart the dev server** after creating .env

#### ❌ API key works locally but not on Vercel

**Problem**: Environment variable not set in Vercel

**Solution**:
1. Go to Vercel dashboard
2. Select your project
3. Click "Settings"
4. Click "Environment Variables"
5. Add: `ANTHROPIC_API_KEY` with your key
6. **Redeploy your application**

### Development Server Issues

#### ❌ "Port 3000 is already in use"

**Problem**: Another app is using port 3000

**Solutions**:
```bash
# Option 1: Use a different port
npm run dev -- --port 3001
# Then go to http://localhost:3001

# Option 2: Find and kill the process (Windows)
netstat -ano | findstr :3000
# Find the PID (last column)
taskkill /PID [PID] /F

# Option 3: Restart your computer (easiest)
```

#### ❌ Server starts but shows blank page

**Problem**: Build or compilation error

**Solutions**:
1. Check terminal for error messages
2. Try clearing Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```
3. Check browser console (F12) for errors

### API & Analysis Issues

#### ❌ "Analysis failed. Please try again."

**Possible Causes & Solutions**:

**1. Invalid API Key**
- Verify key starts with `sk-ant-`
- Check for typos
- Generate new key at console.anthropic.com

**2. No API Credits**
- Check your Anthropic account balance
- Add payment method if needed

**3. Rate Limiting**
- Wait a few minutes
- Try again

**4. Network Issues**
- Check internet connection
- Try different network
- Check firewall settings

#### ❌ Analysis takes forever (>5 minutes)

**Problem**: Network or API issues

**Solutions**:
1. Check Anthropic status: status.anthropic.com
2. Try again in a few minutes
3. Check your internet connection
4. Look at browser console (F12) for errors

#### ❌ Results show as "Unknown" rating

**Problem**: Response parsing failed

**Solutions**:
1. Check if analysis completed
2. Look at browser console for errors
3. Try with simpler vendor name
4. Check API key is valid

### Display Issues

#### ❌ Styling looks broken or weird

**Problem**: Tailwind CSS not loading

**Solutions**:
1. Make sure `npm install` completed
2. Restart dev server
3. Clear browser cache (Ctrl+Shift+Delete)
4. Hard refresh page (Ctrl+F5)

#### ❌ Form not responding to input

**Problem**: JavaScript error

**Solutions**:
1. Open browser console (F12)
2. Look for error messages
3. Try refreshing page
4. Try different browser

### GitHub & Deployment Issues

#### ❌ Can't push to GitHub - "Permission denied"

**Problem**: SSH key or authentication issue

**Solutions**:

**Using GitHub Desktop (Easier)**:
1. Download GitHub Desktop
2. Sign in with your GitHub account
3. Add your repository
4. Click "Publish repository"

**Using Command Line**:
1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add key to GitHub: Settings → SSH Keys
3. Try pushing again

#### ❌ Vercel build fails

**Problem**: Build error in deployment

**Solutions**:

**1. Check Build Logs**
- Click "View Build Logs" in Vercel
- Look for specific error message

**2. Common Issues**:
- Environment variable missing → Add in Vercel settings
- Dependency issue → Check package.json
- TypeScript error → Fix in code

**3. Test Locally First**:
```bash
npm run build
```
If this fails locally, fix the errors before deploying

#### ❌ "This site can't be reached" on Vercel URL

**Problem**: Deployment not complete or DNS issue

**Solutions**:
1. Wait 2-3 minutes after deployment
2. Check Vercel dashboard for deployment status
3. Try incognito/private browsing mode
4. Clear browser cache

### Windows-Specific Issues

#### ❌ ".env file not found" but it's there

**Problem**: File extensions hidden in Windows

**Solutions**:
1. Open File Explorer
2. Click "View" tab
3. Check "File name extensions"
4. Rename file to `.env` (no .txt at end)

#### ❌ Can't create file starting with dot

**Problem**: Windows doesn't like dotfiles in Explorer

**Solutions**:
```bash
# Use Command Prompt
echo ANTHROPIC_API_KEY=your_key_here > .env

# Or use Notepad
# Save as ".env" with quotes
```

### Browser Issues

#### ❌ Form submission doesn't work

**Problem**: Browser compatibility

**Solutions**:
1. Update your browser to latest version
2. Try Chrome or Edge (best compatibility)
3. Disable browser extensions
4. Try incognito/private mode

#### ❌ CORS errors in console

**Problem**: Usually doesn't happen with Next.js, but if it does...

**Solutions**:
1. Make sure you're using `npm run dev`
2. Access via `localhost:3000` not `127.0.0.1:3000`
3. Check if you're running from file:// instead of http://

### Performance Issues

#### ❌ App is very slow

**Solutions**:
1. Check internet connection
2. Make sure only one dev server is running
3. Close other applications
4. Try: `npm run dev` in fresh terminal

#### ❌ High CPU usage during development

**Problem**: Normal for Next.js dev mode

**Solutions**:
- This is normal in development
- Production build is much faster
- Use `npm run build && npm run start` to test production mode

## Getting More Help

### Check These First
1. ✅ Read error message carefully
2. ✅ Check browser console (F12)
3. ✅ Check terminal output
4. ✅ Try restarting dev server
5. ✅ Try clearing cache

### Resources
- **Anthropic Docs**: https://docs.anthropic.com/
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **GitHub Desktop**: https://desktop.github.com/

### Common Command Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install

# Check Node/npm versions
node --version
npm --version
```

### File Locations Checklist

Make sure these files exist:
- ✅ `.env` (in root, contains ANTHROPIC_API_KEY)
- ✅ `package.json` (in root)
- ✅ `app/page.tsx` (main page)
- ✅ `app/api/analyze/route.ts` (API endpoint)
- ✅ `components/AssessmentForm.tsx` (form)
- ✅ `components/ResultsDisplay.tsx` (results)

### Emergency Reset

If everything is broken:

```bash
# 1. Delete everything except source files
rm -rf node_modules .next package-lock.json

# 2. Reinstall
npm install

# 3. Restart dev server
npm run dev
```

### Still Having Issues?

1. Copy the exact error message
2. Check if it's mentioned in this guide
3. Google the error message
4. Check Anthropic status page
5. Verify your API key works in Anthropic Console

---

**Most issues are solved by:**
1. Making sure .env file is correct
2. Restarting the dev server
3. Clearing cache
4. Reinstalling dependencies

**Remember**: The setup is simple - if something seems complicated, you're probably overthinking it!
