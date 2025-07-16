const FooterTop = ({
  //   footerItems = [],
  locationName,
  addressLine1,
  addressLine2,
  phone,
}) => {
  return (
    <footer id="footer" tabindex="0">
      <div class="footer__info--address" aria-label="Location">
        <p>
          {locationName} &nbsp; | &nbsp; {addressLine1} &nbsp; | &nbsp;{' '}
          {addressLine2} &nbsp; | &nbsp;
          <a href={`tel:${phone}`}>{phone}</a>
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
export default FooterTop
