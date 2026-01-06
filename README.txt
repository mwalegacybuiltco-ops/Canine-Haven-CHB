Canine Haven Boutique — Rebuild (Looks like the previous build)

✅ Includes your 2 images:
- assets/brand/login.png  (login screen image)
- assets/brand/crest.jpeg (affiliate gate / crest)

✅ Buttons work on desktop + mobile because everything is:
- relative paths
- no module imports
- plain script files

FILES TO EDIT:
1) config.js
   - Paste your Beacons links / website pages / Google Forms
   - Change affiliate PIN
2) products.js
   - Paste your Square Payment Links
   - Replace product images in assets/products/

IMPORTANT FOR TESTING ON MAC:
Opening index.html by double-click (file://) can block some things in Safari.
Best test:
python3 -m http.server 8000
Then open:
http://localhost:8000

GITHUB PAGES:
Commit these files, enable Pages, then hard refresh:
Chrome: Cmd+Shift+R
Safari: Develop -> Empty Caches
