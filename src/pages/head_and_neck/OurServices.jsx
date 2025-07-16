import Header from '../../components/Header'
import HeadNeckFooter from '../../components/HeadNeckFooter'
import heroImg from '../../images/HeadNeck_ScreenShots-003-702x254.jpg'
import { headNeckSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/HeadandNeckCenter.png'
const OurServices = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Our Services</h1>
            <div className="content__img--hero">
              <div className="content--center">
                <img
                  className="img--responsive--hero"
                  src={heroImg}
                  alt="Two medical professionals conducting surgery"
                />
              </div>
              {/* <!-- END .content--center --> */}
            </div>
            {/* <!-- END .content--img--hero --> */}

            <section class="content__body">
              <div class="content--center">
                <p>
                  Our multidisciplinary team encompasses a broad array of
                  services and resources, including:
                </p>
                <ul>
                  <li>Head and neck surgery</li>
                  <li>Endocrinology</li>
                  <li>Medical Oncology</li>
                  <li>Radiation Oncology</li>
                  <li>Neuroradiology</li>
                  <li>Dentistry</li>
                  <li>Oncology-certified dietician</li>
                  <li>Licensed clinical social worker</li>
                  <li>Oncology research nurses</li>
                  <li>Speech and physical therapy</li>
                  <li>Patient support groups</li>
                  <li>Palliative care</li>
                </ul>
              </div>
              {/* <!-- END .content--center --> */}
            </section>
          </div>
          {/* <!-- END .container__content--primary --> */}

          <SecondaryPageSidebar
            sidebarItems={headNeckSidebarLinks}
            phone="1-888-220-2214"
            addressName="Sentara-EVMS Comprehensive Head and Neck Center"
            addressLine1="600 Gresham Drive, Suite 1100"
            addressLine2="Norfolk, VA 23507"
            addressMap={addressMap}
          />
        </div>
        {/* <!-- END .container__content --> */}
      </main>

      <HeadNeckFooter />
    </>
  )
}
export default OurServices
