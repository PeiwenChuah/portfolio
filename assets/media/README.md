# Project Media (images & videos)

Drop your screenshots or short video clips in this folder, then list them
under the `media` field for that project in `src/data/projectsData.ts`.

Example — adding two screenshots and one video to a project:

```ts
{
  id: 'markdown-parser',
  ...
  media: [
    '/assets/media/markdown-parser-1.png',
    '/assets/media/markdown-parser-2.png',
    '/assets/media/markdown-parser-demo.mp4',
  ],
}
```

- Any common image format works: .png, .jpg, .jpeg, .webp, .gif
- Video files ending in .mp4, .webm, .mov, or .ogg automatically render with a video player
- You can add as many entries as you like — they render as a vertical gallery inside the project's modal
- Leave `media: []` if you don't have anything to add yet — the modal will just show a placeholder
