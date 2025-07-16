import Header from '../../../components/Header'
import GynoFooter from '../../../components/GynoFooter'
// import heroImg from '../../images/111213-Sinesi_CyberKnife-2-702x254.jpg'
import AdvancedTechSidebarLinks from '../../../components/AdvancedTechSidebarLinks'

const OvarianCyst = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Ovarian Cyst</h1>
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
                  Ovarian cysts are common in women of reproductive age. Women
                  are often diagnosed with ovarian cyst when they present to
                  their healthcare provider for pelvic pain or other issues.
                  Below are answers to questions that women often have about
                  ovarian cysts.
                </p>
                <h2>What is an Ovarian Cyst?</h2>
                <p>
                  A cyst is a fluid collection and ovarian cyst are formed
                  normally in the middle of a woman’s menstrual cycle. Ovarian
                  cysts may be associated with pelvic pain but other causes of
                  pelvic pain should be considered.
                </p>
                <h2>What is the best way to diagnosis an ovarian cyst?</h2>
                <p>
                  Transvaginal ultrasound is the preferred test for evaluating
                  ovarian cyst and other gynecologic conditions. A MRI may be
                  warranted for some patients but is not often needed.
                </p>
                <h2>What are "functional" cysts?</h2>
                <p>
                  These cysts that form in the middle of a woman’s menstrual
                  cycles are called "functional" cysts. They may cause pain for
                  a few days but typically resolve on their own. However, hey
                  can take as long as 6-12 weeks to resolve. Birth control pills
                  may prevent the formation of these cyst but do not treat a
                  cyst that has already formed.
                </p>
                <h2>Can ovarian cysts become abnormal?</h2>
                <p>
                  Sometimes ovarian cysts become abnormal. They may grow large
                  or have small areas of abnormal tissue. If these cysts begin
                  to cause significant pain or don’t resolve on their own,
                  surgery may be discussed. Sometimes you doctor may want blood
                  work to evaluate type of cyst or mass you have. Depending on
                  your age, symptoms, and characteristics of the cyst, you and
                  your doctor may decide to observe the cyst or discuss surgical
                  options.
                </p>
                <p>
                  Surgical treatments include cystectomy or oophorectomy
                  (removal of the entire ovary).
                </p>
                <p>
                  In a ovarian cystectomy the doctor removes the ovarian cyst
                  but leaves the rest of the ovary in place. With an
                  oophorectomy the entire ovary and fallopian tube are removed.
                  The decision to remove just the ovarian cyst or the entire
                  ovary depends on the patient and their circumstances.
                </p>
                <p>&nbsp;</p>
              </div>
              {/* <!-- END .content--center --> */}
            </section>
          </div>
          {/* <!-- END .container__content--primary --> */}

          <AdvancedTechSidebarLinks />
        </div>
        {/* <!-- END .container__content --> */}
      </main>

      <GynoFooter />
    </>
  )
}
export default OvarianCyst
