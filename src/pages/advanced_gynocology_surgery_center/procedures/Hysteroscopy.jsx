import Header from '../../../components/Header'
import GynoFooter from '../../../components/GynoFooter'
// import heroImg from '../../images/111213-Sinesi_CyberKnife-2-702x254.jpg'
import AdvancedTechSidebarLinks from '../../../components/AdvancedTechSidebarLinks'

const Hysteroscopy = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Hysteroscopy</h1>
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
                <h2>What is a hysteroscopy?</h2>
                <p>
                  A hysteroscopy is a procedure where your doctor inserts a
                  small camera in your vagina and through your cervix to look at
                  the inside of your uterus(womb). The camera is about the size
                  of a pen and allows the doctor to determine if the lining of
                  your uterine cavity is abnormal. Your doctor may be able to
                  treat your condition entirely with hysteroscopy without the
                  need for any incisions.
                </p>
                <h2>What conditions can be treated with hysteroscopy?</h2>
                <p>
                  Conditions that are contained within the endometrial cavity
                  (inside of womb) can usually be treated with hysteroscopy.
                  These conditions include endometrial polyps, a uterine spetum,
                  intrauterine adhesions, and fibroids that are inside the
                  uterine cavity.
                </p>
                <h2>Can I have a hysteroscopy in the office?</h2>
                <p>
                  Yes. Some patients may be able to have their hysteroscopy in
                  the office without the need to go to the operating room.
                  Sometime your doctor may even be able to treat your condition
                  with the hysteroscope in the office. The decision to perform
                  your hysteroscopy in the office or the operating room is a
                  decision that is individualized based on your situation.
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
export default Hysteroscopy
