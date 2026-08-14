/* ============================================================
   ArminInFocus — ALBUM DATA
   This is the only file you need to touch to add, remove, or
   reorder a roll. The site (index.html) reads this automatically —
   roll numbers, tile sizes, and colors are all handled for you.

   ── TO ADD A NEW ROLL ──────────────────────────────────────
   1. Upload your images to the same place as the others:
        https://arminpan.github.io/assets/shots/
   2. Copy one of the blocks in ALBUMS below and paste it
      anywhere in the array (order here = order on the site).
   3. Fill in the fields:
        slug     → lowercase, hyphens only, no spaces (used in the URL)
        title    → what shows on the site
        location → shown under the title, e.g. "Kyoto, Japan"
        caption  → one short sentence, sets the mood
        mood     → pick a name from the MOODS list below —
                   this controls the color grade for that roll
        files    → array of filenames WITHOUT the extension,
                   in the order you want them to appear
   4. Save. That's it — no other file needs to change.

   Optional: if a file isn't a .jpeg (e.g. it's .png or .jpg),
   add an "ext" object like the Skies example below.

   ── TO ADD SHOTS TO AN EXISTING ROLL ────────────────────────
   No new block needed. Upload the photo to assets/shots/, then
   just add its filename (no extension) to that album's "files"
   array, wherever you want it to sit in the order. Example —
   adding "Toronto9" to the Toronto roll:
        files: [..., "Toronto4","Toronto2","Toronto8","Toronto9"]
   The frame count on the site updates on its own.

   ── TO ADD A NEW MOOD/COLOR ─────────────────────────────────
   Add a new entry to MOODS with any name you like. "a" is the
   background tint (as "R,G,B"), "accent" is the highlight color
   used for text and labels in that roll. Keep "a" fairly dark/
   muted so text stays readable — the CSS handles the rest.
   ============================================================ */

const MOODS = {
  teal:    { a: "58,120,110",  accent: "#4fd8c4" },
  steel:   { a: "70,110,150",  accent: "#7fb6e8" },
  jungle:  { a: "60,140,90",   accent: "#5fd68a" },
  amber:   { a: "150,100,60",  accent: "#e0a15c" },
  honey:   { a: "160,120,70",  accent: "#e8b866" },
  dusk:    { a: "80,90,170",   accent: "#8b9bf0" },
  saffron: { a: "170,100,55",  accent: "#e8895a" },
  lagoon:  { a: "50,120,120",  accent: "#4fb8b0" },
  brick:   { a: "140,80,70",   accent: "#d47f6e" },
  mint:    { a: "50,130,115",  accent: "#54c9ac" },
  mist:    { a: "90,140,170",  accent: "#7fc4e8" },
  plum:    { a: "110,70,130",  accent: "#c98fe0" },
  slate:   { a: "80,90,100",   accent: "#a9b8c4" },
  gold:    { a: "150,120,40",  accent: "#e8c250" }
};

const ALBUMS = [
  {
    slug: "naqsh-e-jahan", title: "Naqsh-e Jahan",
    location: "Isfahan, Iran", mood: "teal",
    caption: "Where the tile work argues with the sky and wins.",
    files: ["Naqsh-e Jahan Square5","Naqsh-e Jahan Square2","Naqsh-e Jahan Square4","Naqsh-e Jahan Square7","Naqsh-e Jahan Square8","Naqsh-e Jahan Square9","Naqsh-e Jahan Square10","Naqsh-e Jahan Square3","Naqsh-e Jahan Square13","Naqsh-e Jahan Square11"]
  },
  {
    slug: "toronto", title: "Toronto",
    location: "Ontario, Canada", mood: "steel",
    caption: "Glass, steel, and a lake that keeps quiet about it.",
    files: ["CN Tower 1","CN Tower 4","Toronto3","CN Tower 6","Toronto1","Toronto5","CN Tower 2","CN Tower 3","Toronto6","Toronto7","Toronto4","Toronto2","Toronto8"]
  },
  {
    slug: "panama-city", title: "Panama City",
    location: "Panama", mood: "jungle",
    caption: "Isthmus heat and a skyline still deciding what it wants to be.",
    files: ["Panama1","Panama2","Panama3","Panama4","Panama5","Panama6","Panama7","Panama8"]
  },
  {
    slug: "co-existence", title: "Co-existence",
    location: "Various", mood: "amber",
    caption: "Small truces between species, caught mid-negotiation.",
    files: ["Companion1","Companion4","Companion2","Companion3","Companion5","Companion6","Companion7","Companion8","Companion9","Companion10","Companion11","Companion12","Companion14","Companion15"]
  },
  {
    slug: "cats", title: "Cats",
    location: "Various", mood: "honey",
    caption: "Studies in supreme indifference.",
    files: ["Cats1","Cats2","Cats3","Cats4b","Cats5","Cats6","Cats7","Cats11","Cats9","Cats10","Cats12","Cats8"]
  },
  {
    slug: "skies", title: "Skies",
    location: "Various", mood: "dusk",
    caption: "The same ceiling, never once repeating itself.",
    files: ["Skies","Skies2","Skies3","Skies4","Skies5","Skies6","Skies7","Skies8","Skies9","Skies10","Skies15","Skies12","Skies13","Skies14","Skies11","Skies16","Skies17","Skies18","Skies20"],
    ext: { "Skies": "jpeg" } // example of overriding a file's extension
  },
  {
    slug: "iran", title: "Iran",
    location: "Iran", mood: "saffron",
    caption: "Home, in the season it looks best.",
    files: ["Iran3","Iran4","Iran7","Iran6","Iran8","Iran9","Iran10","Iran16","Iran11","Iran12","Iran13","Iran14","Iran15","Iran17"]
  },
  {
    slug: "istanbul", title: "Istanbul",
    location: "Türkiye", mood: "lagoon",
    caption: "Two continents sharing one long exhale.",
    files: ["Istanbul1","Istanbul4","Istanbul3","Istanbul5","Istanbul6","Istanbul7","Istanbul8","Istanbul9","Istanbul10","Istanbul11","Istanbul12","Istanbul13","Istanbul14","Istanbul15","Istanbul16","Istanbul17","Istanbul18","Istanbul19","Istanbul20","Istanbul21","Istanbul22","Istanbul23","Istanbul24"]
  },
  {
    slug: "montreal", title: "Montreal",
    location: "Quebec, Canada", mood: "brick",
    caption: "Brick, snowlight, and a language for every block.",
    files: ["Montreal1","Montreal3","Montreal6","Montreal4","Montreal5","Montreal7","Montreal8","Montreal9","Montreal10","Montreal11","Montreal12","Montreal13","Montreal14"]
  },
  {
    slug: "caspian-sea", title: "Caspian Sea",
    location: "Iran", mood: "mint",
    caption: "The sea that isn't sure it's a sea.",
    files: ["CaspianSea2","CaspianSea3","CaspianSea4","CaspianSea5","CaspianSea6","CaspianSea7"]
  },
  {
    slug: "niagara-falls", title: "Niagara Falls",
    location: "Ontario, Canada", mood: "mist",
    caption: "Water that never finishes the sentence.",
    files: ["NiagaraFalls1","NiagaraFalls2","NiagaraFalls3","NiagaraFalls4"]
  }

  /* ── PASTE NEW ROLLS BELOW THIS LINE ──────────────────────
  ,{
    slug: "your-new-roll",
    title: "Your New Roll",
    location: "City, Country",
    mood: "plum",                 // pick from MOODS above, or add your own
    caption: "One short evocative line.",
    files: ["Photo1","Photo2","Photo3"]
  }
  ─────────────────────────────────────────────────────────── */
];
