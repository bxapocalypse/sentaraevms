import Header from '../../components/Header'
import ClinicFooter from '../../components/ClinicFooter'
import { advancedTechSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/SEAGS_Center.png'
import { Link } from 'react-router-dom'

const CommonConditions = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Common Gynecologic Conditions</h1>
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
                <h2>
                  <Link to="/advanced_gynecology_surgery_center/common_conditions/ovarian_cyst">
                    Ovarian Cyst ≫
                  </Link>
                </h2>

                <p>
                  Fluid collections in the ovary. A cyst forms every month,
                  releases and egg and then is absorbed by the body. Sometimes
                  these cysts become abnormal because they aren’t absorbed,
                  growth to large, or have a growth inside. A transvaginal
                  ultrasound is the best test to evaluate an ovarian cyst. If an
                  ultrasound is repeated in 6-8 weeks, the cyst is often
                  resolved.
                </p>
                <h2>
                  <Link to="/advanced_gynecology_surgery_center/common_conditions/uterine_fibroids_leiomyoma">
                    Leiomyomas (fibroids) ≫
                  </Link>
                </h2>
                <p>
                  Cells inside the muscle of the uterus that grow faster than
                  other cells. Many women have fibroids and they never cause a
                  problem. Depending on the size, location, &amp; number of
                  fibroids, they can cause heavy periods, pressure, and
                  infertility.
                </p>
                <h2>
                  <Link to="/advanced_gynecology_surgery_center/common_conditions/adenomyosis">
                    Adenomyosis ≫
                  </Link>
                </h2>
                <p>
                  Condition where the glands from the lining of the uterus grow
                  into the muscle of the uterus. This condition can cause a
                  patient to have significant heavy and painful periods
                </p>
                <h2>
                  <Link to="/advanced_gynecology_surgery_center/common_conditions/endometriosis">
                    Endometriosis ≫
                  </Link>
                </h2>
                <p>
                  Condition where endometrial cells from the lining of the
                  uterus grow outside the uterus. The commonly attach and grow
                  on the lining of the pelvis, on the ovary, behind the uterus,
                  and can occasionally attach to the bladder and colon.
                </p>
                <h2>Endometrial Polyps</h2>
                <p>
                  Benign growth from the lining of the uterus. They often cause
                  heavy or irregular bleeding. They can often be removed through
                  the vagina and cervix without the need for any incisions and
                  may be able to be performed in the office
                </p>
                <h2>Endometritis</h2>
                <p>
                  Chronic bacterial infection of the lining of the uterus that
                  can cause heavy, irregular, &amp; painful periods. Treatment
                  is usually a 2 to 6 weeks course of antibiotics.
                </p>
                <h2>Pelvic Floor Spasm</h2>
                <p>
                  Condition where the muscles that make of the support of the
                  pelvis become tense. This can be triggered by several
                  different caused. One of the most effective treatments is
                  pelvic floor physical therapy. Another effective therapy is
                  neuromodulation. This is where a medication is prescribed that
                  decreased the sensitivity of the nerve.
                </p>
                <h2>Nerve Dysregulation</h2>
                <p>
                  Nerve network that regulates the pelvic is very complex and
                  not fully understood. If there is not an anatomic abnormality
                  to explain a patient’s pain, then a nerve dysfunction or
                  dysregulation may be suspected. In this condition the nerves
                  in the pelvis conduct signals through the spine abnormally.
                  Treatment commonly consist of medication the help the nerve
                  function more efficiently and decrease the abnormal signals
                  that are sent.
                </p>
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
export default CommonConditions
