import Header from "./components/Header";
import CreateResume from "./pages/CreateResume";
import MainPage from "./pages/MainPage";
import PersonalDetails from "./components/PersonalDetails";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/createResume" element={<CreateResume />} />

        <Route path="/details" element={<Details />}>
          <Route path="personalDetails" element={<PersonalDetails />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="edu" element={<Education />} />
          <Route path="exp" element={<Experience />} />
          <Route path="lang" element={<Languages />} />
          <Route path="skills" element={<Skills />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
