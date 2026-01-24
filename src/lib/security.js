/**
 * Sanitizes user input to prevent XSS attacks.
 * Removes HTML tags and potentially dangerous characters.
 * @param {string} text - The input text to sanitize.
 * @returns {string} The sanitized text.
 */
export const sanitizeInput = (text) => {
    if (typeof text !== 'string') return '';
    // Remove HTML tags
    return text.replace(/<[^>]*>?/gm, "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};
