/**
 * Single source of truth for CTP Hacks 2026 content.
 * Update event details, schedule, and sponsor logos here —
 * the rest of the site reads from these structures.
 */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "What to Expect", href: "#what-to-expect" },
  { label: "Schedule", href: "#schedule" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Questions", href: "#questions" },
];

/**
 * Links to previous years' hackathon sites, shown as a "Past Hackathons"
 * dropdown in the nav and listed in the footer. Add/remove years here —
 * nothing else needs to change.
 */
export const pastHackathons = [
  // { year: "2022", href: "http://localhost:3000/students/hackathons/2022/" },
  { year: "2023", href: "https://cunytechprep.github.io/hackathon-2023/" },
  { year: "2024", href: "https://cunytechprep.github.io/hackathon-2024/" },
  { year: "2025", href: "https://zfadeout.github.io/CTPHacks2025Site/" },
];

export const eventDays = [
  {
    id: "level-up-day",
    line: "violet" as const,
    name: "Level Up Day",
    date: "Wednesday, August 26",
    format: "Virtual",
    description:
      "The day before Hack Day, fellows join a virtual day of professional development sessions and team-building activities designed to prepare them for the program year ahead.",
    tags: ["Professional development", "Team building", "Virtual sessions"],
  },
  {
    id: "hack-day",
    line: "amber" as const,
    name: "Hack Day",
    date: "Thursday, August 27",
    format: "In-Person — CUNY @ Amazon, NYC",
    description:
      "The main event. Fellows spend the day building AI-powered projects using Google Gemini, with mentor support throughout. The day closes with project demos, judging, and prizes awarded to winning teams.",
    tags: ["Build with Gemini", "Mentor support", "Demos & prizes"],
  },
];

export const hackDayExperience = [
  {
    title: "Mentorship",
    description: "Guidance from industry professionals and CTP alumni throughout the build.",
    icon: "mentor" as const,
  },
  {
    title: "Pitching & Judging",
    description: "Teams demo what they built and walk judges through their thinking.",
    icon: "pitch" as const,
  },
  {
    title: "Prizes",
    description: "Winning teams are recognized, including Best Use of Google Gemini.",
    icon: "prize" as const,
  },
  {
    title: "Food",
    description: "Fueling a full day of building, together.",
    icon: "food" as const,
  },
  {
    title: "Fun",
    description: "A day built around energy and community, not stress.",
    icon: "fun" as const,
  },
];

export interface ScheduleStop {
  time: string;
  title: string;
  line: "violet" | "amber" | "teal";
}

export const schedule: ScheduleStop[] = [
  { time: "9:00 AM", title: "Opening Ceremony", line: "violet" },
  { time: "10:00 AM", title: "Hacking Begins", line: "violet" },
  { time: "10:00 AM – 5:00 PM", title: "Mentor Support Available", line: "teal" },
  { time: "5:00 PM", title: "Project Submissions Close on Devpost", line: "amber" },
  { time: "5:00 PM – 6:15 PM", title: "Judging", line: "amber" },
  { time: "6:00 PM – 6:15 PM", title: "Winner Selection", line: "amber" },
  { time: "6:15 PM – 6:30 PM", title: "Closing Ceremony & Winner Announcement", line: "violet" },
];

export const getInvolvedRoles = [
  {
    id: "mentors",
    line: "violet" as const,
    title: "Mentors",
    description:
      "Guide teams through the build process as they develop AI-powered applications using Google Gemini on Hack Day. Morning and afternoon shifts available.",
  },
  {
    id: "judges",
    line: "teal" as const,
    title: "Judges",
    description:
      "Evaluate project demos and help select the winners based on creativity, technical execution, and how meaningfully teams integrated Google Gemini into their solution. Judging takes place in-person from 5:00–6:00 PM on August 27th.",
  },
  {
    id: "sponsors",
    line: "amber" as const,
    title: "Sponsors",
    description: "Support NYC's next generation of tech talent. Financial contributions and in-kind donations welcome.",
  },
];

export const getInvolvedCta = {
  label: "Interested in getting involved?",
  href: "https://bit.ly/SponsorCTPHacks",
};

/**
 * Logo wall groupings. `logoSrc` is left empty until real brand assets are
 * supplied — the LogoWall component renders a labeled placeholder tile in
 * that case so no logo is invented. Add new entries here; layout adapts
 * automatically.
 */
export interface SponsorLogo {
  name: string;
  logoSrc?: string;
  href?: string;
}

export const poweredBy: SponsorLogo[] = [
  { name: "Major League Hacking (MLH)" },
  { name: "Google Gemini" },
];

export const sponsors2026: SponsorLogo[] = [{ name: "IEEE" }];

export const pastSponsors: SponsorLogo[] = [];

export const contact = {
  email: "hackathon@cunytechprep.org",
};
