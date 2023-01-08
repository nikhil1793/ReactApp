import { createRoot } from "react-dom/client";
import Header, { Title } from './components/Header';
// import * as obj from './components/Header';

import Main from './components/Main';
import Footer from './components/Footer';

const AppLayout = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
