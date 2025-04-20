export const countryEmoji: Record<string, string> = {
    russia: '🇷🇺',
    usa: '🇺🇸',
    germany: '🇩🇪',
    china: '🇨🇳',
    france: '🇫🇷',
    japan: '🇯🇵',
    uk: '🇬🇧',
    spain: '🇪🇸',
    belarus: '🇧🇾',
    india: '🇮🇳',
    mexico: '🇲🇽'
}

export function getFlag(name: string): string {
    const formatted = name.trim().toLowerCase()
    return countryEmoji[formatted] || '🌎'
}