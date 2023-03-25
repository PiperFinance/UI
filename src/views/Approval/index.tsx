import useHasMounted from '@hooks/useHasMounted';
import Container from '@ui/Container/Container';
import AllowanceList from './components/allowanceList';

export default function Approval() {
  const hasMounted = useHasMounted();

  return (
    <Container customStyle="bg-gray-122 rounded-2xl p-1 sm:p-5 h-fit">
      <AllowanceList />
    </Container>
  );
}
