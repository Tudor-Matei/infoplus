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
    "faEllipsisH",
    "faCoffee",
    "faTools",
    "faMountain",
    "faEnvelope",
    "faPhone",
    "faArrowRight",
    "faExternalLinkAlt"
];

library.add(iconNames.map(iconName => icons[iconName]));
export default library;
