import useHasMounted from '@hooks/useHasMounted';
import Container from '@ui/Container/Container';
import AllowanceList from './components/allowanceList';

export default function Portfolio() {
  const hasMounted = useHasMounted();

  return (
    <Container>
      <AllowanceList />
    </Container>
  );
}
