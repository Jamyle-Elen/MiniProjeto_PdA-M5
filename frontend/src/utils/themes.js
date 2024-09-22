import Images from '../assets/images'

export const lightTheme = {
    background: Images.amazon,
    footerBg: '#000',
    bottomFooterBg: '#34342D',
    forestSession: '#0C0C0A'
    // forestSession: 'transparent'
}

export const darkTheme = {
    background: Images.amazonD,
    footerBg: '#4A484C',
    bottomFooterBg: '#111111',
    filter: 'grayscale(100%)',
    forestSession: 'var(--lightTheme-container)'
}