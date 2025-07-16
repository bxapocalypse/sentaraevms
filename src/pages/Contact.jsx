import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import pelvicImg from '../images/Sentara_EVMS_Pelvic_Floor_Center.png'
import headneckImg from '../images/HeadandNeckCenter.png'
import fetalcareImg from '../images/Screenshot_2021-02-15_Google_Maps.png'

const Contact = () => {
  return (
    <>
      <Header />
      <main id="main__content" className="container--full__page" tabindex="0">
        <div className="container__content--primary">
          <h1>
            <Title title="Contact Us" />
          </h1>
          <div className="container__location">
            <div className="container__location--address">
              <h2>Sentara-EVMS Comprehensive Pelvic Floor Center</h2>
              <p>
                2075 Glenn Mitchell Drive, Suite 500
                <br /> Virginia Beach, VA 23456
                <br /> <a href="tel:757-446-7979">757-446-7979</a>
              </p>
            </div>

            <div className="container__location--map">
              <a href="https://goo.gl/maps/kW1ya8Lo5Gi5kyg99">
                <img src={pelvicImg} />
              </a>
            </div>
          </div>

          <div className="container__location">
            <div className="container__location--address">
              <h2>Sentara-EVMS Comprehensive Head and Neck Center</h2>
              <p>
                600 Gresham Drive, Suite 1100
                <br />
                Norfolk, VA 23507
                <br /> <a href="tel:1-888-220-2214">1-888-220-2214</a>
              </p>
            </div>

            <div className="container__location--map">
              <a href="https://goo.gl/maps/CibnBe3HUs46z8AF6">
                <img src={headneckImg} />
              </a>
            </div>
          </div>

          <div className="container__location">
            <div className="container__location--address">
              <h2>Sentara-EVMS Fetal Care Center</h2>
              <p>
                825 Fairfax Avenue, Suite 310 <br />
                Norfolk, VA 23507
                <br /> <a href="tel:757-446-7900">757-446-7900</a>
              </p>
            </div>

            <div className="container__location--map">
              <a href="https://goo.gl/maps/8Thg3dUKJpS9nQP39">
                <img src={fetalcareImg} />
              </a>
            </div>
          </div>

          <div className="container__location">
            <div className="container__location--address"></div>

            <div className="container__location--map">
              <a href=""></a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Contact
