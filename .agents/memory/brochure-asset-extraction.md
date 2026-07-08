---
name: Brochure asset extraction
description: Extracting real product photos and cover artwork from an uploaded PDF brochure to use as site imagery
---

When a user uploads a company brochure PDF and asks to use its images (e.g. as hero background or product photos), don't rely on the text-only PDF content extraction shown in chat — render the PDF pages and extract embedded raster images directly:

- `pdftoppm -png -r 300 -f <page> -l <page> file.pdf out` to render a full page as an image (useful for cropping a cover/hero section that mixes logo + photo + layout).
- `pdfimages -all file.pdf img` to pull out every embedded raster image individually (useful for isolating individual product photos).
- Use `montage` (ImageMagick) to build a contact-sheet grid of extracted images, then view it once with the read tool to identify/map each image to its product, instead of viewing dozens of images one by one.
- Crop specific regions with `convert file.png -crop WxH+X+Y +repage out.png` (e.g. isolating just the branded cover-art half of a page for a hero background).

**Why:** brochure PDFs often have real photography that's far better than any generated/stock image, and the chat's PDF-to-text extraction only gives text, not the images.
**How to apply:** when a brochure/catalog PDF is attached and imagery is requested, extract and crop first, place results under the target artifact's `src/assets/...`, then hand off to the design subagent with exact asset paths already resolved — don't ask it to extract images itself.
