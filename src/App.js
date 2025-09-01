import { useState, useRef } from "react";
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Section10 from './components/Section10';
import Section11 from './components/Section11';
import Section12 from './components/Section12';
import Section13 from './components/Section13';
import Section14 from './components/Section14';
import Section15 from './components/Section15';
import Section16 from './components/Section16';
import Section17 from './components/Section17';
import Footer from './components/Footer';
import TopBtn from './components/TopBtn';
import PopUp from './components/PopUp';
import BottomNav from './components/BottomNav';


function App() {
  const section2Ref = useRef(null);
  const section4Ref = useRef(null);
  const section10Ref = useRef(null);
  const section13Ref = useRef(null);
  const section14Ref = useRef(null);
  // 팝업 상태
  const [ isPopUpOpen, setIsPopUpOpen ] = useState(true);


  return (
    <>
      <Header
        section2Ref={section2Ref}
        section4Ref={section4Ref}
        section10Ref={section10Ref}
        section13Ref={section13Ref}
        section14Ref={section14Ref}
      />
      <Section1 />
      <Section2 ref={section2Ref} />
      <Section3 />
      <Section4 ref={section4Ref} />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 ref={section10Ref} />
      <Section11 />
      <Section12 />
      <Section13 ref={section13Ref} />
      <Section14 ref={section14Ref} />
      <Section15 />
      <Section16 />
      <Section17 />
      <Footer />
      <TopBtn />
      <BottomNav />
      
      {isPopUpOpen && <PopUp onClose={() => setIsPopUpOpen(false)} />}
    </>
  );
}

export default App;
