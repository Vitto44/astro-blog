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

function getCountryCode(lang: LanguageKeys = "en"): string {
  switch (lang) {
    case "en":
      return "en-GB";
    case "ie":
      return "en-IE";
    case "sk":
      return "sk-SK";
    case "cz":
      return "cs-CZ";
    default:
      return "en-GB";
  }
}

export { formatDate, getType, getCountryCode };
