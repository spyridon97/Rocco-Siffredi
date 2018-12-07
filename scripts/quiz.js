document.addEventListener("DOMContentLoaded", function () {
    let questionBank = [
        {
            "question": "What am i?",
            "option1": "Producer",
            "option2": "Actor",
            "option3": "Director",
            "option4": "All of the above",
            "correct": "4"
        },
        {
            "question": "How tall am i?",
            "option1": "190cm",
            "option2": "180cm",
            "option3": "175cm",
            "option4": "185cm",
            "correct": "1"
        },
        {
            "question": "Where was i born?",
            "option1": "Milan",
            "option2": "Rome",
            "option3": "Otorna",
            "option4": "Naples",
            "correct": "3"
        },
        {
            "question": "How many times did AVN Magazine award me?",
            "option1": "15",
            "option2": "18",
            "option3": "20",
            "option4": "13",
            "correct": "2"
        },
        {
            "question": "Rate my appearance from 1 to 10",
            "option1": "1-4",
            "option2": "4-6",
            "option3": "6-8",
            "option4": "8-10",
            "correct": "4"
        }
    ];

    let questionNumber = 0;
    let stage = "#game1";
    let stage2 = {};
    let questionLock = false;
    let numberOfQuestions = questionBank.length;
    let score = 0;

    scrambleDatabase();
    displayQuestion();


    /**
     * @brief This function randomizes the data base in order to get the questions in a random order
     */
    function scrambleDatabase() {
        let currentIndex = questionBank.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = questionBank[currentIndex];
            questionBank[currentIndex] = questionBank[randomIndex];
            questionBank[randomIndex] = temporaryValue;
        }
    }


    /**
     * @brief This function is displaying the questions
     */
    function displayQuestion() {
        let q1 = questionBank[questionNumber].option1;
        let q2 = questionBank[questionNumber].option2;
        let q3 = questionBank[questionNumber].option3;
        let q4 = questionBank[questionNumber].option4;

        $(stage).append('<div class="questionText">' + questionBank[questionNumber].question + '</div>' +
            '<div id="1" class="option">' + q1 + '</div>' +
            '<div id="2" class="option">' + q2 + '</div>' +
            '<div id="3" class="option">' + q3 + '</div>' +
            '<div id="4" class="option">' + q4 + '</div>');

        $('.option').click(function () {
            if (questionLock === false) {
                questionLock = true;

                //  checking if the answer is correct or not
                if (this.id === questionBank[questionNumber].correct) {
                    document.getElementById(this.id).style.backgroundColor = 'green';
                    score++;
                } else {
                    document.getElementById(this.id).style.backgroundColor = 'red';
                }

                setTimeout(function () {
                    changeQuestion()
                }, 1000);
            }
        })
    }


    /**
     * @brief This function is responsible for changing the questions
     */
    function changeQuestion() {
        questionNumber++;

        if (stage === "#game1") {
            stage2 = "#game1";
            stage = "#game2";
        } else {
            stage2 = "#game2";
            stage = "#game1";
        }

        if (questionNumber < numberOfQuestions) {
            displayQuestion();
        } else {
            displayFinalSlide();
        }

        $(stage2).fadeOut("slow", function () {
            $(stage2).empty();
        });


        $(stage).fadeIn("slow", function () {
            questionLock = false;
        });
    }


    /**
     * @brieg This function is responsible for displaying the score sheet of the user
     */
    function displayFinalSlide() {
        let scoreSentence;

        if (score < 2) {
            scoreSentence = "You are a noob.";
        } else if (score < 4) {
            scoreSentence = "Mediocre dude."
        } else {
            scoreSentence = "I know you love me."
        }
        $(stage).append('' +
            '<div class="questionText">You have finished the quiz!<br>' + scoreSentence + '<br>' +
            '<br>Total questions: ' + numberOfQuestions + '<br>Correct answers: ' + score + '</div>');
    }
});