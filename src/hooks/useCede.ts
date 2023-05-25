import { detectCedeProvider } from '@cedelabs/providers';
import { vaults } from '@store/store';
import { ICedeAccounts, ICedeVaults } from '@store/types';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import useHasMounted from './useHasMounted';

export const useCedeProvider = () => {
  const [cedeProvider, setCedeProvider] = useState<any>();
  const hasMount = useHasMounted();

  const getProvider = async () => {
    const provider = await detectCedeProvider();

    setCedeProvider(provider);
  };

  useEffect(() => {
    getProvider();
  }, [hasMount]);

  return { cedeProvider };
};

export const useVault = () => {
  const [vault] = useAtom(vaults);

  const [currentVault, setCurrentVault] = useState<ICedeVaults>();

  useEffect(() => {
    if (!vault) return;
    setCurrentVault(vault);
  }, [vault]);

  return { ...currentVault };
};

export const useVaultBalances = () => {
  const [balances, setBalances] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const { cedeProvider } = useCedeProvider();

  const { isActive, accounts, id } = useVault();

  const [vault] = useAtom(vaults);

  const getBalances = async () => {
    try {
      const accountsName: string[] | undefined = accounts?.map(
        (account) => account.accountName
      );
      const data = await cedeProvider.request({
        method: 'balances',
        params: {
          vaultId: id,
          accountNames: accountsName ? accountsName : [],
        },
      });

      setBalances(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!cedeProvider) return;

    setLoading(true);
    getBalances();
  }, [accounts, isActive, cedeProvider, id]);

  return { balances, loading };
};
