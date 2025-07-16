import {
  headNeckSidebarLinks,
  advancedTechSidebarLinks,
  cardioSidebarLinks,
} from '../data'

export const getSidebarLinks = (pathname) => {
  if (pathname.startsWith('/head_and_neck_center')) {
    return headNeckSidebarLinks
  } else if (pathname.startsWith('/advanced_gynecology_surgery_center')) {
    return advancedTechSidebarLinks
  } else if (pathname.startsWith('/cardio_obstetrics_center')) {
    return cardioSidebarLinks
  } else {
    return []
  }
}
