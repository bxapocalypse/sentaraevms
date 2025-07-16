import Header from '../../components/Header'
import ClinicFooter from '../../components/ClinicFooter'
// import heroImg from '../../images/HeadNeck_ScreenShots-016-702x254.jpg'
import { cardioSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/HeadandNeckCenter.png'
import download from '../../pdf/Sentara-EVMS_CardioObstetricsBrochure_accessible.pdf'
import downloadImg from '../../images/Cardio-obstetrics_Brochure.png'
const ProgramObjectives = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Program Objectives</h1>
            {/* <div className="content__img--hero">
              <div className="content--center">
                <img
                  className="img--responsive--hero"
                  src={heroImg}
                  alt="Two medical professionals conducting surgery"
                />
              </div>
            </div> */}
            {/* <!-- END .content--img--hero --> */}

            <section class="content__body">
              <div class="content--center">
                <p>
                  There is a national call to provide comprehensive,
                  multi-disciplinary care for pregnant women at risk of
                  cardiovascular complications. While some Cardio-Obstetric
                  programs exist in major cities, none provide a clear
                  multi-disciplinary approach within a 250-mile radius of
                  Hampton Roads. The Sentara-EVMS Cardio-Obstetric program will
                  address this gap, focusing on clinical care, research, and
                  education.
                </p>
                <p>
                  The program includes a monthly joint clinic with EVMS
                  Maternal-Fetal Medicine and Sentara Cardiology, along with a
                  monthly meeting to create, review, and update patient care
                  plans and expand educational topics to give residents and
                  fellows an in-depth understanding of cardiovascular disease in
                  pregnancy.
                </p>
                <p>
                  <strong>Our objectives include the following:</strong>
                </p>
                <ol>
                  <li>
                    Improve outcomes for pregnant women with complex
                    cardiovascular diseases through coordinated care and early
                    intervention when necessary.
                  </li>
                  <li>
                    Reduce racial disparities in the delivery of high-risk
                    pregnancy care for pregnancies involving cardiovascular
                    diseases.
                  </li>
                  <li>
                    Reduce the cost of care through an evidence-based approach
                    to pregnancies with complex congenital heart disease.
                  </li>
                  <li>
                    Enhance research collaboration on pregnancies with
                    cardiovascular diseases by collecting program data.
                  </li>
                  <li>
                    Continuously monitor and report health-related outcomes over
                    time.
                  </li>
                </ol>
              </div>
              {/* <!-- END .content--center --> */}
            </section>
          </div>
          {/* <!-- END .container__content--primary --> */}

          <SecondaryPageSidebar
            sidebarItems={cardioSidebarLinks}
            phone="757-446-7900"
            addressName="Sentara-EVMS Cardio-Obstetrics Center"
            addressLine1="825 Fairfax Avenue, Suite 310"
            addressLine2="Norfolk, VA 23507"
            addressMap={addressMap}
            download={download}
            downloadImg={downloadImg}
          />
        </div>
        {/* <!-- END .container__content --> */}
      </main>

      <ClinicFooter
        locationName="Sentara-EVMS Cardio-Obstetrics Center"
        addressLine1="825 Fairfax Avenue, Suite 310"
        addressLine2="Norfolk, VA 23507"
        phone="757-446-7900"
      />
    </>
  )
}
export default ProgramObjectives
