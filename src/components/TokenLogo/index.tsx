import { ITokenDetailDefault } from '@store/store';
import React, { useState } from 'react';

interface ITokenLogo {
  detail?: ITokenDetailDefault;
  style?: string;
}

const TokenLogo = ({ detail, style }: ITokenLogo) => {
  const [logo, setLogo] = useState(false);

  return (
    <img
      src={
        logo || !detail
          ? '/assets/token-not-found.png'
          : `https://raw.githubusercontent.com/PiperFinance/LO/main/logo/${detail.symbol}.png`
      }
      alt={detail && detail.name}
      className={style}
      onError={() => setLogo(true)}
    />
  );
};

export default TokenLogo;
