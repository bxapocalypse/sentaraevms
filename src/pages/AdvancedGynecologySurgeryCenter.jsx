import Header from '../components/Header'
import ClinicFooter from '../components/ClinicFooter'
import { advancedTechSidebarLinks } from '../data'
import SecondaryPageSidebar from '../components/SecondaryPageSidebar'
import addressMap from '../images/SEAGS_Center.png'

const AdvancedGynecologySurgeryCenter = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Sentara-EVMS Advanced Gynecologic Surgery Center</h1>

            <section class="content__body">
              <div class="content--center">
                <p>
                  The Sentara-EVMS Advanced Gynecologic Surgery Center is a
                  collaborative initiative between Sentara Healthcare and EVMS
                  Obstetrics and Gynecology. The goal of this Center is to
                  provide innovative, patient-focused quality care for those who
                  require treatment and surgery for complex gynecologic
                  conditions. The Center combines the expertise from the
                  following gynecologic surgical sub-specialist:
                </p>
                <ul>
                  <li>Minimally Invasive Gynecologic Surgery</li>
                  <li>Urogynecology</li>
                  <li>Maternal-Fetal Medicine.</li>
                </ul>
                <p>
                  The surgeons within the Advanced Gynecologic Surgery Center
                  treat a variety of gynecologic conditions and are experts in
                  treating patients with conditions including:
                </p>
                <ul>
                  <li>Fibroids</li>
                  <li>Endometriosis</li>
                  <li>Ovarian cysts</li>
                  <li>Pelvic pain from adhesions</li>
                  <li>Pelvic floor disorders</li>
                  <li>Incontinence</li>
                </ul>
                <p>
                  The mission of the Sentara-EVMS Advanced Gynecologic Surgery
                  Center is to provide an individualized, patient focused
                  approach to women seeking care for gynecologic conditions. The
                  center provides the most innovative and cutting edge
                  approaches to diagnostic testing, medical treatments,
                  office-based procedures, &amp; surgical techniques. This
                  approach allows the patient and physician to reach a
                  personalized treatment plan that focuses on the patient’s
                  treatment goals and not just their diagnosis. The Sentara-EVMS
                  Advanced Gynecologic Surgery Center is dedicated to providing
                  the community with an exceptional, quality healthcare
                  experience in treating patients with complex gynecologic
                  issues.
                </p>
                <p>&nbsp;</p>
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
export default AdvancedGynecologySurgeryCenter
