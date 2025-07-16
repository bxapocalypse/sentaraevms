const GynoFooter = () => {
  return (
    <footer id="footer" tabindex="0">
      <div class="footer__info--address" aria-label="Location">
        <p>
          Sentara-EVMS Comprehensive Pelvic Floor Center &nbsp; | &nbsp; 2075
          Glenn Mitchell Drive, Suite 500 &nbsp; | &nbsp; Virginia Beach, VA
          23456 &nbsp; | &nbsp;
          <a href="tel:757-446-7979">757-446-7979</a>
        </p>
      </div>
      <div className="footer__info--standard">
        <div className="footer__info--standard--left">
          <p>
            &copy;Copyright
            <script>document.write(new Date().getFullYear());</script>
            <a
              href="https://www.sentara.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Sentara
            </a>{' '}
            -{' '}
            <a
              href="https://www.evms.edu"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              EVMS
            </a>
          </p>
        </div>
        {/* <!-- END .footer__info--standard--left --> */}
        <div className="footer__info--standard--right">
          <p>
            <a href="https://sentaraevms.com/privacy_policy">Privacy Policy</a>
          </p>
        </div>
        {/* <!-- END .footer__info--standard--right --> */}
      </div>
      {/* <!-- END .footer__info--standard --> */}
    </footer>
  )
}
export default GynoFooter
