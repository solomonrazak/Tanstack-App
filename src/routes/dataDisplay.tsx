import { createFileRoute } from '@tanstack/react-router';
import DataDisplay from '../components/DataDisplay';

export const Route = createFileRoute('/dataDisplay')({
  component: DataDisplay,
})