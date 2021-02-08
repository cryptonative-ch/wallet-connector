import theme from './index'

export const getOutcomeColor = (index: number): Record<string, any> => {
  const localTheme: Record<string, any> = theme
  const defaultReturn = { darker: '#000', medium: '#999' }

  if (!localTheme || !localTheme['outcomes'] || !localTheme['outcomes']['colors']) {
    return defaultReturn
  }

  const colors = localTheme.outcomes.colors

  return colors[index % colors.length]
}
