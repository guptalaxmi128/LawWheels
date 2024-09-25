import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import {useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';
import { getHeart} from "./actions/heart/heart";
import HeroLoader from "./components/layout/HeroLoader";
import "./App.css";
import Blog from "./components/blog/Blog";
import ParticularBlog from "./components/blog/ParticularBlog";





const MutualDivorce=lazy(()=>import('./components/mutualDivorce/MutualDivorce'));
const Divorce=lazy(()=>import('./components/mutualDivorce/Divorce'));
const Home = lazy(() => import("./components/section/Home"));
const About = lazy(() => import("./components/about/About"));
const Mutual = lazy(() => import("./components/mutualDivorce/Mutual"));
const Contact=lazy(() => import("./components/contact/Contact"));
const Process=lazy(() => import("./components/service/Process"));
const TermsConditions = lazy(() => import('./components/policies/TermsConditions'));
const RefundPolicy = lazy(() => import('./components/policies/RefundPolicy'));
const CookiesPolicy = lazy(() => import('./components/policies/CookiesPolicy'));
const DataProtection =lazy(() => import("./components/policies/DataProtection"));
const Disclaimer =lazy(() => import("./components/policies/Disclaimer"));
const PrivacyPolicy=lazy(() => import("./components/policies/PrivacyPolicy"));
const PropertyDispute=lazy(()=>import('./components/propertyMatter/PropertyDispute'));
const BreachContract=lazy(()=>import('./components/breachContract/BreachContract'));
const ExecutionApplication=lazy(()=>import('./components/civil/ExecutionApplication'));
const CyberCrime=lazy(()=>import('./components/criminal/CyberCrime'));
const BailApplication=lazy(()=>import('./components/criminal/BailApplication'));
const DomesticViolence=lazy(()=>import('./components/criminal/DomesticViolence'));
const POCSOAct = lazy(()=>import('./components/criminal/POCSOAct'));

const ChequeBounce=lazy(()=>import('./components/moneyRecovery/ChequeBounce'));
const DRT=lazy(()=>import('./components/moneyRecovery/DRT'));
const MoneyRecovery=lazy(()=>import('./components/moneyRecovery/MoneyRecoverySuit'));

const DraftingComplaints=lazy(()=>import('./components/consumerMatters/DraftingComplaints'));
const FoodAdulteration=lazy(()=>import('./components/consumerMatters/FoodAdulteration'));
const InflatedElectricity=lazy(()=>import('./components/consumerMatters/InflatedElectricity'));


const TrademarksOpposition=lazy(()=>import('./components/IP&Trademark/TrademarksOpposition'));
const TrademarksObjection=lazy(()=>import('./components/IP&Trademark/TrademarksObjection'));
const TMDillution =lazy(()=>import("./components/IP&Trademark/TMDillution"));
const TMLicencing=lazy(()=>import('./components/IP&Trademark/TMLicencing'));
const TMRectification=lazy(()=>import('./components/IP&Trademark/TMRectification'));
const TMWatchServices=lazy(()=>import('./components/IP&Trademark/TMWatchServices'));
const TMLitigations=lazy(()=>import('./components/IP&Trademark/TMLitigations'));
const TMRenewal=lazy(()=>import('./components/IP&Trademark/TMRenewal'));
const ShowCauseHearing=lazy(()=>import('./components/IP&Trademark/ShowCauseHearing'));
const Infringement=lazy(()=>import('./components/IP&Trademark/Infringement'));
const AssignmentOfTM=lazy(()=>import('./components/IP&Trademark/AssignmentOfTM'));

function App() {

  const dispatch=useDispatch();
  const startHeartAPITimer = () => {
    const heartAPITimer = setInterval(() => {
      // console.log('Dispatching getHeart'); // Should log every 5 seconds
      dispatch(getHeart());
    }, 3*60*1000); // Use 5 seconds for debugging

    return heartAPITimer;
  };

  useEffect(() => {
    // console.log('Component mounted');
    
    const timerId = startHeartAPITimer();
    return () => {
      // console.log('Clearing timer', timerId);
      clearInterval(timerId);
    };
  }, [dispatch]);

  return (
    <>
      <Router>
      <Suspense fallback={<HeroLoader />}>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/process" element={<Process />} />
          <Route path="/mutual-form" element={<Mutual  />} />
          <Route path="/mutual-divorce" element={<MutualDivorce  />} />
          <Route path="/divorce" element={<Divorce />} />
          <Route path="/about" element={<About  />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy  />} />
          <Route path="/terms-conditions" element={<TermsConditions  />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/property-dispute" element={<PropertyDispute />} />
          <Route path="/breach-contract" element={<BreachContract />} />
          <Route path="/execution-application" element={<ExecutionApplication />} />
          {/* criminal */}
          <Route path="/bail-application" element={<BailApplication />} />
          <Route path="/cyber-crimes" element={<CyberCrime />} />
          <Route path="/domestic-violence" element={<DomesticViolence />} />
          <Route path="/pocso-act" element={<POCSOAct />} />
          {/* money-recovery */}
          <Route path="/cheque-bounce" element={<ChequeBounce />} />
          <Route path="/debt-recovery-tribunal" element={<DRT />} />
          <Route path="/money-recovery-suit" element={<MoneyRecovery />} />
          {/* consumer matters */}
          <Route path="/drafting-complaints" element={<DraftingComplaints />} />
          <Route path="/food-adulteration" element={<FoodAdulteration />} />
          <Route path="/inflated-electricity" element={<InflatedElectricity />} />

          {/* trademark */}
          <Route path="/trademark-opposition" element={<TrademarksOpposition />} />
          <Route path="/trademark-objection" element={<TrademarksObjection />} />
          <Route path="/trademark-renewal" element={<TMRenewal />} />
          <Route path="/trademark-litigations" element={<TMLitigations />} />
          <Route path="/trademark-watch-services" element={<TMWatchServices />} />
          <Route path="/trademark-dillution" element={<TMDillution />} />
          <Route path="/trademark-licencing" element={<TMLicencing />} />
          <Route path="/trademark-rectification" element={<TMRectification />} />
          <Route path="/show-cause-hearing" element={<ShowCauseHearing />} />
          <Route path="/trademark-assignment" element={<AssignmentOfTM />} />
          <Route path="/trademark-infringement" element={<Infringement />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ParticularBlog />} />
        </Routes>
        <Toaster position="bottom-center" />
        </Suspense>
      </Router>
    </>
  );
}

export default App;




