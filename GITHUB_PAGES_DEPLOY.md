# GitHub Pages Deployment Guide

## Quick Overview
Your quiz will be hosted at: `https://yourusername.github.io`

---

## Step 1: Create GitHub Account

1. Go to https://github.com/signup
2. Create account with professional username (this will be in your URL)
3. Verify email address

**Recommended usernames:**
- `wholesale-quiz`
- `re-quiz-academy`
- `wholesalerealestatequiz`

---

## Step 2: Create GitHub Pages Repository

1. Click `+` icon (top right) → **New repository**
2. **Repository name:** `yourusername.github.io`
   - ⚠️ MUST match your username exactly
   - Example: `wholesale-quiz.github.io`
3. Set to **Public**
4. Do NOT add README
5. Click **Create repository**

---

## Step 3: Install Git (if not installed)

### Check if Git is installed:
```powershell
git --version
```

### If not installed:
1. Download: https://git-scm.com/download/win
2. Run installer with default settings
3. Restart PowerShell

---

## Step 4: Configure Git

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

---

## Step 5: Upload Your Files

### Open PowerShell in your REQuiz folder:
```powershell
cd "c:\Users\aravind\Downloads\GITLAB GITAM WORK\REQuiz"
```

### Initialize Git repository:
```powershell
git init
git add .
git commit -m "Initial commit: Wholesale Real Estate Quiz"
```

### Connect to GitHub (replace with YOUR repository URL):
```powershell
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

**GitHub will ask for credentials:**
- Username: your GitHub username
- Password: use **Personal Access Token** (NOT your password)

---

## Step 6: Create Personal Access Token

GitHub requires a token instead of password for git operations.

1. Go to: https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. **Note:** "Git operations"
4. **Expiration:** 90 days (or custom)
5. **Select scopes:**
   - ✓ `repo` (full control of private repositories)
6. Click **Generate token**
7. **Copy the token** (you won't see it again!)
8. Use this token as "password" when git asks

---

## Step 7: Verify Deployment

1. Wait 2-3 minutes for GitHub Pages to deploy
2. Visit: `https://yourusername.github.io`
3. Your quiz should be live! 🎉

---

## Step 8: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Verify:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
   - Status should show: ✅ Your site is live at...

---

## Step 9: Before Making Live - Update Placeholders!

⚠️ **IMPORTANT:** Update these in `index.html` before pushing:

### Line 408 - Google Form Link:
```html
<a href="YOUR_GOOGLE_FORM_LINK_HERE" target="_blank">
```
Change to:
```html
<a href="https://forms.gle/YOUR_ACTUAL_FORM_ID" target="_blank">
```

### Line 397 - PayPal Link:
```html
<a href="YOUR_PAYPAL_LINK_HERE" target="_blank">
```
Change to:
```html
<a href="https://paypal.me/YourPayPalUsername/14.99" target="_blank">
```

### Line 417 - Support Email:
```html
<strong>your-email@example.com</strong>
```
Change to:
```html
<strong>support@yourdomain.com</strong>
```

---

## Step 10: Make Changes After Initial Deploy

When you need to update your site:

```powershell
# Navigate to your folder
cd "c:\Users\aravind\Downloads\GITLAB GITAM WORK\REQuiz"

# Check what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Updated PayPal link and Google Form"

# Push to GitHub
git push
```

Changes will be live in 1-2 minutes!

---

## Common Commands

### See what files changed:
```powershell
git status
```

### See what changed in files:
```powershell
git diff
```

### Undo changes before commit:
```powershell
git restore filename.html
```

### View commit history:
```powershell
git log --oneline
```

---

## Custom Domain (Optional)

If you want a custom domain like `wholesalequiz.com`:

1. Buy domain from Namecheap/GoDaddy
2. In your repository, create file: `CNAME`
3. Add one line: `wholesalequiz.com`
4. In domain provider, add DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: yourusername.github.io
   ```

---

## Troubleshooting

### Problem: Site not loading after 5 minutes
**Solution:** 
- Check GitHub Pages settings (Settings → Pages)
- Make sure repository is public
- Verify branch is set to `main`

### Problem: Git push asks for password but token doesn't work
**Solution:**
```powershell
# Remove old credentials
git credential-cache exit

# Or use this format with token in URL (less secure but works):
git remote set-url origin https://YOUR_TOKEN@github.com/username/username.github.io.git
```

### Problem: "fatal: not a git repository"
**Solution:** You're in wrong folder. Navigate to REQuiz folder first:
```powershell
cd "c:\Users\aravind\Downloads\GITLAB GITAM WORK\REQuiz"
```

### Problem: Changes not showing on site
**Solution:**
- Clear browser cache (Ctrl + F5)
- Wait 2-3 minutes for GitHub to rebuild
- Check commit was pushed: `git log --oneline`

---

## Security Notes

✅ **Safe to make public:**
- HTML, CSS, JavaScript files
- Images
- Documentation (README, guides)

⚠️ **Never commit:**
- API keys
- Passwords
- Private customer data
- Payment processor secrets

---

## Testing Before Deploy

### Test locally first:
1. Open `index.html` in browser directly
2. Test all features:
   - Quiz functionality
   - Results download
   - Dark mode toggle
   - Premium modal
3. Verify all links work
4. Check mobile responsiveness (F12 → Device toolbar)

---

## Backup Your Code

Always keep a local backup:
1. Copy entire REQuiz folder to safe location
2. Or use GitHub as backup (it's version-controlled)
3. Download repository anytime: Code → Download ZIP

---

## Next Steps After Deployment

1. ✅ Share link with friends for testing
2. ✅ Set up Google Form (see GOOGLE_FORM_SETUP.md)
3. ✅ Set up PayPal payment link
4. ✅ Test full payment workflow yourself
5. ✅ Create social media accounts to promote
6. ✅ Add Google Analytics (optional - track visitors)

---

## Your Live URLs

After deployment:
- **Quiz:** `https://yourusername.github.io`
- **Repository:** `https://github.com/yourusername/yourusername.github.io`
- **Settings:** `https://github.com/yourusername/yourusername.github.io/settings/pages`

---

## Support

If you get stuck:
1. Check GitHub Pages documentation: https://pages.github.com/
2. GitHub Community: https://github.community/
3. Stack Overflow: https://stackoverflow.com/questions/tagged/github-pages

---

## Success Checklist

Before going live, verify:
- [ ] All placeholder links updated
- [ ] Google Form created and linked
- [ ] PayPal link working
- [ ] Support email updated
- [ ] Tested quiz on phone and desktop
- [ ] Dark mode working
- [ ] Download results button working
- [ ] Premium modal opens
- [ ] All 50 questions present
- [ ] No console errors (F12 → Console)

**You're ready to launch! 🚀**
