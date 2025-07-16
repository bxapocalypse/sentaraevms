import Header from '../../../components/Header'
import GynoFooter from '../../../components/GynoFooter'
// import heroImg from '../../images/111213-Sinesi_CyberKnife-2-702x254.jpg'
import AdvancedTechSidebarLinks from '../../../components/AdvancedTechSidebarLinks'

const Adenomyosis = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Adenomyosis</h1>
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
                  Adenomyosis is as condition where the endometrial glands grow
                  into the myometrium(muscle of the uterus). These glands are
                  stimulated by hormones in the body. Patients with adenomyosis
                  often experience heavy monthly cycles and their cycles can be
                  very painful.
                </p>
                <h2>How do I know If I have Adenomyosis?</h2>
                <p>
                  Your doctor my suspect adenomyosis based on your history and
                  physical examination. Ultrasound can often detect areas in the
                  uterus that are suspicious for adenomyosis. An MRI is very
                  good at detecting MRI but is not commonly used outside
                  research studies. The only way to definitively determine if
                  you have adenomyosis is by having a pathologist examine the
                  muscle cells of the uterus under a microscope. This can only
                  done after a patient has undergone a hysterectomy.
                </p>
                <h2>What are the treatment options for Adenomyosis?</h2>
                <p>
                  Treatment options for adenomyosis often depends on the
                  symptoms of the patient and what treatments have already been
                  used. Treatment is usually medical or surgical. An endometrial
                  biopsy may be needed to look for cancer of the endometrium
                  (lining of the womb). Medical treatment is often used first
                  and the goal is to suppress the growth of the glands that have
                  invaded the muscle of the uterus. Suppression of these glands
                  are usually hormonal forms of birth control including pills,
                  shots, or an intrauterine device.
                </p>
                <p>
                  If medical treatments have failed then surgery is considered.
                  An endometrial ablation may be considered if the main symptom
                  is heavy bleeding. However, an endometrial ablation does not
                  treat endometrial glands that have invaded deep into the
                  muscle. An endometrial ablation might not relieve the severe
                  menstrual pain associated with adenomyosis. Surgical treatment
                  is often in the form of hysterectomy. By removing the muscle
                  of the uterus adenomyoisis is often cured. A hysterectomy can
                  be performed without removing the ovaries. There have been
                  case reports of resection of areas of adenomyosis in the
                  patients who desire to have children in the future however
                  this is not the typical treatment and should only be
                  considered in select patients.
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
export default Adenomyosis
