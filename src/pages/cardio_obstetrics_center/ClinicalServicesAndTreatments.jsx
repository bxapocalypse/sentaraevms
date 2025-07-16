import Header from '../../components/Header'
import ClinicFooter from '../../components/ClinicFooter'
// import heroImg from '../../images/HeadNeck_ScreenShots-016-702x254.jpg'
import { cardioSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/HeadandNeckCenter.png'
import download from '../../pdf/Sentara-EVMS_CardioObstetricsBrochure_accessible.pdf'
import downloadImg from '../../images/Cardio-obstetrics_Brochure.png'

const ClinicalServicesAndTreatments = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Clinical Services and Treatments</h1>
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
                  Sentara-EVMS Cardio-Obstetrics Center offers the best possible
                  care to ensure mom and baby stay safe and cared for before,
                  during and after pregnancy. Our program addresses specific
                  concerns of pregnant women with hypertension or heart disease.
                </p>
                <h3>Clinical services</h3>
                <ul>
                  <li>
                    Preconception counseling and risk assessment for women with
                    preexisting heart conditions or other cardiovascular risk
                    factors.
                  </li>
                  <li>
                    During pregnancy, our patients will have:
                    <ul>
                      <li>Comprehensive assessment of cardiovascular health</li>
                      <li>Development of a personalized prenatal care plan</li>
                      <li>
                        Pregnancy and cardiac monitoring throughout pregnancy
                      </li>
                      <li>
                        Delivery planning considering potential complications
                        related to cardiovascular health
                      </li>
                    </ul>
                  </li>
                  <li>
                    Postpartum care, including close follow-up with the
                    obstetric and cardio-vascular team
                  </li>
                  <li>Regular review of care by the interdisciplinary team</li>
                </ul>
                <h3>Heart and vascular conditions we treat</h3>
                <ul>
                  <li>Congenital heart disease</li>
                  <li>Cardiomyopathy</li>
                  <li>Valvular heart disease</li>
                  <li>Arrhythmias</li>
                  <li>Pulmonary hypertension</li>
                  <li>Aortic disease</li>
                  <li>Cardiac transplant</li>
                  <li>Deep venous thrombosis and pulmonary embolism</li>
                  <li>Ischemic heart disease</li>
                  <li>Hypertensive disorders</li>
                </ul>
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
export default ClinicalServicesAndTreatments
