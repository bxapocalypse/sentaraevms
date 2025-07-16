import Header from '../../../components/Header'
import GynoFooter from '../../../components/GynoFooter'
// import heroImg from '../../images/111213-Sinesi_CyberKnife-2-702x254.jpg'
import AdvancedTechSidebarLinks from '../../../components/AdvancedTechSidebarLinks'
import CommonConditionsAccordions from '../../../components/CommonConditionsAccordions'

const Leiomyomas = () => {
  return (
    <>
      <Header />

      <main id="main__content" className="container" tabindex="0">
        <div className="row"></div>
        {/* <!-- END .row --> */}

        <div className="container__content">
          <div className="container__content--primary">
            <h1>Uterine Fibroids (Leiomyoma)</h1>

            <section class="content__body">
              <div class="content--center">
                <p>
                  Uterine fibroids are benign tumors that are made up of the
                  muscle and connective tissue from the muscle of the uterus.
                  Fibroids may be a single mass or in groups. They range in size
                  from 1 mm to more than 20 cm (8 inches) in diameter. They may
                  grow in the wall of the uterus, extend into the cavity (inside
                  of the uterus), or toward the outside surface of the uterus.
                  In some cases they grow on stalks connecting them to the
                  uterus.
                </p>
                <h2>What causes uterine fibroids?</h2>
                <p>
                  The causes of fibroids are well understood. They mostly effect
                  women of child bearing age. We do believe that genetics
                  (family history) play some part in the growth of fibroids.
                  They are diagnosed in black women 2-3 times more frequently
                  than in white women but the exact reason is not clear.
                </p>
                <h2>Are fibroids cancer?</h2>
                <p>
                  Suspected fibroids are rarely caner. Fibroids are benign
                  tumors of the muscle cells in the uterus. The risk of fibroids
                  being uterine muscle cancer known as Leiomyosacroma is 0.23 %,
                  or 2-3 cases per 1000 women with fibroids. Patients who have
                  rapid growth of uterine fibroids, or fibroids that grow during
                  the menopause, should be evaluated for their risk of possible
                  cancer. At this time there is no blood test or definitive
                  imaging studies to confirm the diagnosis of Leiomyosarcoma.
                </p>
                <h2>Do hormones affect fibroids?</h2>
                <p>
                  We know that hormones can affect the growth of fibroids. They
                  are seldom seen in young women who have not begun to have
                  periods. The symptoms of uterine fibroids usually stabilize or
                  go away in women after menopause.
                </p>
                <h2>What are the symptoms of uterine fibroids?</h2>
                <p>
                  Most fibroids do not cause any symptoms. Fibroids may be
                  discovered during routine exam and an ultrasound is usually
                  ordered to confirm the diagnosis. Most do not require
                  treatment other than regular observation by a doctor. Symptoms
                  from fibroids result when the fibroids push on the other
                  organs in the pelvis and abdomen. The most common symptoms are
                  heavy menstrual bleeding, urinary complaints such as frequent
                  urination, or bowel symptoms such as constipation. If a
                  fibroids disrupts the lining of the uterus it may result in a
                  woman having difficulty becoming pregnant. Fibroids rarely
                  cause pain but can cause a significant sensation of pelvic
                  pressure. If the fibroid pushes on the nerves in the pelvis or
                  out grows it blood supply then significant pain can result but
                  again these instances are rare. Some women who have uterine
                  fibroids may experience the following symptoms:
                </p>
                <ul>
                  <li>Excessive bleeding during menstruation</li>
                  <li>Bleeding between periods</li>
                  <li>A feeling of fullness in the lower abdomen</li>
                  <li>
                    Frequent urination resulting from a fibroid that compresses
                    the bladder
                  </li>
                  <li>Constipation</li>
                  <li>Pain during sexual intercourse</li>
                  <li>Low back pain</li>
                  <li>Chronic vaginal discharge</li>
                  <li>Inability to urinate</li>
                  <li>Severe menstrual cramps</li>
                  <li>Infertility</li>
                </ul>
                <h2>What Treatments are available for uterine fibroids?</h2>
                <p>
                  For a woman with uterine fibroids that are not causing
                  symptoms, the best therapy may be observation. Periodic pelvic
                  examination and ultrasound may be recommended. At this time
                  there are not any medications available for the long term
                  treatment of fibroids that have been approved by the FDA.
                </p>
                <p>
                  If a woman heavy menstrual bleeding; moderate to severe pain;
                  infertility; or urinary tract or bowel problems; then she will
                  require Treatment. The type of treatment offered is determined
                  by the number, size, location, and symptoms related to
                  fibroids. Additionally, the desire for fertility will also
                  determine whether certain options are feasible. Treatment
                  options include:&nbsp;
                </p>
              </div>
              {/* <!-- END .content--center --> */}
            </section>

            <CommonConditionsAccordions />
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
export default Leiomyomas
