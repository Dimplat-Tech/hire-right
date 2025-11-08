Crop avatar script

This folder contains `crop-avatar.js`, a small Node.js script that uses `sharp` and `smartcrop-sharp` to crop an input image to a square avatar centered on the subject.

Install dependencies (PowerShell):

```powershell
cd "c:\Users\dimpl\OneDrive\Desktop\hire-right-main-main"
npm install sharp smartcrop-sharp
```

Usage (PowerShell):

```powershell
# 1) Crop to 512x512 (default)
node .\scripts\crop-avatar.js .\public\img\jobs\job1.jpg .\public\jobopening\avatars\job1-avatar.png 512

# 2) Crop to 256x256
node .\scripts\crop-avatar.js .\public\img\jobs\job1.jpg .\public\jobopening\avatars\job1-avatar.png 256
```

Notes and limitations:
- The script uses `smartcrop-sharp` to pick a focal crop (it aims to find faces/interesting regions). It is not perfect; if it cannot find a suitable crop it will fall back to a centered square crop.
- This does not perform background removal; it crops and resizes. If you need a transparent background (subject cutout), you'll need a background-removal step (third-party API or an advanced model).
- Make sure the output directory exists. The script will write the output file path specified.

If you want, I can run the script here against an image in the repo (give me the input image path) and save the resulting avatar into `public/jobopening/avatars/`. Or I can adjust the script to batch-process a folder of images.