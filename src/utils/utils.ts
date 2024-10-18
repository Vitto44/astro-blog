import { TEXTS } from "@/data_files/constants";
type LanguageKeys = keyof typeof TEXTS;

// Format the date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return new Date(date)
    .toLocaleDateString("default", options)
    .replace(/\//g, ".");
}

function getType(type: number, lang: LanguageKeys = "en"): string {
  const texts = TEXTS[lang];

  switch (type) {
    case 0:
      return `${texts.all} 🎲`;
    case 1:
      return `${texts.casino} 🎰`;
    case 2:
      return `${texts.sportsBetting} 🏈`;
    case 3:
      return `${texts.esport} 🎮`;
    case 4:
      return `${texts.crypto} 💰`;
    default:
      return "Unknown";
  }
}

export { formatDate, getType };
