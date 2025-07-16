import Header from '../../components/Header'
import ClinicFooter from '../../components/ClinicFooter'
// import heroImg from '../../images/HeadNeck_ScreenShots-016-702x254.jpg'
import { cardioSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/HeadandNeckCenter.png'
import download from '../../pdf/Sentara-EVMS_CardioObstetricsBrochure_accessible.pdf'
import downloadImg from '../../images/Cardio-obstetrics_Brochure.png'
import gloria from '../../images/Too_Gloria.png'
import petra from '../../images/Lynch-Petra.png'
import lindsay from '../../images/Robbins-Lindsay.png'
import waller from '../../images/Waller_Jerri.png'

const MeetOurTeam = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Meet Our Team</h1>
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
                  The Sentara-EVMS Cardio-Obstetrics Center is a specialized
                  healthcare initiative designed to provide comprehensive care
                  for pregnant individuals who have pre-existing or newly
                  developed cardiovascular conditions. Our multidisciplinary
                  team is composed of experts in obstetrics, cardiovascular
                  medicine, cardiovascular surgery, anesthesia, genetics,
                  neonatology, labor and delivery nursing, and care
                  coordination.
                </p>
                <p>
                  The program will be led by Dr. Gloria Too, EVMS Maternal Fetal
                  Medicine Division Director and Dr. Petra Lynch, Sentara
                  Cardiology. The other EVMS team members are: Dr. Lindsay
                  Robbins, Dr. Jerri Waller and a full-time nurse
                  practitioner/patient navigator.
                </p>
                <table summary="Sentara-EVMS Comprehensive Head and Neck Center Medical Team members">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>
                            Maternal Fetal Medicine Division Director:
                          </strong>
                        </p>
                        <p>
                          <strong>
                            <img src={gloria} alt="Gloria Too, MD" />
                            <br />
                          </strong>
                          <a
                            href="https://www.evms.edu/directory/profiles/gloria-t-too.php"
                            target="_blank"
                            rel="noopener"
                          >
                            Gloria Too, MD »
                          </a>
                          <strong>
                            <br />
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Sentara Cardiology:</strong>
                        </p>
                        <p>
                          <img src={petra} alt="Petra Lynch, MD" />
                          <br />
                          <a
                            title="Petra Lynch, MD"
                            href="https://www.sentara.com/find-a-doctor/healthcare-provider/Lynch-Petra-152738"
                            target="_blank"
                            rel="noopener"
                          >
                            Petra Lynch, MD »
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>
                            <strong>Team Member:</strong>
                          </strong>
                        </p>
                        <p>
                          <strong>
                            <strong>
                              <img src={lindsay} alt="Lindsay Robbins, MD" />
                              <br />
                            </strong>
                          </strong>
                          <a
                            href="https://www.evms.edu/directory/profiles/lindsay-s-robbins.php"
                            target="_blank"
                            rel="noopener"
                          >
                            Lindsay Robbins, MD »
                          </a>
                          <strong>
                            <br />
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            <strong>Team Member:</strong>
                          </strong>
                        </p>
                        <p>
                          <strong>
                            <strong>
                              <img src={waller} alt="Jerri Waller, MD" />
                              <br />
                            </strong>
                          </strong>
                          <a
                            href="https://www.sentara.com/find-a-doctor/healthcare-provider/Waller-Jerri-86888"
                            target="_blank"
                            rel="noopener"
                          >
                            Jerri Waller, MD »
                          </a>
                          <strong>
                            <br />
                          </strong>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
export default MeetOurTeam
