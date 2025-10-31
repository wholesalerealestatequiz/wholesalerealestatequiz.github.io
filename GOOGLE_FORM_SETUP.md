# Google Form Setup Guide

## Overview
This guide helps you create the Google Form where customers will upload their payment screenshot and quiz results file.

---

## Step 1: Create New Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click **+ Blank** to create a new form
3. Title: **Wholesale Real Estate Quiz - Premium Analysis Order**

---

## Step 2: Add Form Fields

### Field 1: Name
- **Question Type:** Short answer
- **Question:** Full Name
- **Required:** ✓ Yes

### Field 2: Email
- **Question Type:** Short answer  
- **Question:** Email Address
- **Validation:** Response validation → Text → Email
- **Required:** ✓ Yes

### Field 3: Overall Score
- **Question Type:** Short answer
- **Question:** What was your overall quiz score? (e.g., 75%)
- **Description:** You can find this at the top of your results page
- **Required:** ✓ Yes

### Field 4: Payment Screenshot
- **Question Type:** File upload
- **Question:** Upload Payment Confirmation Screenshot
- **Description:** Upload the screenshot of your $14.99 PayPal payment
- **Settings:** 
  - Allow only specific file types: JPG, PNG
  - Maximum file size: 10 MB
  - Limit to 1 file
- **Required:** ✓ Yes

### Field 5: Quiz Results File
- **Question Type:** File upload
- **Question:** Upload Your Quiz Results File
- **Description:** Upload the quiz-results-XXXXX.txt file you downloaded from Step 2 of the order process
- **Settings:**
  - Allow only specific file types: TXT
  - Maximum file size: 1 MB
  - Limit to 1 file
- **Required:** ✓ Yes

### Field 6: Additional Comments (Optional)
- **Question Type:** Paragraph
- **Question:** Any specific areas you'd like us to focus on in your analysis?
- **Description:** Optional - Tell us if there are particular topics or strategies you want more detailed feedback on
- **Required:** ✗ No

---

## Step 3: Configure Form Settings

1. Click the **Settings** gear icon (top right)

### General Tab:
- ✓ Collect email addresses
- ✓ Limit to 1 response (prevents duplicate submissions)
- ✓ Respondents can edit after submit (OFF - prevent changes)

### Presentation Tab:
- ✓ Show progress bar
- Confirmation message: **"Order received! We'll analyze your quiz results and email your comprehensive performance analysis within 24 hours. Check your spam folder if you don't see it."**

---

## Step 4: Get Form Link

1. Click **Send** button (top right)
2. Click the **link icon** 🔗
3. Check **Shorten URL**
4. Copy the link (it will look like: `https://forms.gle/XXXXXXX`)

---

## Step 5: Update Your Website

1. Open `index.html` in your text editor
2. Find line 408: `YOUR_GOOGLE_FORM_LINK_HERE`
3. Replace with your actual form link
4. Save the file

**Before:**
```html
<a href="YOUR_GOOGLE_FORM_LINK_HERE" target="_blank" class="step-btn google-form-btn">
```

**After:**
```html
<a href="https://forms.gle/XXXXXXX" target="_blank" class="step-btn google-form-btn">
```

---

## Step 6: View Responses

### Real-time notifications:
1. In Google Forms, go to **Responses** tab
2. Click the three dots menu (⋮)
3. Select **Get email notifications for new responses**

### Download responses:
- Click the Google Sheets icon to create a spreadsheet
- All submissions will auto-populate with:
  - Timestamp
  - Email
  - Name
  - Score
  - Payment screenshot (clickable link)
  - Quiz results file (clickable link)

### Access uploaded files:
- Files are automatically saved to your Google Drive
- Go to Drive → "Form responses - [Form Name]" folder
- Each submission creates subfolders with the files

---

## Step 7: Processing Orders

When you receive a new order:

1. **Check the Google Sheets response**
2. **Download the quiz results file** (quiz-results-XXXXX.txt)
3. **Verify payment screenshot**
4. **Open the results file** - it contains:
   - Overall score and category breakdown
   - All 50 questions with their answers
   - User's answer vs correct answer
   - Explanations for each question
   - Timestamp and test info

5. **Generate the analysis report** based on:
   - Their wrong answers (shows knowledge gaps)
   - Category weaknesses (which areas need improvement)
   - Their thinking patterns (did they consistently miss certain types of questions?)
   - Strategic gaps (concepts they misunderstood)

6. **Email the PDF report** to their email address within 24 hours

---

## Sample Email Template

**Subject:** Your Wholesale Real Estate Performance Analysis is Ready

**Body:**
```
Hi [Name],

Thank you for purchasing your Comprehensive Performance Analysis!

I've carefully reviewed your quiz results (Overall Score: X%) and prepared a detailed 
analysis of your thinking patterns, decision-making approach, and strategic understanding.

📊 Your Analysis Includes:
• Deep dive into your X weak areas
• Why you missed specific questions (thinking pattern analysis)
• Strategic gaps in your wholesale knowledge
• Personalized improvement roadmap with specific action steps

Please find your comprehensive analysis attached as a PDF.

If you have any questions about the recommendations or need clarification on any section, 
feel free to reply to this email.

Best regards,
[Your Name]
```

---

## Important Notes

⚠️ **File Storage:** Google Forms stores files in your Drive. Make sure you have enough storage space (free accounts get 15 GB).

⚠️ **Privacy:** The quiz results file contains their full quiz performance. Keep this confidential.

⚠️ **Backup:** Regularly download the response spreadsheet as a backup.

⚠️ **Response Time:** You promised 24-hour delivery - set up email notifications so you don't miss orders!

---

## Troubleshooting

**Problem:** Customer can't upload TXT file  
**Solution:** Tell them to right-click the downloaded file → Rename → make sure it ends in `.txt`

**Problem:** Payment screenshot too large  
**Solution:** They can compress it using any online image compressor or take a smaller screenshot

**Problem:** Can't find the quiz results file  
**Solution:** It's in their Downloads folder, named like `quiz-results-1234567890.txt`

---

## Next Steps

After setting up the form:
1. ✓ Test it yourself with a dummy submission
2. ✓ Verify files upload correctly
3. ✓ Check that you receive email notifications
4. ✓ Update the Google Form link in index.html
5. ✓ Set up your PayPal payment link
6. ✓ Update your support email in index.html

See `MONETIZATION_GUIDE.md` for complete payment setup instructions.
