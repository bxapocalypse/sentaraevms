import Header from '../../components/Header'
import HeadNeckFooter from '../../components/HeadNeckFooter'
import heroImg from '../../images/HeadNeck_ScreenShots-016-702x254.jpg'
import { headNeckSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/HeadandNeckCenter.png'

const ComprehensiveApproach = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Our Comprehensive Approach</h1>
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
                  Our comprehensive approach includes original institutional
                  research studies and ongoing clinical trials in head and neck
                  cancer. The center's multidisplinary team meets weekly at head
                  and neck tumor conferences to discuss all cancer patient
                  diagnoses and to discuss treatment options and plans. This
                  approach fosters a collaborative approach to care among the
                  region's leading specialists in surgical management of head
                  and neck cancers and thyroid complications.
                </p>
                <p>&nbsp;</p>
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
export default ComprehensiveApproach
