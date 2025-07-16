import HeadNeckFooter from '../../components/HeadNeckFooter'
import Header from '../../components/Header'
import heroImg from '../../images/HeadNeck_ScreenShots-025-702x254.jpg'
import { headNeckSidebarLinks } from '../../data'
import SecondaryPageSidebar from '../../components/SecondaryPageSidebar'
import addressMap from '../../images/HeadandNeckCenter.png'

const MeetOurTeam = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Meet Our Team</h1>
            <div className="content__img--hero">
              <div className="content--center">
                <img
                  className="img--responsive--hero"
                  src={heroImg}
                  alt="Two medical professionals conducting surgery"
                />
              </div>
              {/* <!-- END .content--center --> */}
            </div>
            {/* <!-- END .content--img--hero --> */}

            <section class="content__body">
              <div class="content--center">
                <h2>
                  Hampton Roads' Leading Interdisciplinary Team for Head and
                  Neck Treatment
                </h2>
                <p>
                  The Sentara-EVMS Comprehensive Head and Neck Center combines
                  Sentara Healthcare's state-of-the-art facilities with the
                  clinical expertise of EVMS Otolaryngology-Head and Neck
                  Surgery physicians. This partnership brings together the
                  latest in research, surgical technology and team-based care to
                  offer our patients quality, advanced diagnosis and treatment
                  options.
                </p>
                <p>
                  Our board-certified, fellowship-trained physicians are
                  uniquely qualified to perform microvascular reconstructive
                  surgery for head and neck cancer patients without the need to
                  coordinate with other surgical services. The capabilities at
                  Sentara Norfolk General Hospital made it possible for EVMS
                  surgeons to perform the first transoral robotic surgery in
                  Virginia, and advanced treatment options — including the
                  DaVinci minimally invasive and CyberKnife radiotherapy robotic
                  surgery systems — provide a level of precision available in
                  this region only at the Sentara EVMS Comprehensive Head and
                  Neck Center.
                </p>
                <p>
                  The center includes a dedicated surgeon-scientist who develops
                  translational research studies to hasten the process of
                  converting new scientific discoveries into enhanced patient
                  care.
                </p>
                <table summary="Sentara-EVMS Comprehensive Head and Neck Center Medical Team members">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Endocrinology:</strong>
                        <br />{' '}
                        <a
                          href="https://www.evms.edu/patient_care/specialties/endocrine_and_metabolic_disorders/physicians_and_providers/physicians_and_providers/name_6891_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Cheryl Almirante, MD »
                        </a>
                      </td>
                      <td>
                        <strong>Head and Neck Surgery:</strong>
                        <br />{' '}
                        <a
                          title="Matthew Bak, MD"
                          href="https://www.evms.edu/patient_care/specialties/head__neck_surgeryvoice__swallowing_center/physicians_and_providers/physicians_and_providers/name_5860_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Matthew Bak, MD »
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Dentistry:</strong>
                        <br />{' '}
                        <a
                          href="http://www.bonniedental.com/index.php/about-us"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Marshall Bonnie, DDS »
                        </a>
                      </td>
                      <td>
                        <strong>Neuroradiology:</strong>
                        <br />{' '}
                        <a
                          title="John Campbell, MD"
                          href="http://www.sentara.com/hampton-roads-virginia/findadoctor/healthcare-provider/campbell-john-8410.aspx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          John Campbell, MD »
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Radiation Oncology:</strong>
                        <br />{' '}
                        <a
                          title="Edwin Crandley, MD"
                          href="https://www.evms.edu/patient_care/specialties/radiation_oncology/physicians_and_providers/providers/name_49143_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Edwin Crandley, MD »
                        </a>
                      </td>
                      <td>
                        <strong>Neuroradiology:</strong>
                        <br />{' '}
                        <a
                          href="http://www.sentara.com/hampton-roads-virginia/findadoctor/healthcare-provider/donnal-john-412.aspx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          John Donnal, MD »
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Oral and Maxillofacial Surgery:</strong>
                        <br />{' '}
                        <a
                          title="Klaus Guter, DDS"
                          href="http://www.sentara.com/hampton-roads-virginia/findadoctor/healthcare-provider/guter-klaus-632.aspx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Klaus Guter, DDS »
                        </a>
                      </td>
                      <td>
                        <strong>Head and Neck Surgery:</strong>
                        <br />{' '}
                        <a
                          title="Daniel Karakla, MD"
                          href="https://www.evms.edu/patient_care/specialties/ent_surgeons/our_providers/name_5871_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Daniel Karakla, MD »
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Neuroradiology:</strong>
                        <br />{' '}
                        <a
                          title="Yoonah Kim, MD"
                          href="http://www.sentara.com/hampton-roads-virginia/findadoctor/healthcare-provider/kim-yoonah-7743.aspx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Yoonah Kim, MD »
                        </a>
                      </td>
                      <td>
                        <strong>Neuroradiology:</strong>
                        <br />{' '}
                        <a
                          title="Karah Lanier, MD"
                          href="http://www.sentara.com/hampton-roads-virginia/findadoctor/healthcare-provider/lanier-karah-8151.aspx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Karah Lanier, MD »
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Radiation Oncology:</strong>
                        <br />{' '}
                        <a
                          title="Erik Lappinen, MD"
                          href="https://www.evms.edu/patient_care/specialties/radiation_oncology/physicians_and_providers/providers/name_49144_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Erik Lappinen, MD »
                        </a>
                      </td>
                      <td>
                        <strong>Endocrinology:</strong>
                        <br />{' '}
                        <a
                          title="David Lieb, MD"
                          href="https://www.evms.edu/patient_care/specialties/endocrine_and_metabolic_disorders/physicians_and_providers/physicians_and_providers/name_6893_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          David Lieb, MD »
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Medical Oncology:</strong>
                        <br />{' '}
                        <a
                          title="Dean McGaughey, III, MD"
                          href="http://www.sentara.com/hampton-roads-virginia/findadoctor/healthcare-provider/mcgaughey-dean-1055.aspx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Dean McGaughey, III, MD »
                        </a>
                      </td>
                      <td>
                        <strong>Pathology:</strong>
                        <br />{' '}
                        <a
                          href="http://www.sentara.com/hampton-roads-virginia/findadoctor/healthcare-provider/silverberg-marc-1502.aspx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Marc Silverberg »
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Radiation Oncology:</strong>
                        <br />{' '}
                        <a
                          href="https://www.evms.edu/patient_care/specialties/radiation_oncology/physicians_and_providers/providers/name_12734_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Mark Sinesi, MD »
                        </a>
                      </td>
                      <td>
                        <strong>Endocrinology:</strong>
                        <br />{' '}
                        <a
                          href="https://www.evms.edu/patient_care/specialties/endocrine_and_metabolic_disorders/physicians_and_providers/physicians_and_providers/name_6894_en.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Jagdeesh Ullal, MD »
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- END .content--center --> */}
            </section>
          </div>
          {/* <!-- END .container__content--primary --> */}

          <SecondaryPageSidebar
            sidebarItems={headNeckSidebarLinks}
            phone="1-888-220-2214"
            addressName="Sentara-EVMS Comprehensive Head and Neck Center"
            addressLine1="600 Gresham Drive, Suite 1100"
            addressLine2="Norfolk, VA 23507"
            addressMap={addressMap}
          />
        </div>
        {/* <!-- END .container__content --> */}
      </main>

      <HeadNeckFooter />
    </>
  )
}
export default MeetOurTeam
