const HeadNeckFooter = () => {
  return (
    <footer id="footer" tabindex="0">
      <div class="footer__info--address" aria-label="Location">
        <p>
          Sentara-EVMS Comprehensive Head and Neck Center &nbsp; | &nbsp; 600
          Gresham Drive, Suite 1100 &nbsp; | &nbsp; Norfolk, VA 23507 &nbsp; |
          &nbsp;
          <a href="tel:1-888-220-2214">1-888-220-2214</a>
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
export default HeadNeckFooter
