// Format the date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}
// Capitalize the first letter
function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getType(type: number, withEmoji = false): string {
  switch (type) {
    case 0:
      return `All ${withEmoji ? "🎲" : ""}`;
    case 1:
      return `Casino ${withEmoji ? "🎰" : ""}`;
    case 2:
      return `Sport Betting ${withEmoji ? "🏈" : ""}`;
    case 3:
      return `E-Sport ${withEmoji ? "🎮" : ""}`;
    case 4:
      return `Crypto ${withEmoji ? "💰" : ""}`;
    default:
      return "Unknown";
  }
}

export { formatDate, capitalize, getType };
