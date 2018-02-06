import { Injectable } from '@angular/core';

/**
 * This class will hold all of the test questions for the beginner level quizes
 */

@Injectable()
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
                options: ["Black", "Blue", "Red!", "Its full of clouds!"]
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

            {
                question: "Who is our current President",
                answer: "2",
                options: ["Barack Obama", "George Bush", "Donald Trump", "Bill CLinton"]
            },

            {
                question: "Name the largest freshwater lake in the world",
                answer: "2",
                options: ["Lake Majestic", "Lake Okeechobee", "Lake Superior", "Grand Lake"]
            },

            {
                question: "Where do you find the Sea of Tranquility?",
                answer: "0",
                options: ["The Moon", "Mars", "Canada", "Russia"]
            },

            {
                question: "What is the capital of Spain",
                answer: "1",
                options: ["Barcelona", "Madrid", "Toledo", "Canaria"]
            },

            {
                question: "What year did WWII end?",
                answer: "2",
                options: ["1925", "1954", "1945", "1845"]
            },

            {
                question: "What is sushi traditionally wrapped in?",
                answer: "3",
                options: ["Lakeweed", "Banana leaves", "Rice", "Seaweed"]
            },
        ];

        this.totalQuestions = questions.length;
        
        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;

    }

}
