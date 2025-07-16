import Header from '../components/Header'
import ClinicFooter from '../components/ClinicFooter'
import heroImg from '../images/cardio_obstetrics.png'
import { cardioSidebarLinks } from '../data'
import SecondaryPageSidebar from '../components/SecondaryPageSidebar'
import download from '../pdf/Sentara-EVMS_CardioObstetricsBrochure_accessible.pdf'
import downloadImg from '../images/Cardio-obstetrics_Brochure.png'
import addressMap from '../images/Cardio-obstetrics_map.png'

const CardioObstetricsCenter = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Sentara-EVMS Cardio-Obstetrics Center</h1>
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
                  The Sentara-EVMS Cardio-Obstetrics Center provides
                  comprehensive care for pregnant individuals who have
                  pre-existing or newly developed cardiovascular conditions.
                </p>
                <p>
                  The program aims to ensure the well-being of both the mother
                  and the developing fetus by closely monitoring and managing
                  the patient's cardiovascular health throughout their pregnancy
                  and the postpartum period.&nbsp;
                </p>
              </div>
              {/* <!-- END .content--center --> */}

              <div class="container__content--primary--supplemental">
                <aside class="content__callout">
                  <h3>Comprehensive care for safe pregnancy</h3>
                  <p>
                    Sentara-EVMS Cardio-Obstetrics Center offers the best
                    possible care to ensure mom and baby stay safe and cared for
                    before, during and after pregnancy. Our program addresses
                    specific concerns of pregnant women with hypertension or
                    heart disease.
                  </p>
                </aside>
              </div>
            </section>
          </div>
          {/* <!-- END .container__content--primary --> */}

          <SecondaryPageSidebar
            sidebarItems={cardioSidebarLinks}
            addressName="Sentara-EVMS Cardio-Obstetrics Center"
            addressLine1="825 Fairfax Avenue, Suite 310"
            addressLine2="Norfolk, VA 23507"
            phone="757-446-7900"
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
export default CardioObstetricsCenter
