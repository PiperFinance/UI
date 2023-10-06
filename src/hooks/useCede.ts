import { detectCedeProvider } from '@cedelabs/providers';
import { vaults } from '@store/store';
import { ICedeVaults } from '@store/types';
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
  const { isActive, accounts, id } = useVault();

  const { cedeProvider } = useCedeProvider();

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
          version: 1,
        },
      });

      setBalances(data[0].balances);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!accounts || !cedeProvider || !id) return;

    setLoading(true);
    getBalances();
  }, [accounts, isActive, cedeProvider, id]);

  return { balances, loading };
};

export const useVaultTransaction = () => {
  const [transactions, setTransactions] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { isActive, accounts, id } = useVault();

  const { cedeProvider } = useCedeProvider();

  const getTransactions = async () => {
    try {
      const accountsName: string[] | undefined = accounts?.map(
        (account) => account.accountName
      );
      const data = await cedeProvider.request({
        method: 'transactions',
        params: {
          vaultId: id,
          accountNames: accountsName ? accountsName : [],
          version: 1,
        },
      });

      setTransactions(data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    if (!accounts || !cedeProvider || !id) return;

    setLoading(true);
    getTransactions();
  }, [accounts, isActive, cedeProvider, id]);

  return { transactions, loading };
};
