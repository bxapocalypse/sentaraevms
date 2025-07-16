import { useState } from 'react'
import { commonConditionsAccordion } from '../data'

const CommonConditionsAccordions = () => {
  const [activeIds, setActiveIds] = useState([]) // Track open accordion IDs

  // Toggle function to open/close accordion
  const toggleAccordion = (id) => {
    if (activeIds.includes(id)) {
      // If already active, remove it (close)
      setActiveIds(activeIds.filter((activeId) => activeId !== id))
    } else {
      // Add to active (open)
      setActiveIds([...activeIds, id])
    }
  }

  return (
    <div className="container__content--primary--accordions">
      <div className="accordion__group">
        {commonConditionsAccordion.map((accordion) => {
          const isActive = activeIds.includes(accordion.id)

          return (
            <div className="accordion" key={accordion.id}>
              <div className="accordion__panel contract">
                <button
                  className={`accordion__heading ${isActive ? 'active' : ''}`}
                  tabIndex="0"
                  aria-controls={`collapsible-${accordion.id}`}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  <h3>{accordion.title}</h3>
                  <span className="accordion__heading--icon">
                    <span
                      className="fas fa-angle-down icon--rotate"
                      aria-hidden="true"
                    ></span>
                  </span>
                </button>

                <div
                  className="accordion__body--wrapper"
                  style={{ display: isActive ? 'block' : 'none' }}
                >
                  <div className="accordion__body" aria-expanded={isActive}>
                    {accordion.paragraphs &&
                      accordion.paragraphs.map((para) => (
                        <div key={para.id}>
                          {para.paragraphOne && <p>{para.paragraphOne}</p>}
                          {para.paragraphTwo && <p>{para.paragraphTwo}</p>}
                          {para.paragraphThree && (
                            <p>
                              {para.paragraphThree}
                              {para.unorderedList && (
                                <ul>
                                  {para.unorderedList.map((item) => (
                                    <li key={item.id}>
                                      <strong>{item.title}</strong>
                                      {item.text}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CommonConditionsAccordions
