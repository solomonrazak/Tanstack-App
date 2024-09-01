import { createFileRoute } from '@tanstack/react-router';
import DataDisplay from '../components/DataDisplay'; // Adjust the import path as needed

// Define a dynamic route for data endpoints
export const Route = createFileRoute('/dataRoutes')({
  component: DataDisplay,
});
