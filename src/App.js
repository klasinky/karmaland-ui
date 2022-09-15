import Channels from './components/Channels';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { karmaland, tortillaland } from './data';
import { karmalandLogo, tortillalandLogo } from './utils';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  />
        <Route
          path="karmaland"
          element={
            <Channels
              streamers={karmaland}
              description="Karmaland"
              logo={karmalandLogo}
            />
          }
        />

        <Route
          path="tortillaland"
          element={
            <Channels
              streamers={tortillaland}
              description="Tortillaland"
              logo={tortillalandLogo}
            />
          }
        />
      </Routes>

      <Faqs />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
