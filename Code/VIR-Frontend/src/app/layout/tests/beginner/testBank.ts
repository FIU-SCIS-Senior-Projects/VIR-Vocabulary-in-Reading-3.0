/**
 * This class will hold all of the test questions for the beginner level quizes
 */


export class BeginnerTestBank {

    answer: string;
    question: string;
    options: string[];

    totalQuestions: number;

    
    public questionsLib(id:number) {

        var questions = [
            {
                question: "What color is the sky?",
                answer: "1",
                options: ["Black?", "uhm.. blue obviously", "Red!", "Its full of clouds!"]
            },

            {
                question: "what is sqr(121) ?",
                answer: "0",
                options: ["11", "12", "13", "14"]
            },

            {
                question: "Pick the correct one",
                answer: "3",
                options: ["Pick me", "Someone is lying", "I am the winner", "I am the correct one"]
            },

        ];

        this.totalQuestions = questions.length;
        
        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;

    }

}
