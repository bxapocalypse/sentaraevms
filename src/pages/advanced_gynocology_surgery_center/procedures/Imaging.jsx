import Header from '../../../components/Header'
import GynoFooter from '../../../components/GynoFooter'
// import heroImg from '../../images/111213-Sinesi_CyberKnife-2-702x254.jpg'
import AdvancedTechSidebarLinks from '../../../components/AdvancedTechSidebarLinks'

const Imaging = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Imaging</h1>
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
                <h2>How will the doctor determine my diagnosis?</h2>
                <p>
                  Once your doctor has completed a history and performed an exam
                  there may be a need for additional testing. Most gynecologic
                  conditions warrant a pelvic ultrasound. During a pelvic
                  ultrasound images are taken of the cervix, uterus, &amp;
                  ovaries to determine if there are any abnormalities. An
                  ultrasonographer performs the test in the office and the
                  physician reviews the images. Sometimes a more specialized
                  testing may be required.
                </p>
                <p>
                  For patients with fibroids or heavy periods a Saline Infusion
                  Sonogram (SIS) may be performed. This is a special ultrasound
                  procedure where the physician injects a small amount of
                  sterile saline into the cavity of the uterus with a very small
                  tube.
                </p>
                <p>
                  The very small tube is passed through the cervix and into the
                  uterine cavity and the saline is injected while a transvaginal
                  ultrasound is being performed. A biopsy can be obtained at the
                  time of SIS to evaluate the uterine lining. This helps avoid a
                  separate procedure. If additional imaging is required, a CT
                  scan or MRI may be ordered to evaluate your condition.
                </p>
                <h2>When will I know the results of my ultrasound and SIS?</h2>
                <p>
                  Since the physician is performing the test with the
                  ultrasonographer, you will know the preliminary results that
                  day. If an endometrial biopsy is taken it will take several
                  days for the pathology results.
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
export default Imaging
