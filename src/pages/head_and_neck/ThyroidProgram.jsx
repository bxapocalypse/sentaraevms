import Header from '../../components/Header'
import ClinicFooter from '../../components/ClinicFooter'
import { headNeckSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/HeadandNeckCenter.png'

const ThyroidProgram = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Thyroid Program</h1>
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
                  Sentara Norfolk General Hospital and Eastern Virginia Medical
                  School have partnered to provide multidisciplinary care for
                  patients with thyroid gland nodules, thyroid cancer and
                  parathyroid gland disease.
                </p>
                <p>
                  Our monthly endocrinology and otolaryngology clinic includes
                  an EVMS endocrinologist, EVMS head and neck surgeons and PSMG
                  cytopathologists. This clinic is the only of its kind in
                  Virginia and the greater region. Patients with thyroid cancer
                  are reviewed weekly at a multidisciplinary Thyroid Cancer Care
                  Conference, which includes participants from otolaryngology,
                  endocrinology, medical oncology, pathology, radiation
                  oncology, radiology and allied health. Our endocrinologist has
                  obtained specialty Endocrine Certification in Neck Ultrasound
                  (ECNU) training from the American Association of Clinical
                  Endocrinologists to provide unparalleled expertise in imaging
                  the neck and surrounding tissue.
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

      <ClinicFooter
        locationName="Sentara-EVMS Comprehensive Head and Neck Center"
        addressLine1="600 Gresham Drive, Suite 1100"
        addressLine2="Norfolk, VA 23507"
        phone="1-888-220-2214"
      />
    </>
  )
}
export default ThyroidProgram
