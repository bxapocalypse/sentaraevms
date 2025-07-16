import { appointmentQuestions } from '../data'

const Quest = () => {
  return (
    <div
      className="cta__phone"
      aria-label="Call for questions or an appointment"
    >
      {appointmentQuestions.map((quest) => {
        const { id, href, text, phone } = quest
        return (
          <button key={id} className="btn__phone">
            <span className="fas fa-phone-square-alt" aria-hidden="true"></span>
            <p>
              {text}
              <br />
              <a href={href}>{phone}</a>
            </p>
          </button>
        )
      })}
    </div>
  )
}
export default Quest
