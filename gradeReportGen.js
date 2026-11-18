function getLetterGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassed(score) {
    if (score >= 60) {
        return true;
    }
    return false;
}

function getFeedback(grade) {
    if (grade === 'A') {
        return 'Excellent work!';
    } else if (grade === 'B') {
        return 'Good job!';
    } else if (grade === 'C') {
        return 'Satisfactory';
    } else if (grade === 'D') {
        return 'Needs improvement';
    } else {
        return 'Failed';
    }
}

function createGradeReport(name, score) {
    const letterGrade = getLetterGrade(score);
    const passed = hasPassed(score);
    const feedback = getFeedback(letterGrade);

    return {
        name: name,
        score: score,
        Grade: letterGrade,
        passed: passed,
        feedback: feedback
    };
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));