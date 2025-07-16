import Header from '../../components/Header'
import ClinicFooter from '../../components/ClinicFooter'
import { advancedTechSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/SEAGS_Center.png'
import { Link } from 'react-router'

const Procedures = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Procedures</h1>
            {/* <div className="content__img--hero"> */}
            {/* <div className="content--center">
            <img
              className="img--responsive--hero"
              src={heroImg}
              alt="Two medical professionals conducting surgery"
            />
          </div> */}
            {/* <!-- END .content--center --> */}
            {/* </div> */}
            {/* <!-- END .content--img--hero --> */}

            <section class="content__body">
              <div class="content--center">
                <h2>
                  <Link to="/advanced_gynecology_surgery_center/procedures/imaging">
                    Imaging ≫
                  </Link>
                </h2>
                <ul>
                  <li>Transvaginal Ultrasound</li>
                  <li>Saline Infusion Sonography (SIS)</li>
                  <li>CT Scan</li>
                  <li>Magnetic Resonance Imaging (MRI)</li>
                </ul>
                <h2>
                  <Link to="/advanced_gynecology_surgery_center/procedures/hysteroscopy">
                    Hysteroscopy ≫
                  </Link>
                </h2>
                <ul>
                  <li>Diagnostic Hysteroscopy</li>
                  <li>Polypectomy</li>
                  <li>Myomectomy</li>
                  <li>Septum Resection</li>
                  <li>Lysis of Intrauterine Adhesions</li>
                </ul>
                <h2>
                  <Link to="/advanced_gynecology_surgery_center/procedures/laparoscopy">
                    Laparoscopy ≫
                  </Link>
                </h2>
                <ul>
                  <li>Diagnostic Laparoscopy</li>
                  <li>Hysterectomy</li>
                  <li>Ovarian Cystectomy</li>
                  <li>Excision of Endometriosis</li>
                  <li>Myomectomy</li>
                  <li>2-Port Myomectomy and Hysterectomy</li>
                  <li>Single Incision Surgery</li>
                  <li>Laparoscopic Assisted Myomectomy with Mini-laparotomy</li>
                  <li>Robotic Surgery</li>
                </ul>
              </div>
              {/* <!-- END .content--center --> */}
            </section>
          </div>
          {/* <!-- END .container__content--primary --> */}

          <SecondaryPageSidebar
            sidebarItems={advancedTechSidebarLinks}
            addressName="Sentara-EVMS Advanced Gynecologic Surgery Center"
            addressLine1="2075 Glenn Mitchell Drive, Suite 500"
            addressLine2="Norfolk, VA 23456"
            phone="757.689.5104"
            addressMap={addressMap}
          />
        </div>
        {/* <!-- END .container__content --> */}
      </main>

      <ClinicFooter
        locationName="Sentara-EVMS Advanced Gynecologic Surgery Center"
        addressLine1="2075 Glenn Mitchell Drive, Suite 500"
        addressLine2="Norfolk, VA 23456"
        phone="757.689.5104"
      />
    </>
  )
}
export default Procedures
