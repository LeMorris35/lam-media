/*
  ── MISSOURI SPARTANS — concept demo data ───────────────────────────────
  This single file is the "team kit": it holds EVERYTHING the demo shows —
  team info, colors, navigation, roster, schedule, stats, records, history.

  To spin up a site for another semi-pro team, copy the whole /spartans
  folder, rename it, and edit THIS file (plus the colors in layout.tsx).
  The pages don't care which team it is — they just render this data.

  NOTE: All player names, scores, and stats below are PLACEHOLDER samples
  for the mockup. Real numbers get dropped in once the client signs on.
*/

export const team = {
  name: "Missouri Spartans",
  shortName: "Spartans",
  league: "MRFL · Semi-Pro Football",
  season: "2025",
  founded: "Est. 2025 — Inaugural Season",
  city: "Greater Kansas City, MO",
  tagline: "Just for a moment… it's football.",
  intro:
    "A semi-pro football team based out of Greater Kansas City and the surrounding areas. As a first-year team, we love the game — supporting men, mental health, family, and consistent hard work, on and off the field.",
  coach: 'Juan "Moon" González',
  coachTitle: "Head Coach & Owner",
  record2025: "6–2",
  contact: {
    phone: "(712) 621-1932",
    email: "moongonzalez7414@gmail.com",
    location: "Kansas City, MO 64130",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    facebookLabel: "Missouri Spartans",
    instagramLabel: "@missourispartans",
    followers: "645",
  },
};

// The four pillars from the team's own messaging ("Faith. Family. Legacy.")
export const pillars: { title: string; sub: string }[] = [
  { title: "Lead", sub: "With Strength" },
  { title: "Love", sub: "Without Limits" },
  { title: "Teach", sub: "With Wisdom" },
  { title: "Build", sub: "Our Future" },
];

export const nav: [string, string][] = [
  ["Home", "/demos/spartans"],
  ["Roster", "/demos/spartans/roster"],
  ["Schedule", "/demos/spartans/schedule"],
  ["Stats", "/demos/spartans/stats"],
  ["Records", "/demos/spartans/records"],
  ["History", "/demos/spartans/history"],
];

// ── ROSTER ──────────────────────────────────────────────────────────────
export type Player = {
  no: number;
  name: string;
  pos: string;
  ht: string;
  wt: number;
  hometown: string;
};

export const roster: Player[] = [
  { no: 1, name: "Marcus Bell", pos: "QB", ht: "6'2\"", wt: 210, hometown: "Kansas City, MO" },
  { no: 3, name: "Deon Carter", pos: "WR", ht: "6'0\"", wt: 185, hometown: "Independence, MO" },
  { no: 5, name: "Tyrell Hayes", pos: "RB", ht: "5'10\"", wt: 205, hometown: "Lee's Summit, MO" },
  { no: 7, name: "Jalen Brooks", pos: "WR", ht: "6'1\"", wt: 190, hometown: "Blue Springs, MO" },
  { no: 9, name: "Andre Wills", pos: "QB", ht: "6'0\"", wt: 200, hometown: "Olathe, KS" },
  { no: 11, name: "Cory Daniels", pos: "CB", ht: "5'11\"", wt: 180, hometown: "Grandview, MO" },
  { no: 21, name: "Malik Owens", pos: "RB", ht: "5'9\"", wt: 195, hometown: "Raytown, MO" },
  { no: 24, name: "Jordan Pace", pos: "S", ht: "6'0\"", wt: 198, hometown: "Kansas City, KS" },
  { no: 28, name: "Trey Lawson", pos: "CB", ht: "5'10\"", wt: 178, hometown: "Belton, MO" },
  { no: 33, name: "DeShawn Reed", pos: "LB", ht: "6'1\"", wt: 230, hometown: "Liberty, MO" },
  { no: 44, name: "Isaiah Cross", pos: "LB", ht: "6'2\"", wt: 235, hometown: "Gladstone, MO" },
  { no: 52, name: "Brandon Hicks", pos: "C", ht: "6'3\"", wt: 295, hometown: "Kansas City, MO" },
  { no: 55, name: "Mike Torres", pos: "G", ht: "6'2\"", wt: 305, hometown: "Overland Park, KS" },
  { no: 58, name: "Carl Jennings", pos: "LB", ht: "6'0\"", wt: 228, hometown: "Shawnee, KS" },
  { no: 66, name: "Anthony Vega", pos: "G", ht: "6'4\"", wt: 312, hometown: "Kansas City, MO" },
  { no: 71, name: "Sam Whitfield", pos: "T", ht: "6'5\"", wt: 320, hometown: "Lenexa, KS" },
  { no: 74, name: "Greg Mason", pos: "T", ht: "6'6\"", wt: 318, hometown: "Independence, MO" },
  { no: 81, name: "Reggie Holt", pos: "TE", ht: "6'4\"", wt: 245, hometown: "Lee's Summit, MO" },
  { no: 84, name: "Xavier Pratt", pos: "WR", ht: "6'2\"", wt: 192, hometown: "Kansas City, MO" },
  { no: 88, name: "Devin Cole", pos: "TE", ht: "6'3\"", wt: 240, hometown: "Blue Springs, MO" },
  { no: 90, name: "Marcus Frye", pos: "DT", ht: "6'3\"", wt: 300, hometown: "Grandview, MO" },
  { no: 93, name: "Leon Baxter", pos: "DE", ht: "6'4\"", wt: 270, hometown: "Raytown, MO" },
  { no: 95, name: "Juan González Jr.", pos: "DE", ht: "6'2\"", wt: 265, hometown: "Kansas City, MO" },
  { no: 97, name: "Terrence Goff", pos: "DT", ht: "6'1\"", wt: 295, hometown: "Olathe, KS" },
];

// ── SCHEDULE ────────────────────────────────────────────────────────────
export type Game = {
  date: string;
  opponent: string;
  home: boolean;
  result?: "W" | "L";
  score?: string; // "Spartans–Opp"
  location: string;
};

export const schedule: Game[] = [
  { date: "Apr 12", opponent: "Kansas City Renegades", home: true, result: "W", score: "28–14", location: "Spartan Field" },
  { date: "Apr 26", opponent: "Topeka Thunder", home: false, result: "W", score: "21–17", location: "Topeka, KS" },
  { date: "May 10", opponent: "St. Joseph Outlaws", home: true, result: "L", score: "13–24", location: "Spartan Field" },
  { date: "May 24", opponent: "Springfield Storm", home: false, result: "W", score: "34–20", location: "Springfield, MO" },
  { date: "Jun 7", opponent: "Columbia Cougars", home: true, result: "W", score: "31–10", location: "Spartan Field" },
  { date: "Jun 21", opponent: "Wichita Wolves", home: false, result: "L", score: "17–27", location: "Wichita, KS" },
  { date: "Jul 12", opponent: "Joplin Miners", home: true, location: "Spartan Field" },
  { date: "Jul 26", opponent: "Lawrence Lions", home: false, location: "Lawrence, KS" },
];

// ── STATS ───────────────────────────────────────────────────────────────
export const teamStats: [string, string][] = [
  ["Points / Game", "24.0"],
  ["Total Yards / Game", "362"],
  ["Rushing Yards / Game", "168"],
  ["Passing Yards / Game", "194"],
  ["Takeaways", "14"],
  ["Sacks", "23"],
];

export type Leader = { cat: string; player: string; line: string };
export const leaders: Leader[] = [
  { cat: "Passing", player: "Marcus Bell (#1)", line: "1,358 yds · 14 TD · 4 INT" },
  { cat: "Rushing", player: "Tyrell Hayes (#5)", line: "742 yds · 9 TD · 5.1 avg" },
  { cat: "Receiving", player: "Deon Carter (#3)", line: "48 rec · 611 yds · 6 TD" },
  { cat: "Tackles", player: "Isaiah Cross (#44)", line: "71 total · 9 TFL" },
  { cat: "Sacks", player: "Leon Baxter (#93)", line: "8.5 sacks · 3 FF" },
  { cat: "Interceptions", player: "Jordan Pace (#24)", line: "4 INT · 1 TD" },
];

// ── RECORDS ─────────────────────────────────────────────────────────────
export const records: { label: string; value: string; holder: string }[] = [
  { label: "Longest Pass Play", value: "78 yds", holder: "Bell → Carter · vs. Springfield" },
  { label: "Most Rushing Yds (Game)", value: "184 yds", holder: "Tyrell Hayes · vs. Columbia" },
  { label: "Most Points (Game)", value: "34", holder: "vs. Springfield Storm" },
  { label: "Longest Field Goal", value: "47 yds", holder: "Alex Reyna · vs. Topeka" },
  { label: "Most Sacks (Game)", value: "3.0", holder: "Leon Baxter · vs. Columbia" },
  { label: "Longest Win Streak", value: "3 games", holder: "Apr 12 – Apr 26 · 2025" },
];

// ── SEASON HISTORY ──────────────────────────────────────────────────────
export const seasons: { year: string; record: string; finish: string; note: string }[] = [
  {
    year: "2025",
    record: "6–2",
    finish: "Inaugural Season",
    note: "The Spartans' first year on the field — a winning record built on family, grit, and hard work.",
  },
];
