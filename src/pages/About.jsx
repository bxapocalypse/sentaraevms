import Title from '../components/Title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeMain from '../components/HomeMain'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Header />
      <main id="main__content" className="container--full__page" tabindex="0">
        <div className="container__content--primary">
          <h1>
            <Title title="About Us" />
          </h1>
          <div className="content__img--hero">
            <div className="content--center"></div>
            {/* <!-- END .content--center --> */}
          </div>
          {/* <!-- END .content--img--hero --> */}

          <section className="content__body">
            <div className="content--center">
              <h2>The Power of the Partnership</h2>
              <p>
                Designed for the patient's benefit, new programs and services
                offered by this partnership originate from the national
                reputation for research, medical education and clinical care by
                EVMS, and the quality care, leading edge technology, innovative
                medical diagnosis and focus on patient safety by Sentara.
              </p>
              <h2>About Eastern Virginia Medical School</h2>
              <p>
                Eastern Virginia Medical School is an academic health center
                dedicated to achieving excellence and fostering the highest
                ethical standards in patient care, education and research. We
                strive to improve the health of our community and to be
                recognized as a national center of intellectual and clinical
                strength in medicine. Caring for over 1,500 patients a day, EVMS
                Medical Group is a not-for-profit physician practice supporting
                Eastern Virginia Medical School (EVMS). More than 150 physicians
                represent 20 specialties in primary care, obstetrics, medical
                and surgical care as well as radiation oncology, laboratory and
                pathology services. Learn more at{' '}
                <a href="https://www.evms.edu/" target="_blank">
                  evms.edu
                </a>
                .
              </p>
              <h2>About Sentara Healthcare</h2>
              <p>
                <a
                  href="https://www.sentara.com/hampton-roads-virginia/"
                  target="_blank"
                >
                  Sentara Healthcare
                </a>
                , based in Norfolk, Virginia, celebrates more than 128 years in
                relentless pursuit of its mission to improve health every day
                through innovation, compassion and community benefit. Sentara is
                a fully-integrated not-for-profit system of 12 hospitals in
                Virginia and North Carolina, including a Level I trauma center
                with&nbsp;
                <a
                  href="https://www.sentara.com/hampton-roads-virginia/medicalservices/services/nightingale.aspx"
                  target="_blank"
                >
                  Nightingale Regional Air Ambulance
                </a>{' '}
                support and the nationally-ranked{' '}
                <a
                  href="https://www.sentara.com/hampton-roads-virginia/hospitalslocations/locations/sentara-heart-hospital.aspx"
                  target="_blank"
                >
                  Sentara Heart Hospital
                </a>
                . The Sentara family includes four medical groups, ambulatory
                campuses, post-acute care services, the physician-led{' '}
                <a
                  href="https://www.sentaraqualitycarenetwork.com/"
                  target="_blank"
                >
                  Sentara Quality Care Network
                </a>
                , the accredited{' '}
                <a
                  href="https://www.sentara.com/hampton-roads-virginia/medicalservices/services/cancer.aspx"
                  target="_blank"
                >
                  Sentara Cancer Network
                </a>
                , the{' '}
                <a href="https://www.sentara.edu/" target="_blank">
                  Sentara College of Health Sciences
                </a>
                ,&nbsp;
                <a href="https://www.optimahealth.com/" target="_blank">
                  Optima Health Plan
                </a>{' '}
                members in Virginia, Alabama and Ohio, and a team of
                professionals nearly 30,000 strong. Sentara is strategically
                focused on continuous improvement in quality, safety, clinical
                outcomes and the patient experience and pursues key clinical
                goals through high-performance teams across the enterprise.
                Efforts are centered on providing the right care in the right
                setting at the right time and adding value to the communities we
                serve.
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
export default About
