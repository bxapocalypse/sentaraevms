import Header from '../components/Header'
import ClinicFooter from '../components/ClinicFooter'
// import heroImg from '../../images/111213-Sinesi_CyberKnife-2-702x254.jpg'
import { headNeckSidebarLinks } from '../data'
import AdvancedTechSidebarLinks from '../components/AdvancedTechSidebarLinks'
import SecondaryPageSidebar from '../components/SecondaryPageSidebar'
import heroImg from '../images/111213-Sinesi_CyberKnife-2-702x254.jpg'
import addressMap from '../images/HeadandNeckCenter.png'

const AdvancedTechnology = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Advanced Technology</h1>
            <div className="content__img--hero">
              <div className="content--center">
                <img
                  className="img--responsive--hero"
                  src={heroImg}
                  alt="Two medical professionals conducting surgery"
                />
              </div>
            </div>
            {/* <!-- END .content--img--hero --> */}

            <section class="content__body">
              <div class="content--center">
                <p>
                  The Sentara-EVMS Comprehensive Head and Neck Center comprises
                  a team of surgeons and researchers who are advancing treatment
                  and improving care.
                </p>
                <p>
                  In 2010, they were the first in Virginia to introduce
                  TransOral Robotic Surgery (TORS) at Sentara Norfolk General
                  Hospital. TORS is a minimally invasive surgical procedure for
                  removing tumors in the throat and voice box (larynx). Instead
                  of making an incision, the surgeons work through the patient's
                  mouth to remove tumors.
                </p>
                <p>
                  They use the da Vinci robotic surgical system with TORS, and
                  the system makes it possible to see the area that needs
                  surgery clearly and without making any external surgical cuts.
                  Patients appreciate this because there is less scarring, a
                  lower risk of infection and blood transfusion, easier
                  swallowing afterwards and a quicker return to everyday living.
                </p>
                <p>
                  For patients needing radiation therapy or with cancers in
                  locations that are difficult to access surgically, the
                  CyberKnife Robotic Radiosurgery System offers the center's
                  clinicians to provide effective treatment with minimial side
                  effects.
                </p>
                <p>&nbsp;</p>
              </div>
              {/* <!-- END .content--center --> */}
            </section>
          </div>
          {/* <!-- END .container__content--primary --> */}

          <SecondaryPageSidebar
            sidebarItems={headNeckSidebarLinks}
            addressName="Sentara-EVMS Comprehensive Head and Neck Center"
            addressLine1="600 Gresham Drive, Suite 1100"
            addressLine2="Norfolk, VA 23507"
            phone="1-888-220-2214"
            addressMap={addressMap}
          />
        </div>
        {/* <!-- END .container__content --> */}
      </main>

      <ClinicFooter
        locationName="Sentara-EVMS Comprehensive Head and Neck Center"
        addressLine1="600 Gresham Drive, Suite 1100"
        addressLine2="Norfolk, VA 23507"
        phone="1-888-220-2214"
      />
    </>
  )
}
export default AdvancedTechnology
