
# Quick Word Meaning

A Chrome extension that instantly displays word meanings as you browse the web. Simply double-click any single word to see its definition in a floating tooltip.

## Features

✨ **Instant Definitions** - Double-click any word to see its meaning  
🎯 **Non-intrusive** - Floating tooltip appears exactly where you click  
📚 **Powered by Free API** - Uses Dictionary API for accurate definitions  
⚡ **Lightweight** - No setup or configuration needed  
🌐 **Works Everywhere** - Functions on any website  

## How to Use

1. **Open Chrome** and navigate to `chrome://extensions/`
2. **Enable Developer Mode** (toggle in the top right corner)
3. Click **"Load unpacked"** button
4. **Select this project folder** and click "Open"
5. The extension is now active! 🎉

### Using the Extension

- **Double-click any single word** on any webpage
- A tooltip will appear showing the word and its definition
- Click elsewhere or wait for it to disappear automatically
- Hover over different words to learn their meanings

## How It Works

- Detects word selection when you double-click text
- Fetches definitions from the [Free Dictionary API](https://dictionaryapi.dev/)
- Displays results in a styled tooltip at the click location
- Cleans up tooltips when you interact with the page

## Technical Details

- **Manifest Version**: 3 (Latest Chrome Extension standard)
- **Permissions**: Requires access to `https://api.dictionaryapi.dev/`
- **Files**:
  - `manifest.json` - Extension configuration
  - `content.js` - Main logic for word detection and tooltip display
  - `background.js` - Background service worker

## Requirements

- Chrome browser (or any Chromium-based browser)
- Internet connection (for API calls)

## Troubleshooting

**Extension not working?**
- Ensure Developer Mode is enabled
- Check that the folder is properly loaded in `chrome://extensions/`
- Reload the extension (click the refresh icon)
- Check the browser console for errors (F12)

**Definition not showing?**
- The word must be a valid English dictionary word
- Single words only (multiple words won't trigger definitions)
- Check your internet connection
- Try a different word

## Future Improvements

- [ ] Support for multiple word selections
- [ ] Add pronunciation audio
- [ ] Implement dark/light theme toggle
- [ ] Cache definitions for offline access
- [ ] Add word history feature

## License

MIT License - Feel free to use and modify this extension

## Contributing

Contributions are welcome! Feel free to fork, modify, and submit improvements.