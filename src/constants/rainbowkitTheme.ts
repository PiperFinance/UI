const systemFontStack: any =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const fontStacks: any = {
  rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${systemFontStack}`,
  system: systemFontStack,
};
const radiusScales: any = {
  large: {
    actionButton: '9999px',
    connectButton: '12px',
    modal: '24px',
    modalMobile: '28px',
  },
  medium: {
    actionButton: '10px',
    connectButton: '8px',
    modal: '16px',
    modalMobile: '18px',
  },
  none: {
    actionButton: '0px',
    connectButton: '0px',
    modal: '0px',
    modalMobile: '0px',
  },
  small: {
    actionButton: '4px',
    connectButton: '4px',
    modal: '8px',
    modalMobile: '8px',
  },
};
const blurs: any = {
  large: {
    modalOverlay: 'blur(20px)',
  },
  none: {
    modalOverlay: 'blur(0px)',
  },
  small: {
    modalOverlay: 'blur(4px)',
  },
};
const baseTheme = ({
  borderRadius = 'large',
  fontStack = 'rounded',
  overlayBlur = 'none',
}) => ({
  blurs: {
    modalOverlay: blurs[overlayBlur].modalOverlay,
  },
  fonts: {
    body: fontStacks[fontStack],
  },
  radii: {
    actionButton: radiusScales[borderRadius].actionButton,
    connectButton: radiusScales[borderRadius].connectButton,
    menuButton: radiusScales[borderRadius].connectButton,
    modal: radiusScales[borderRadius].modal,
    modalMobile: radiusScales[borderRadius].modalMobile,
  },
});

const darkGrey = '#081B45';
const accentColors = {
  blue: { accentColor: '#1DBFD5', accentColorForeground: '#FFF' },
  green: { accentColor: '#4BD166', accentColorForeground: darkGrey },
  orange: { accentColor: '#FF983D', accentColorForeground: darkGrey },
  pink: { accentColor: '#FF7AB8', accentColorForeground: darkGrey },
  purple: { accentColor: '#7A70FF', accentColorForeground: '#FFF' },
  red: { accentColor: '#FF6257', accentColorForeground: '#FFF' },
};
const defaultAccentColor = accentColors.blue;
const dezoneCustomTheme = ({
  accentColor = defaultAccentColor.accentColor,
  accentColorForeground = defaultAccentColor.accentColorForeground,
  ...baseThemeOptions
} = {}) => ({
  ...baseTheme(baseThemeOptions),
  colors: {
    accentColor,
    accentColorForeground,
    actionButtonBorder: 'rgba(255, 255, 255, 0.04)',
    actionButtonBorderMobile: 'rgba(255, 255, 255, 0.08)',
    actionButtonSecondaryBackground: 'rgba(255, 255, 255, 0.08)',
    closeButton: 'rgba(224, 232, 255, 0.6)',
    closeButtonBackground: 'rgba(255, 255, 255, 0.08)',
    connectButtonBackground: darkGrey,
    connectButtonBackgroundError: '#FF494A',
    connectButtonInnerBackground:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))',
    connectButtonText: '#FFF',
    connectButtonTextError: '#FFF',
    connectionIndicator: '#30E000',
    downloadBottomCardBackground:
      'linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F',
    downloadTopCardBackground:
      'linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F',
    error: '#FF494A',
    generalBorder: 'rgba(255, 255, 255, 0.08)',
    generalBorderDim: 'rgba(255, 255, 255, 0.04)',
    menuItemBackground: 'rgba(224, 232, 255, 0.1)',
    modalBackdrop: 'hsla(215,0%,10%,.5)',
    modalBackground: darkGrey,
    modalBorder: 'rgba(255, 255, 255, 0.08)',
    modalText: '#FFF',
    modalTextDim: 'rgba(224, 232, 255, 0.3)',
    modalTextSecondary: 'rgba(255, 255, 255, 0.6)',
    profileAction: 'rgba(224, 232, 255, 0.1)',
    profileActionHover: 'rgba(224, 232, 255, 0.2)',
    profileForeground: 'rgba(224, 232, 255, 0.05)',
    selectedOptionBorder: 'rgba(224, 232, 255, 0.1)',
    standby: '#FFD641',
  },
  shadows: {
    connectButton: 'inset 0px 0px 5px rgba(0, 0, 0, 0.75)',
    dialog: '0px 8px 32px rgba(0, 0, 0, 0.32)',
    profileDetailsAction: '0px 2px 6px rgba(37, 41, 46, 0.04)',
    selectedOption: '0px 2px 6px rgba(0, 0, 0, 0.24)',
    selectedWallet: '0px 2px 6px rgba(0, 0, 0, 0.24)',
    walletLogo: '0px 2px 16px rgba(0, 0, 0, 0.16)',
  },
});
dezoneCustomTheme.accentColors = accentColors;

export { dezoneCustomTheme };
