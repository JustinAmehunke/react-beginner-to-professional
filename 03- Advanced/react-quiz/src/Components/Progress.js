function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
    return (
        <header className="progress" >
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p><strong>{index}</strong> /{numQuestions}</p>
            <p><strong>{points}</strong> / {maxPossiblePoints}</p>
        </header>
    )
}

export default Progress
