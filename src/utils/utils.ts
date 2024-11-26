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

function getBgColorCombo(type: number): string {
  switch (type % 5) {
    case 0:
      return "bg-gradient-to-tr from-orange-500 to-yellow-500";
    case 1:
      return "bg-gradient-to-tr from-teal-600 to-blue-700";
    case 2:
      return "bg-gradient-to-tr from-fuchsia-500 to-rose-500";
    case 3:
      return "bg-gradient-to-tr from-lime-500 to-emerald-700";
    case 4:
      return "bg-gradient-to-tr from-red-500 to-indigo-800";
    default:
      return "bg-gradient-to-tr from-orange-500 to-yellow-500";
  }
}

export { formatDate, getType, getCountryCode, getBgColorCombo };
