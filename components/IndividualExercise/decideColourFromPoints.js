export default function decideColourFromPoints(totalPointsGained) {
    if (totalPointsGained === 0) return "accent-failure-primary";
    else if (totalPointsGained > 0 && totalPointsGained < 60) return "accent-tertiary";
    else if (totalPointsGained >= 60 && totalPointsGained < 90) return "accent-secondary";
    else if (totalPointsGained >= 90 && totalPointsGained <= 98) return "accent-success";
    else return "accent-primary";
}
