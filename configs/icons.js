import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "@fortawesome/free-solid-svg-icons";

const iconNames = [
  "faSearch",
  "faUser",
  "faBars",
  "faAngleDown",
  "faCheck",
  "faBolt",
  "faLightbulb",
  "faSignInAlt",
  "faSignOutAlt",
  "faEllipsisH",
  "faCoffee",
  "faTools",
  "faMountain",
  "faEnvelope",
  "faPhone",
  "faArrowRight",
  "faArrowLeft",
  "faExternalLinkAlt",
  "faFilter",
  "faClock",
  "faMemory",
  "faCodeBranch",
  "faUpload",
  "faTimesCircle",
  "faTimes",
  "faPlus",
  "faPen",
  "faTrash",
  "faCalendar",
  "faDumbbell",
];

library.add(iconNames.map((iconName) => icons[iconName]));
export default library;
