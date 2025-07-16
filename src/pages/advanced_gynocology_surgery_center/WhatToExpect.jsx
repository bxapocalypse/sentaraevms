import Header from '../../components/Header'
import ClinicFooter from '../../components/ClinicFooter'
import { advancedTechSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/SEAGS_Center.png'

const WhatToExpect = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>What to Expect During Your Visit</h1>
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
                <p>
                  During your visit your doctor will try to determine with is
                  the most likely cause of your symptoms.
                </p>
                <p>
                  Your doctor will need to gather information to help create a
                  prioritized list of conditions. Your doctor will start
                  gathering this information by taking a detailed history and
                  performing a physical exam. This will help the doctor
                  determine what test will need to be ordered.
                </p>
                <h2>History</h2>
                <p>
                  Your doctor will ask detailed questions about your symptoms
                  and how they affect your quality of life. Questions about your
                  ob/gyn, medical, surgical, &amp; family history are also
                  important. The patient questionnaire is an important step in
                  this process.
                </p>
                <h2>Physical exam</h2>
                <p>
                  Your doctor will perform an exam to determine if there are any
                  abnormalities present. This step is important because it helps
                  your doctor determine what tests need to be ordered or if
                  medication, physical therapy or if surgery would be best.
                </p>
                <h2>Tests</h2>
                <p>
                  Common tests include blood test, cultures to test for
                  infections, tissue biopsies, or radiology tests. Pelvic
                  ultrasound is commonly performed when a patient had pain or
                  heavy periods. Your doctor may decide that a CT scan or MRI
                  may be needed as well. A special ultrasound called a Saline
                  Infusion Sonogram or SIS can is helpful in determining the
                  cause of heavy periods. An in office hysteroscopy is another
                  test that can help your doctor see if the lining of your
                  uterus is normal.
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
export default WhatToExpect
