Thanks for your help!

Any contribution is appreciated, especially more motivational clips of Shia.

To hack on the extension:

1. Go to [chrome://extensions/](chrome://extensions/)
1. Enable "Developer mode" (top right)
1. "Load unpacked extension" (top left)
1. Select the directory where you cloned the project
1. Make some changes
1. Reload the extension by reloading the extensions page,  
   or clicking "Reload" below the extension

To publish a new version of the extension:

1. Bump the version in `manifest.json`
1. Create a new release on GitHub (i.e. create a tag and push it)
1. Zip the extension: `zip -9 -r do-it.zip do-it/ -x "*.git*" "*.md"`
1. Go to https://chrome.google.com/webstore/developer/dashboard
1. "Edit" the extension
1. Upload the zip and publish!
