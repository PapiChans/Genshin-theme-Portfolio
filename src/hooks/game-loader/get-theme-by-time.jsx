export function getThemebyTime() {
    const hour = new Date().getHours();

    // The Light theme is between 6 AM to 5 PM
    const theme = 
        hour >= 6 && hour < 18 ? "light" : "dark";

    return {
        theme: theme,
    };
}