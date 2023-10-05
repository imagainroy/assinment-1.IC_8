import "./App.css";
import BioData from "./components/BioData";
import Address from "./components/Address";
import Contactinfo from "./components/Contactinfo";
import InterestSection from "./components/InterestSection";
import PersonalInfo from "./components/PersonalInfo";
import SkillSection from "./components/SkillSection";
function App() {
  return (
    <div className="App">
      <BioData>
        <PersonalInfo name="DEBASHIS ROY" age="20" gender="MALE" />
        <Address
          city="Dohar Nawabgonj"
          distric="Dhaka"
          zip="1320"
          country="Bangladesh"
        />
        <Contactinfo
          email="roy.debashis1101@gmail.com"
          phone="+880-9647500070, +880-9647500"
          linkedin="www.linkedin.com/DEBASHIS ROY"
          facebook="www.facebook.com/Debashis Roy"
        />

        <SkillSection
          skills={["HTML & CSS", "Javascript", "Python", "Matplotlib"]}
        />
        <InterestSection
          interests={["PROGRAMING & TECH", "Nature & Astonomy", "WEB DESIGN"]}
        />
      </BioData>
    </div>
  );
}

export default App;
