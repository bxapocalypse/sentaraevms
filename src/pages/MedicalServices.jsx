import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import smileDoc from '../images/Smiling_Physician-702x254.jpg'

const MedicalServices = () => {
  return (
    <>
      <Header />
      <main id="main__content" className="container--full__page" tabindex="0">
        <div className="container__content--primary">
          <h1>
            {' '}
            <Title title="A Multidisciplinary Team Approach" />
          </h1>
          <div className="content__img--hero">
            <div className="content--center">
              <img
                className="img--responsive--hero"
                src={smileDoc}
                alt="A doctor smiling"
              />
            </div>
            {/* <!-- END .content--center --> */}
          </div>
          {/* <!-- END .content--img--hero --> */}

          <section className="content__body">
            <div className="content--center">
              <p>
                Many medical conditions are interrelated, so a patient's
                diagnosis and treatment may begin with one specialist and
                continue with another. The Sentara-EVMS programs coordinate this
                care from a variety of medical specialists and ancillary health
                providers such as nutritionists and physical therapists, to
                deliver the most advanced care available for patients.
              </p>
            </div>
            {/* <!-- END .content--center --> */}
          </section>
        </div>
        {/* <!-- END .container__content--primary --> */}

        {/* <!-- If hero image is empty, remove div so there isn't a large gap between H1 and first content heading or paragraph --> */}
      </main>
      <Footer />
    </>
  )
}
export default MedicalServices
