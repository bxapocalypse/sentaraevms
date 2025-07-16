import homepageHero from '../images/homepage-hero-image.jpg'

const Hero = () => {
  return (
    <div className="content__img--hero">
      <div className="content--center">
        <img
          className="img--responsive--hero"
          src={homepageHero}
          alt="Two medical professionals conducting surgery"
        />
      </div>
      {/* <!-- END .content--center --> */}
    </div>
  )
}
export default Hero
