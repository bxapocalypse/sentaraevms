import mapImg from '../images/HeadandNeckCenter.png'

const SidebarEmbeddedMap = () => {
  return (
    <div className="map__sidebar--embed">
      <a href="https://goo.gl/maps/A8wZaFoTvgvddxLS9">
        <img src={mapImg} alt="Head and Neck Center location" />
      </a>
    </div>
  )
}
export default SidebarEmbeddedMap
