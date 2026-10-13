# Videos

Short clips are self-hosted here. Longer videos use YouTube (IDs are set in
`src/data/site.ts` and `src/data/serviceDetails.ts`).

## File names

For each service id (`samskaras`, `home-deity-worship`, `family-life-ashram`,
`education`, `counselling`):

| File | Used for | Spec |
|---|---|---|
| `<id>.mp4` | Main loop on the service page and the home-page glimpse card | 1920 × 1080, 5–15 s, silent. Keep the subject centred (the home card crops to portrait) |
| `<id>.jpg` | Poster image for the loop above | Same frame size, JPG |
| `<id>-1`, `-2`, `-3` (`.mp4` or `.jpg`) | The three "Glimpses" on the service page | 1080 × 1350 (4:5), 5–10 s. A `.jpg` alone shows as a photo |

## Compressing (ffmpeg)

```bash
# silent, web-friendly MP4 (aim for under 5 MB)
ffmpeg -i input.mov -an -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart name.mp4
# poster frame
ffmpeg -i name.mp4 -frames:v 1 name.jpg
```

Clips play only while on screen, are muted, and don't autoplay for visitors
who prefer reduced motion.
