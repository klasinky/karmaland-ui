import Channels from './components/Channels';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { karmaland, tortillaland } from './data';
import { karmalandLogo, tortillalandLogo } from './utils';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/karmaland-ui" exact element={<Home/>}/>
        <Route
          path="karmaland"
          element={
            <Channels
              key="karmaland"
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
              key="tortillaland"
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
