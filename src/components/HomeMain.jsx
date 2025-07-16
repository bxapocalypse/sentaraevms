import Hero from './Hero'

const HomeMain = () => {
  return (
    <main id="main__content" className="container--full__page" tabindex="0">
      <div className="container__content--primary">
        <h1>Sentara-EVMS</h1>
        <Hero />
        {/* <!-- END .content--img--hero --> */}

        <section className="content__body">
          <div className="content--center">
            <h2>Collaborating for Better Health</h2>
            <p>
              Sentara Healthcare and Eastern Virginia Medical School have
              combined their clinical, technological and research expertise to
              launch new, innovative clinical programs to serve residents of
              Hampton Roads and beyond. The joint programs combine the latest in
              research, state-of-the-art technology and a multidisciplinary care
              team to bring patients quality care through advanced diagnosis and
              treatment options for a variety of medical conditions.
            </p>
            <p>
              The contribution of EVMS and Sentara Healthcare to the wellness of
              Hampton Roads citizens and those who travel here for care is a
              tradition that is being carried on through this collaboration.
              This unique partnership makes it possible to offer a wide range of
              state-of-the-art diagnostic and therapeutic services for a variety
              of medical conditions experienced by men and women.
            </p>
          </div>
          {/* <!-- END .content--center --> */}
        </section>
      </div>
      {/* <!-- END .container__content--primary --> */}
    </main>
  )
}
export default HomeMain
