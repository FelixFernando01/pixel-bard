function generateStory(theme, seed) {
  const themes = ['adventure', 'fantasy', 'sci-fi', 'mystery'];
  const selectedTheme = theme || themes[seed % themes.length];
  return {
    title: `${selectedTheme.toUpperCase()} Tale`,
    seed,
    theme: selectedTheme,
    content: `Once upon a pixel, in a world of ${selectedTheme}...` // Placeholder
  };
}
