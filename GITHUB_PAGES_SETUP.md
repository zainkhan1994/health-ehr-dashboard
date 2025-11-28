# 🚀 GitHub Pages Setup Instructions

## Automatic Method (Using GitHub CLI - if installed)

If you have GitHub CLI installed:
```bash
gh repo edit --enable-pages --pages-branch main --pages-path /
```

## Manual Method (Recommended)

1. **Go to your repository on GitHub:**
   https://github.com/zainkhan1994/health-ehr-dashboard

2. **Click on "Settings"** (top right)

3. **Scroll down to "Pages"** in the left sidebar

4. **Under "Build and deployment":**
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select "main"
   - **Folder:** Select "/ (root)"

5. **Click "Save"**

6. **Wait 1-2 minutes** for the site to build

7. **Your site will be live at:**
   ```
   https://zainkhan1994.github.io/health-ehr-dashboard/
   ```

## Verification

Once deployed, you should see a green checkmark and the URL at the top of the Pages settings.

## Updating the Site

Any time you push changes to the main branch:
```bash
git add .
git commit -m "Update dashboard"
git push
```

GitHub Pages will automatically rebuild and deploy within 1-2 minutes.

## Troubleshooting

### Site not loading?
- Check that Pages is enabled in Settings
- Verify the branch is set to "main"
- Wait a few minutes and refresh
- Check Actions tab for deployment status

### 404 errors on refresh?
- This is a single-page app, so all routes should work
- Make sure index.html is in the root directory

### JSON file not loading?
- Check browser console for CORS errors
- Verify health_data_database.json is in the root
- Clear browser cache and try again

## 🔒 Privacy Note

Your health data (health_data_database.json) is now publicly accessible via GitHub Pages. 

### To keep data private:
1. Remove sensitive data from health_data_database.json
2. Use sample/demo data instead
3. Or: Use GitHub Actions to deploy without exposing the JSON file

Would you like instructions on how to keep your data private?
