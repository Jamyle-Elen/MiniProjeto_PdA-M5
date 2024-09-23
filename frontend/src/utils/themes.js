import Images from '../assets/images'

export const lightTheme = {
    background: Images.amazon,
    footerBg: '#000',
    bottomFooterBg: '#34342D',
    forestSession: '#0C0C0A',
    bgColor: 'var(--dark-bg)',
    border: '.5px solid var(--dark-text)',
}

export const darkTheme = {
    background: Images.amazonD,
    footerBg: '#4A484C',
    bottomFooterBg: '#111111',
    filter: 'grayscale(100%)',
    forestSession: 'var(--lightTheme-container)',
    bgColor: 'var(--lightTheme-bg)',
    border: '.5px solid var(--dark-bg)',
}