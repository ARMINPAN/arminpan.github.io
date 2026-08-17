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
  gold:    { a: "150,120,40",  accent: "#e8c250" },
  cedar:   { a: "100,75,50",   accent: "#b98a5a" },
  velvet:  { a: "80,40,65",    accent: "#a85c8f" }
};

const ALBUMS = [
  {
    slug: "hoco-2025", title: "HOCO 2025",
    location: "Western University", mood: "gold",
    caption: "Homecoming 2025 weekend at Western.",
    files: ["HOCO2025_12","HOCO2025_02","HOCO2025_03","HOCO2025_04","HOCO2025_05","HOCO2025_06","HOCO2025_07","HOCO2025_08","HOCO2025_09","HOCO2025_26","HOCO2025_11","HOCO2025_10","HOCO2025_13","HOCO2025_14","HOCO2025_15","HOCO2025_16","HOCO2025_17","HOCO2025_18","HOCO2025_19","HOCO2025_20","HOCO2025_21","HOCO2025_22","HOCO2025_23","HOCO2025_24","HOCO2025_25","HOCO2025_01","HOCO2025_27","HOCO2025_28","HOCO2025_29","HOCO2025_30","HOCO2025_31","HOCO2025_32","HOCO2025_33","HOCO2025_34","HOCO2025_35","HOCO2025_36","HOCO2025_37","HOCO2025_38","HOCO2025_39","HOCO2025_40","HOCO2025_41","HOCO2025_42","HOCO2025_43","HOCO2025_44"]
  },
  {
    slug: "nrd-western", title: "NRD 2026",
    location: "Western University", mood: "slate",
    caption: "Neuroscience Research Day 2026 at Western.",
    files: ["NRD2026_22","NRD2026_02","NRD2026_03","NRD2026_04","NRD2026_05","NRD2026_06","NRD2026_07","NRD2026_08","NRD2026_09","NRD2026_10","NRD2026_11","NRD2026_12","NRD2026_13","NRD2026_14","NRD2026_15","NRD2026_16","NRD2026_17","NRD2026_18","NRD2026_19","NRD2026_20","NRD2026_21","NRD2026_01"]
  },
  {
    slug: "cedar-ensemble", title: "Cedar Ensemble",
    location: "Various", mood: "cedar",
    caption: "A close listen to a group that plays like one instrument.",
    files: ["CedarEnsemble_17","CedarEnsemble_02","CedarEnsemble_03","CedarEnsemble_04","CedarEnsemble_05","CedarEnsemble_06","CedarEnsemble_07","CedarEnsemble_08","CedarEnsemble_09","CedarEnsemble_10","CedarEnsemble_11","CedarEnsemble_12","CedarEnsemble_13","CedarEnsemble_14","CedarEnsemble_15","CedarEnsemble_16","CedarEnsemble_01","CedarEnsemble_18","CedarEnsemble_19","CedarEnsemble_20","CedarEnsemble_21","CedarEnsemble_22","CedarEnsemble_23","CedarEnsemble_24","CedarEnsemble_25","CedarEnsemble_26","CedarEnsemble_27","CedarEnsemble_28","CedarEnsemble_29","CedarEnsemble_30","CedarEnsemble_31","CedarEnsemble_32","CedarEnsemble_33","CedarEnsemble_34","CedarEnsemble_35","CedarEnsemble_36","CedarEnsemble_37"]
  },
  {
    slug: "london-sym", title: "London Symphony",
    location: "London, Ontario", mood: "velvet",
    caption: "The orchestra mid-swell, bows all leaning the same way.",
    files: ["LondonSym_01","LondonSym_02","LondonSym_03","LondonSym_04","LondonSym_05","LondonSym_06","LondonSym_07","LondonSym_08","LondonSym_09","LondonSym_10","LondonSym_11","LondonSym_12","LondonSym_13","LondonSym_14","LondonSym_15","LondonSym_16","LondonSym_17","LondonSym_18","LondonSym_19","LondonSym_20","LondonSym_21","LondonSym_22","LondonSym_23","LondonSym_24","LondonSym_25","LondonSym_26","LondonSym_27","LondonSym_28","LondonSym_29","LondonSym_30","LondonSym_31","LondonSym_32","LondonSym_33","LondonSym_34","LondonSym_35"]
  },
  {
    slug: "brainhack", title: "BrainHack 2026",
    location: "Various", mood: "plum",
    caption: "Brainhack is an annual hackathon taking place at Western.",
    files: ["BrainHack17","BrainHack3","BrainHack18","BrainHack5","BrainHack2","BrainHack1","BrainHack4","BrainHack6","BrainHack7","BrainHack8","BrainHack9","BrainHack10","BrainHack11","BrainHack12","BrainHack13","BrainHack14","BrainHack15","BrainHack16"]
  },
  {
    slug: "naqsh-e-jahan", title: "Naqsh-e Jahan",
    location: "Isfahan, Iran", mood: "teal",
    caption: "Where the tile work argues with the sky and wins.",
    files: ["Naqsh-e Jahan Square5","Naqsh-e Jahan Square2","Naqsh-e Jahan Square4","Naqsh-e Jahan Square7","Naqsh-e Jahan Square8","Naqsh-e Jahan Square9","Naqsh-e Jahan Square10","Naqsh-e Jahan Square3","Naqsh-e Jahan Square13","Naqsh-e Jahan Square11"]
  },
  {
    slug: "toronto", title: "Toronto",
    location: "Ontario, Canada", mood: "steel",
    caption: "Glass, steel, and a lake.",
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
    caption: "The rightests moments.",
    files: ["Companion1","Companion4","Companion2","Companion3","Companion5","Companion6","Companion7","Companion8","Companion9","Companion10","Companion11","Companion12","Companion14","Companion15"]
  },
  {
    slug: "cats", title: "Cats",
    location: "Various", mood: "honey",
    caption: "Studies in supreme cuteness.",
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
    caption: "Home.",
    files: ["Iran2", "Iran3","Iran4","Iran7","Iran6","Iran8","Iran9","Iran10","Iran16","Iran11","Iran12","Iran13","Iran14","Iran15","Iran17","Iran1"]
  },
  {
    slug: "istanbul", title: "Istanbul",
    location: "Türkiye", mood: "lagoon",
    caption: "Lovely Istanbul.",
    files: ["Istanbul1","Istanbul4","Istanbul2","Istanbul3","Istanbul5","Istanbul6","Istanbul7","Istanbul8","Istanbul9","Istanbul10","Istanbul11","Istanbul12","Istanbul13","Istanbul14","Istanbul15","Istanbul16","Istanbul17","Istanbul18","Istanbul19","Istanbul20","Istanbul21","Istanbul22","Istanbul23","Istanbul24"]
  },
  {
    slug: "montreal", title: "Montreal",
    location: "Quebec, Canada", mood: "brick",
    caption: "Brick, snow, art, and a language for every block.",
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
    caption: "Ontario's Majestic.",
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
