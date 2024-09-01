import { createFileRoute } from '@tanstack/react-router';
import DataDisplay from '../components/DataDisplay'; 


export const Route = createFileRoute('/dataRoutes')({
  component: DataDisplay,
});
