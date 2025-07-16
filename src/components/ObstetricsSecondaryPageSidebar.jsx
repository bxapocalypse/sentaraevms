import { headNeckSidebarLinks } from '../data'
import Quest from './Quest'
import download from '../pdf/Sentara-EVMS_CardioObstetricsBrochure_accessible.pdf'
import downloadImg from '../images/Cardio-obstetrics_Brochure.png'

const ObstetricsSecondaryPageSidebar = () => {
  //   const download = '../pdf/Sentara-EVMS_CardioObstetricsBrochure_accessible.pdf'
  //   const downloadImg = '../images/Cardio-obstetrics_Brochure.png'
  const addressName = 'Sentara-EVMS Cardio-Obstetrics Center'
  const addressLine1 = `825 Fairfax Avenue, Suite 310`
  const addressLine2 = `Norfolk, VA 23507`
  const addressMap = '../images/HeadandNeckCenter.png'
  return (
    <section className="container__content--secondary">
      <div className="content__sidebar">
        {/* <!-- Secondary nav with section links --> */}
        <nav className="nav__secondary" aria-label="Section navigation">
          <ul>
            {headNeckSidebarLinks.map((link) => {
              const { id, href, text } = link
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        {/* <!-- Phone number button --> */}
        <Quest />
        {/* <!-- END .cta__phone --> */}
        {/* <!-- Location address and Google map image and link --> */}
        <div className="map__sidebar" aria-label="Location with map link">
          <div className="map__sidebar--address">
            <p>
              <strong>{addressName}</strong>
              <br />
              {addressLine1}
              <br />
              {addressLine2}
            </p>
          </div>
          {/* <!-- END .map__sidebar--address --> */}

          {addressMap}
          {/* <!-- END .map__sidebar--embed -->	 */}
        </div>
        {/* <!-- END .map__sidebar --> */}
        {/* <!-- END .content__sidebar --> */}

        <div class="pdf__sidebar">
          <div class="pdf__sidebar--doc">
            <a
              title="Download brochure PDF"
              href={download}
              target="_blank"
              rel="noreferrer"
            >
              {
                <img
                  src={downloadImg}
                  alt="Sentara EVMS Comprehensive Pelvic Floor Center overview thumbnail"
                />
              }
            </a>

            {/* <a title="Download overview PDF" href="" target="_blank"></a> */}
          </div>
          {/* <!-- END .pdf__sidebar --> */}
        </div>
      </div>
    </section>
  )
}
export default ObstetricsSecondaryPageSidebar
