import { headNeckSidebarLinks } from '../data'

const SecondaryPageSidebar = ({
  phone,
  addressName,
  addressLine1,
  addressLine2,
  addressMap,
  download,
  downloadImg,
}) => {
  const hasDownloadContent = download || downloadImg
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
        <div
          class="cta__phone"
          aria-label="Call for questions or an appointment"
        >
          <button class="btn__phone">
            <span class="fas fa-phone-square-alt" aria-hidden="true"></span>
            <p>
              Appointments or questions
              <br />
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          </button>
        </div>
        {/* <!-- END .cta__phone --> */}
        {/* <!-- Location address and Google map image and link --> */}
        <div className="map__sidebar" aria-label="Location with map link">
          <strong>{addressName}</strong> <br />
          {addressLine1}
          <br />
          {addressLine2}
          {/* <!-- END .map__sidebar--address --> */}
          <img src={addressMap} alt={`Map to: ${addressName}`} />
          {/* <!-- END .map__sidebar--embed -->	 */}
        </div>
        {/* <!-- END .map__sidebar --> */}
        {/* <!-- END .content__sidebar --> */}

        <div class="pdf__sidebar">
          {hasDownloadContent && (
            <div class="pdf__sidebar--doc">
              {download && (
                <a
                  title="Download brochure PDF"
                  href={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {downloadImg && (
                    <img
                      src={downloadImg}
                      alt="Sentara EVMS Comprehensive Pelvic Floor Center overview thumbnail"
                    />
                  )}
                </a>
              )}

              {/* <a title="Download overview PDF" href="" target="_blank"></a> */}
            </div>
          )}
          {/* <!-- END .pdf__sidebar --> */}
        </div>
      </div>
    </section>
  )
}
export default SecondaryPageSidebar
