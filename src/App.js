import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Search from './pages/Search'
import MedicalServices from './pages/MedicalServices'
import HeadAndNeckCenter from './pages/HeadAndNeckCenter'
import MeetOurTeam from './pages/head_and_neck/MeetOurTeam'
import OurServices from './pages/head_and_neck/OurServices'
import ComprehensiveApproach from './pages/head_and_neck/ComprehensiveApproach'
import ThyroidProgram from './pages/head_and_neck/ThyroidProgram'
import AdvancedTechnology from './pages/AdvancedTechnology'
import AdvancedGynecologySurgeryCenter from './pages/AdvancedGynecologySurgeryCenter'
import WhatToExpect from './pages/advanced_gynocology_surgery_center/WhatToExpect'
import CommonConditions from './pages/advanced_gynocology_surgery_center/CommonConditions'
import OvarianCyst from './pages/advanced_gynocology_surgery_center/common_conditions/OvarianCyst'
import Leiomyomas from './pages/advanced_gynocology_surgery_center/common_conditions/Leiomyomas'
import Adenomyosis from './pages/advanced_gynocology_surgery_center/common_conditions/Adenomyosis'
import Endometriosis from './pages/advanced_gynocology_surgery_center/common_conditions/Endometriosis'
import Procedures from './pages/advanced_gynocology_surgery_center/Procedures'
import Imaging from './pages/advanced_gynocology_surgery_center/procedures/Imaging'
import Hysteroscopy from './pages/advanced_gynocology_surgery_center/procedures/Hysteroscopy'
import Laparoscopy from './pages/advanced_gynocology_surgery_center/procedures/Laparoscopy'
import CardioObstetricsCenter from './pages/CardioObstetricsCenter'
import ProgramObjectives from './pages/cardio_obstetrics_center/ProgramObjectives'
import ClinicalServices from './pages/cardio_obstetrics_center/ClinicalServicesAndTreatments'
import ClinicalMeetOurTeam from './pages/cardio_obstetrics_center/MeetOurTeam'
import Layout from './components/Layout'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="medical_services" element={<MedicalServices />} />
        <Route path="head_and_neck_center" element={<HeadAndNeckCenter />} />
        <Route
          path="/head_and_neck/advanced_technology"
          element={<AdvancedTechnology />}
        />
        <Route path="/head_and_neck/meet_our_team" element={<MeetOurTeam />} />
        <Route path="/head_and_neck/our_services" element={<OurServices />} />
        <Route
          path="/head_and_neck/thyroid_program"
          element={<ThyroidProgram />}
        />
        <Route
          path="/head_and_neck/comprehensive_approach"
          element={<ComprehensiveApproach />}
        />

        <Route
          path="/advanced_gynecology_surgery_center"
          element={<AdvancedGynecologySurgeryCenter />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/what_to_expect_during_your_visit"
          element={<WhatToExpect />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/common_conditions"
          element={<CommonConditions />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/common_conditions/ovarian_cyst"
          element={<OvarianCyst />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/common_conditions/uterine_fibroids_leiomyoma"
          element={<Leiomyomas />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/common_conditions/adenomyosis"
          element={<Adenomyosis />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/common_conditions/endometriosis"
          element={<Endometriosis />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/procedures"
          element={<Procedures />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/procedures/hysteroscopy"
          element={<Hysteroscopy />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/procedures/laparoscopy"
          element={<Laparoscopy />}
        />
        <Route
          path="/advanced_gynecology_surgery_center/procedures/imaging"
          element={<Imaging />}
        />

        <Route
          path="/cardio_obstetrics_center"
          element={<CardioObstetricsCenter />}
        />
        <Route
          path="/cardio_obstetrics_center/program_objectives"
          element={<ProgramObjectives />}
        />
        <Route
          path="/cardio_obstetrics_center/clinical_services_and_treatments"
          element={<ClinicalServices />}
        />
        <Route
          path="/cardio_obstetrics_center/meet_our_team"
          element={<ClinicalMeetOurTeam />}
        />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
