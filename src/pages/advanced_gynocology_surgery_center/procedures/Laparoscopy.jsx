import Header from '../../../components/Header'
import GynoFooter from '../../../components/GynoFooter'
import AdvancedTechSidebarLinks from '../../../components/AdvancedTechSidebarLinks'
import LaparoscopyAccordions from '../../../components/LaparoscopyAccordions'
const Laparoscopy = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row">

        </div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Laparoscopy</h1>
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
              <div class="content--center"></div>
              {/* <!-- END .content--center --> */}
            </section>

            <LaparoscopyAccordions />
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
export default Laparoscopy
