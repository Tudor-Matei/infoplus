export default function difficultyText(difficulty) {
    return difficulty === 1
        ? "UȘOR"
        : difficulty === 2
        ? "MEDIU"
        : difficulty === 3
        ? "PROVOCATOR"
        : "DIFICIL";
}
