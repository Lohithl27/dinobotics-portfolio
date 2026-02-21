# How to Edit Your Portfolio Site

This repository is built using **React** and **Tailwind CSS**. All of the textual content, projects, and personal information on the website is extracted into a single, easy-to-edit configuration file.

## 1. Opening the Project
1. Open **Visual Studio Code (VS Code)**.
2. Click **File > Open Folder...** and select the `/portfolio-site` directory on your computer.

## 2. Editing Your Content (Text & Projects)
You do not need to edit the complex React Code (`App.jsx`) just to change your text! 

1. On the left sidebar in VS Code, navigate to `src` > `data.js` and click to open it.
2. Inside `data.js`, you will see all your profile information mapped out simply:
   - To change your name, edit the `"Lohith M R"` string.
   - To update your "About Me" text, edit the `aboutText` string.
   - To add a new skill to the "Skills" block, just add a new item to the `skillsData` list.
   - To add or modify your manual project cards, edit the `allProjects` list.
3. Save the file (`Cmd + S` or `Ctrl + S`).
4. Your website will instantly update with the text you typed!

## 3. Editing Directly From GitHub (Without VS Code)
If you just need to make a fast text change and don't want to open VS Code, you can edit your website right in the browser!
1. Go to your repository on GitHub.com (`https://github.com/Lohithl27/dinobotics-portfolio`).
2. Navigate into `src` and click on `data.js`.
3. Click the small **Pencil Icon** (Edit this file) in the top right corner of the file view.
4. Make your text changes directly in the browser editor.
5. Click the green **Commit changes...** button at the top right to save and deploy your changes.

## 4. Pushing Changes to GitHub (From VS Code)
Once you have modified `data.js` inside VS Code to your liking, you can save it permanently to GitHub:
1. Click the **Source Control** icon on the very far left sidebar of VS Code (it looks like a branch splitting).
2. Hover over `src/data.js` in the "Changes" list and click the **+ (Plus)** button to stage the change.
3. Type a message in the "Message" input box (e.g. "Updated my about text").
4. Click the **Commit** button.
5. Click **Sync Changes** (or Push) to upload the edits to your GitHub repository!

## Changing Logos or Images
- If you want to use the SVG logos, they are stored in the `/logo` folder here in your repository.
- Background GIFs and images are stored in `/public`. Just place new images there and reference them by their filename (like `src="/my-new-image.png"`).

## 5. Adding Images from Google Drive
You can now easily link images directly from your Google Drive into the Projects and Achievements pages without having to upload them to GitHub!
1. Upload your image to Google Drive.
2. Right-click the image in Google Drive and select **Share**.
3. Under "General access", change Restricted to **Anyone with the link**.
4. Click **Copy link**.
5. Go to `data.js` and wrap that link inside the `formatDriveImage()` function like this:
```javascript
  images: [
    formatDriveImage("https://drive.google.com/file/d/1xYz.../view?usp=sharing")
  ]
```
The website will automatically convert the share link into an optimized, visible image!
