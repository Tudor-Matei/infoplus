import * as icons from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
];

library.add(iconNames.map((iconName) => icons[iconName]));
export default library;
