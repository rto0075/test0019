// 質問と回答のデータ
const questions = [
    {
        question: "あなたのライフスタイルに最も近いものはどれですか？",
        answers: ["ビジネスマン / 女性らしいスタイル", "アクティブでスポーティ", "シンプルでミニマル", "高級感とクラシック"],
        points: [0, 1, 2, 3] // 各選択肢のポイント
    },
    {
        question: "時計に求める機能は？",
        answers: ["使いやすさ、シンプルなデザイン", "高精度な計測機能（スポーツやダイビング用）", "スマート機能（スマートウォッチ）", "上質で高級な素材やデザイン"],
        points: [0, 1, 2, 3]
    },
    {
        question: "予算の範囲は？",
        answers: ["1万円以下", "1万～5万円", "5万～20万円", "20万円以上"],
        points: [0, 1, 2, 3]
    },
    {
        question: "時計を選ぶ際に最も重視する点は？",
        answers: ["ブランド", "機能性（GPS、心拍数計測など）", "デザイン（シンプル・洗練）", "ストーリーや歴史"],
        points: [0, 1, 2, 3]
    }
];

let currentQuestionIndex = 0;
let totalPoints = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.answers.map((answer, index) => `
            <button class="answer" onclick="selectAnswer(${index})">${answer}</button>
        `).join('')}
    `;
}

function selectAnswer(index) {
    totalPoints += questions[currentQuestionIndex].points[index];
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultText = "";

    if (totalPoints <= 4) {
        resultText = "あなたに似合う時計ブランドは：セイコー、シチズン";
    } else if (totalPoints <= 6) {
        resultText = "あなたに似合う時計ブランドは：ガーミン、カシオ G-SHOCK";
    } else if (totalPoints <= 8) {
        resultText = "あなたに似合う時計ブランドは：ノモス、オメガ";
    } else {
        resultText = "あなたに似合う時計ブランドは：ロレックス、パテック・フィリップ";
    }

    document.getElementById("result-text").textContent = resultText;
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
}

function resetQuiz() {
    currentQuestionIndex = 0;
    totalPoints = 0;
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    loadQuestion();
}

// 最初の質問を読み込む
loadQuestion();
