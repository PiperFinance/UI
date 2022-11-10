import {
  Chain,
  Wallet,
  getWalletConnectConnector,
} from '@rainbow-me/rainbowkit';
export interface MyWalletOptions {
  chains: Chain[];
}
export const phantom = ({ chains }: MyWalletOptions): Wallet => ({
  id: 'phantom',
  name: 'Phantom',
  iconUrl:
    'https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F3632261023-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MVOiF6Zqit57q_hxJYp%252Favatar-1615495356537.png%3Fgeneration%3D1615495356841399%26alt%3Dmedia',
  iconBackground: '#0c2f78',
  downloadUrls: {
    android: 'https://play.google.com/store/apps/details?id=app.phantom',
    ios: 'https://apps.apple.com/app/phantom-solana-wallet/1598432977',
    qrCode: 'https://phantom.app/download',
  },
  createConnector: () => {
    const connector = getWalletConnectConnector({ chains });
    return {
      connector,
      mobile: {
        getUri: async () => {
          const { uri } = (await connector.getProvider()).connector;
          return uri;
        },
      },

      qrCode: {
        getUri: async () => (await connector.getProvider()).connector.uri,
        instructions: {
          learnMoreUrl: 'https://phantom.app/blog',
          steps: [
            {
              description:
                'We recommend putting My Wallet on your home screen for faster access to your wallet.',
              step: 'install',
              title: 'Open the My Wallet app',
            },
            {
              description:
                'After you scan, a connection prompt will appear for you to connect your wallet.',
              step: 'scan',
              title: 'Tap the scan button',
            },
          ],
        },
      },
      extension: {
        learnMoreUrl: 'https://phantom.app/blog',
        instructions: {
          steps: [
            {
              description:
                'We recommend pinning MetaMask to your taskbar for quicker access to your wallet.',
              step: 'install',
              title: 'Install the MetaMask extension',
            },
            {
              description:
                'Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.',
              step: 'create',
              title: 'Create or Import a Wallet',
            },
            {
              description:
                'Once you set up your wallet, click below to refresh the browser and load up the extension.',
              step: 'refresh',
              title: 'Refresh your browser',
            },
          ],
        },
      },
    };
  },
});
