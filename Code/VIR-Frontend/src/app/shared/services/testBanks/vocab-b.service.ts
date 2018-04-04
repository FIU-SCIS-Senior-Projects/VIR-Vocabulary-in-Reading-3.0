
export class VocabBTestBank {

    public static answer: string;
    public static question: string;
    public static options: string[];

    public static totalQuestions: number;

    public static questionsLib(id: number) {

        var questions = [

            {
                question: "",
                answer: "",
                options: ["", "", "", ""]
            }

        ];

        this.totalQuestions = questions.length;

        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;
    }

}
