# MoodWalk

MoodWalk is an Expo and React Native prototype for mood-based walking recommendations. It uses sample Seoul routes and AsyncStorage so its main journey works without API credentials or live GPS.

## Start

```bash
npm install
npm start
```

Open with Expo Go or a development build. Optional web preview: `npm run web`.

## Demo flow

Tap **Choose how you want to feel**, select **Relax**, choose **15-30 min**, then prioritize **Green spaces** and **Well-lit & safe**. Compare three route suggestions, open **Peaceful Park Escape**, start and finish the sample walk, and leave a one-tap feeling check-in.

## Survey-informed changes

The supplied survey contains 10 responses. It is a small directional sample, not a population estimate. The interface reflects its clearest preferences:

- One simple starting action; text-based desired-mood options.
- 2-3 route suggestions rather than a long list.
- Time ranges centered on the reported 15-30 and 30-60 minute walk lengths.
- Route summaries emphasize estimated time, route preview, and safety information; route details also show greenery, crowds, terrain, and atmosphere tags.
- Greenery, quiet, well-lit routes, shorter walks, and discovery affect recommendation ranking.
- Post-walk feedback is one tap with an easy skip, since several respondents said they would rarely log feedback.
- Mood-matched music ideas have their own optional screen; no audio playback is claimed.

## Human-factors choices

- Keep each journey step focused on one decision with one clear next action.
- Show mood and preference selections distinctly, using labels as well as color.
- Use 48-point-or-larger main controls, plain language, readable contrast, and a predictable back path.
- Pair color changes with labels, check or radio markers, and clear save/feedback confirmation.
- Keep related route details together and remove secondary route-stop and match-explanation panels.
- Simplify active walking mode and remind users to watch their surroundings.
- Ask for location only when the user chooses the optional location control.
- Save bookmarks, completed walks, and quick check-ins locally.

Route maps, safety indicators, lighting notes, and walking progress are illustrative sample data. Weather, air quality, live navigation, real route photography, and music playback are not connected in this prototype.

## Publish on GitHub Pages

The production web build is generated with `npm run build:web`. The repository includes a GitHub Actions workflow that deploys the `dist` folder to GitHub Pages whenever `main` is updated. The Expo `baseUrl` is set for the `MoodWalkApp` repository path, and `.nojekyll` is included so Expo assets are served correctly.

Enable Pages with **Settings → Pages → Build and deployment → GitHub Actions**. After the workflow succeeds, the site will be available at `https://alanyana.github.io/MoodWalkApp/`.
