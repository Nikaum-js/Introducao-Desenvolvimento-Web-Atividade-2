import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import AppRoutes from "./Routes";

export default function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}
