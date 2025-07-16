import Header from '../components/Header'
import HeadNeckFooter from '../components/HeadNeckFooter'
import heroImg from '../images/homepage-hero-image.jpg'
import SecondaryPageSidebar from '../components/SecondaryPageSidebar'
import addressMap from '../images/HeadandNeckCenter.png'
import { headNeckSidebarLinks } from '../data'

const HeadAndNeckCenter = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row">

        </div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Sentara-EVMS Comprehensive Head and Neck Center</h1>
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

            <section className="content__body">
              <div className="content--center">
                <h2>Advanced care. Outstanding results.</h2>
                <p>
                  The Sentara-EVMS Comprehensive Head and Neck Center offers
                  innovative treatment and multidisciplinary care for tumors and
                  conditions of the head, neck and thyroid. We provide medical
                  and surgical intervention for sites including the mouth, lips,
                  tonsils, thyroid, parathyroid, pharynx and larynx, as well as
                  cancerous and non-cancerous melanoma.
                </p>
                <p>
                  These patients require expert treatment from head and neck
                  surgeons and oncologists, as well as a variety of tumor-site
                  specific rehabilitative services, including nutrition
                  counseling, speech therapy and psychological care.
                </p>
                <p>
                  <a
                    href="/media/sentara_evms/pdfs/sentara-evms-medical-records-release.pdf"
                    target="_blank"
                  >
                    Medical Records Release Form
                  </a>
                </p>
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
export default HeadAndNeckCenter
