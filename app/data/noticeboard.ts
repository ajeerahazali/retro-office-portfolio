import type { NoticeboardNote } from './types'

// Noticeboard entries. Text content (title, lines) is preserved here for fork
// users to generate their own PNGs. The production site renders only the image.
// To update: edit the text below, regenerate the corresponding PNG, and place
// the result in /public/images/noticeboard/noticeboard-note-{1,2,3}.png.
//
// Clipboard pics (pic-1/2/3) are placeholder images in the repo.
// Replace them with your own photos (same filename) for a personal touch.
// They are gitignored so your personal photos stay local.

export const NOTICEBOARD_NOTES: NoticeboardNote[] = [
  { id: 'now',       color: '#fef08a', rotate: '-rotate-2', title: 'NOW',          icon: 'bg-emerald-500', image: '/images/noticeboard/noticeboard-note-1.png', lines: ['Figuring out where public health + data takes me next', 'Exploring health analytics, digital health & AI', 'Building small web apps with AI-assisted coding'] },
  { id: 'achieve',   color: '#fbcfe8', rotate: 'rotate-1',  title: 'ACHIEVEMENTS',  icon: 'bg-amber-500',   image: '/images/noticeboard/noticeboard-note-2.png', lines: ['Co-authored, published in The BMJ (2026)', 'Power BI Data Analyst Associate — Microsoft', 'Stipendium Hungaricum Scholar (Hungary)', 'President, International Student Union, Univ. of Debrecen'], style: 'list' },
  { id: 'personal',  color: '#bfdbfe', rotate: '-rotate-1', title: 'PERSONAL',       icon: 'bg-sky-500',     image: '/images/noticeboard/noticeboard-note-3.png', lines: ['Runs on coffee and quiet optimism', 'Daily chess, occasional Spanish', 'Never skips the LinkedIn games'] },
  { id: 'clipboard', image: '/images/noticeboard/noticeboard-pic-1.png', rotate: '-rotate-1', imageAlt: 'Vacation clipboard picture' },
  { id: 'clipboard2', image: '/images/noticeboard/noticeboard-pic-2.png', rotate: 'rotate-2', imageAlt: 'Vacation clipboard picture 2' },
  { id: 'clipboard3', image: '/images/noticeboard/noticeboard-pic-3.png', rotate: 'rotate-2', imageAlt: 'Vacation clipboard picture 3' },
]