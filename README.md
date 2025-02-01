# WinShare - Browser Extension for Sharing Links via Windows Share

https://github.com/user-attachments/assets/6803c11f-e63f-4fd7-a0cf-46e7237dc3dc

**English** | [Русский](README_RU.md)

## 📌 Description
**WinShare** is a convenient browser extension that allows you to quickly share the current webpage through the standard Windows Share menu.

## 🚀 Features
- 📎 **Share links** via the built-in Windows Share menu.
- ⚡ **Works in one click** – just press the extension icon.
- 🌍 **Supports all Chromium-based browsers** (Google Chrome, Microsoft Edge, Opera, and others).
- 🔒 **Security** – does not require unnecessary permissions.

## 🔧 Installation
1. **Download the extension** (or manually load it via "Developer Mode").
2. **Go to `chrome://extensions/`**.
3. **Enable "Developer Mode"** (top right corner of the page).
4. **Click "Load unpacked"** and select the extension folder.
5. **Done!** Now you can share links with just one click. 🎉

## 🎯 Usage
1. Open the desired webpage in the browser.
2. Click on the **WinShare** icon.
3. The standard Windows Share menu will open – choose an application to send the link.

## 🛠 Development
### 📂 Project Structure
```
/WindowsShare
│── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│── src/                  # Source code
│   ├── background.js      # Main logic
│── manifest.json         # Extension configuration
```
### 🔑 Key Files
- **`manifest.json`** – extension description and settings.
- **`background.js`** – script handling icon clicks and calling the share menu.

## 📝 License
MIT License © 2025
