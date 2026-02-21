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

## 3. Pushing Changes to GitHub
Once you have modified `data.js` to your liking, you can save it permanently to GitHub directly from VS Code:
1. Click the **Source Control** icon on the very far left sidebar of VS Code (it looks like a branch splitting).
2. Hover over `src/data.js` in the "Changes" list and click the **+ (Plus)** button to stage the change.
3. Type a message in the "Message" input box (e.g. "Updated my about text").
4. Click the **Commit** button.
5. Click **Sync Changes** (or Push) to upload the edits to your GitHub repository!

## Changing Logos or Images
- If you want to use the SVG logos, they are stored in the `/logo` folder here in your repository.
- Background GIFs and images are stored in `/public`. Just place new images there and reference them by their filename (like `src="/my-new-image.png"`).
