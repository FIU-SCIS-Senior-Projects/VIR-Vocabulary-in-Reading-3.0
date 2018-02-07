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
                question: "Which one is a phrase?",
                answer: "1",
                options: ["Our dog's name is Ruby", "In the garden", "I like chocolate", "Where is it?"]
            },

            {
                question: "Which of these is not a car part?",
                answer: "2",
                options: ["Wheel", "Door", "Mug", "Window"]
            },

            {
                question: "Which sentence is not correct?",
                answer: "3",
                options: ["Have you got a brother?", "I've got a cold", "My house has got three bedrooms", "I've always got a good time in my English lesson"]
            },

            {
                question: "WHich verb can you __ with all these words? Skiing, Swimming, Dancing, Shopping",
                answer: "3",
                options: ["Take", "Make", "Do", "Go"]
            },

            {
                question: "The answer is 'Im listening to music'. What is the question?",
                answer: "0",
                options: ["What are you doing?", "What do you do?", "What do you to to relax?", "WHat do yo like doing?"]
            },

            {
                question: "Which sentence is not correct?",
                answer: "3",
                options: ["I'm making a cup of coffee", "Can yo make the bed, please?", "The book made me sad", "She made a photo of the baby"]
            },

            {
                question: "What time did you _______ last night?",
                answer: "0",
                options: ["Come home", "Come to home", "Come bank to home", "Come in home"]
            },

            {
                question: "Complete the phase: _______ to get to the airport?",
                answer: "2",
                options: ["How long is it", "How much", "How long doe it take", "How lar"]
            },

            {
                question: "Which one is the best reply to the question: 'Can i borrow the book?'",
                answer: "0",
                options: ["Yes, but please bring it back tomorrow", "Yes, but please take it back tomorrow",
                    "Ye, but get it back by tomorrow", "Yes, but it should be got back in tomorrow"]
            },

            {
                question: "Which phrasal verb means 'make something louder'?",
                answer: "3",
                options: ["Turn off", "Turn on", "Turn down", "Turn up"]
            },

            {
                question: "Complete the phase: I _______ very well with my sister",
                answer: "1",
                options: ["Get out", "Get on", "Get up", "Get over"]
            },

            {
                question: "Which one is correct?",
                answer: "2",
                options: ["He told me 'Goodbye'", "He said to me'Goodbye'", "He said 'Goodbye'", "He told 'Goodbye'"]
            },

            {
                question: "Whic of these can't you 'tell'?",
                answer: "3",
                options: ["A story", "A joke", "The time", "A question"]
            },

            {
                question: "Which verbs can you use with: Train, Plane, Bus, Bicyle",
                answer: "2",
                options: ["Miss", "Catch", "Go by", "Take"]
            },

            {
                question: "Which conjunction makes the question 'Why?'",
                answer: "0",
                options: ["Becasue", "So", "If", "But"]
            },

            {
                question: "Which is the sixth month of the year?",
                answer: "1",
                options: ["July", "June", "January", "May"]
            },

            {
                question: "Fill in the gap: Jane's ______ at the moment, She is coming back in about 10 minutes.",
                answer: "0",
                options: ["Out", "Abroad", "Away", "On the way"]
            },

            {
                question: "Complete the sentence: The drver sits at the ______ of the bus.",
                answer: "3",
                options: ["Side", "Sequinning", "Middle", "Front"]
            },

            {
                question: "Which word is not an adverb?",
                answer: "0",
                options: ["Good", "Well", "Last", "Slowly"]
            },

            {
                question: "Which of these verbs has a past form that ends in 'ed'?",
                answer: "3",
                options: ["Keep", "Drive", "Choose", "Open"]
            },

            {
                question: "",
                answer: "0",
                options: ["Becasue", "So", "If", "But"]
            },

            {
                question: "Add another uncountable kind of food to this list: Rice, bread, water, spaghetti",
                answer: "1",
                options: ["Apples", "Milk", "Tomatoes", "Hot dogs"]
            },

            {
                question: "Which sentence has a negative meaning?",
                answer: "2",
                options: ["The weather is not bad today", "The weather's better today", "It's a terrible day today", "It's hardly a good weather"]
            },

            {
                question: "Which word means the same as 'easy-going'?",
                answer: "2",
                options: ["Happy", "Lovely", "Relaxed", "Kind"]
            },

            {
                question: "Which of thee verbs is not correct?",
                answer: "0",
                options: ["Look of", "Look after", "Look at", "Look for"]
            },

            {
                question: "Which of these words has the wrong prefix",
                answer: "1",
                options: ["Impolite", "Unpossible", "Unsafe", "Incorrect"]
            },

            {
                question: "Which suffix can change an adjective into an adverb?",
                answer: "2",
                options: ["-y", "-er", "-ly", "-ing"]
            },

            {
                question: "Complete the sentence: Th house is ______.",
                answer: "1",
                options: ["Very quite", "Very quiet", "Very quietly", "Very quietness"]
            },

            {
                question: "Which questio is correct?",
                answer: "1",
                options: ["When you were born?", "When were you born?", "When are you born?", "When do you born?"]
            },

            {
                question: "Which definition is correct?",
                answer: "3",
                options: ["your cousin is your father's siblling", "Your cousin is your aunt's sibling", "Your cousin is your grandparent's son or daughter",
                    "Your cousin is your father's or mother's niece or nephew"]
            },

            {
                question: "Which one is not part of your leg?",
                answer: "0",
                options: ["Thumb", "Toe", "Knee", "Foot"]
            },

            {
                question: "Find something that only women wear",
                answer: "2",
                options: ["Trainers", "Jeans", "Tights", "T-shirt"]
            },

            {
                question: "Which phrase describes someone in a negative way?",
                answer: "3",
                options: ["She is too thin", "He is very tall", "He is quite handsome", "He is too fat"]
            },

            {
                question: "Which sentence is not correct?",
                answer: "1",
                options: ["I've got a headache", "He's got a heart attack", "Do you get hay-fever?", "SHe's got toothache"]
            },

            {
                question: "When do you say 'COngratulations?",
                answer: "1",
                options: ["It's your mom's birthday", "Your friend passed the exam", "Your sister missed her plane", "Your friend is taking a test tomorrow"]
            },

            {
                question: "Complete the sentence: First we saw lightning, then we heard _____",
                answer: "0",
                options: ["Thunder", "Log", "Snow", "Rain"]
            },

            {
                question: "Where in a town do you go to borrow a book?",
                answer: "1",
                options: ["Town Hall", "Library", "Post Office", "Tourist Information Station"]
            },

            {
                question: "Which place has a lot of trees?",
                answer: "2",
                options: ["A village", "A field", "A forest", "A river"]
            },

            {
                question: "Which animal lives on a farm?",
                answer: "1",
                options: ["A snake", "A sheep", "An elephant", "a lion"]
            },

            {
                question: "Which words do you use at the airport?",
                answer: "3",
                options: ["Check down", "Platform", "Boarding card", "Flight"]
            },

            {
                question: "What does this sign mean? 'EXIT'",
                answer: "1",
                options: ["Go away", "Go out", "Go up", "Go in"]
            },

            {
                question: "Which of these fruits is hard and green or red?",
                answer: "2",
                options: ["Banana", "Orange", "Apple", "Strawberry"]
            },

            {
                question: "Which item can you find in the kitchen?",
                answer: "0",
                options: ["Fridge", "Hammer", "Shower cap", "Car"]
            },

            {
                question: "What don't you find in the bedroom?",
                answer: "2",
                options: ["A toilet", "A shower", "A basin", "A wardrobe"]
            },

            {
                question: "What can you do with a remote control?",
                answer: "1",
                options: ["Turn the computer on", "Change the TV station", "Listen to music", "Switch off the light"]
            },

            {
                question: "WHere does a doctor work?",
                answer: "0",
                options: ["In a shop", "In an office", "In a factory", "At the hospital"]
            },

            {
                question: "Complete the sentence: When you graduate, you ______",
                answer: "0",
                options: ["Get a degre", "Give a lecture", "Do a course", "Take notes"]
            },

            {
                question: "Which is not part of a computer?",
                answer: "0",
                options: ["A phone box", "A screen", "A keyboard", "A mouse"]
            },

            {
                question: "Complete the sentence: We don't want to take the car with us on the holiday, so we are going by ______",
                answer: "1",
                options: ["Air", "Plane", "Ferry", "Boat"]
            },

            {
                question: "Where can you buy a lot of different things like clothes, toys, food and furniture?",
                answer: "1",
                options: ["Supermarket", "Department store", "Stationary shop", "Concenient store"]
            },

            {
                question: "You can say 'I booked a room' or ______",
                answer: "3",
                options: ["I have a double room", "I checked in", "I filled a room", "I made a reservation"]
            },

            {
                question: "The answer is 'Yes, i'll have the fish and salad'. What is the question?",
                answer: "2",
                options: ["What do you want?", "What do you like?", "Are you ready to order?", "Is everything all right?"]
            },

            {
                question: "Complete the sentence: She plays ______ everyday",
                answer: "3",
                options: ["Swimming", "Karate", "Running", "Tennis"]
            },

            {
                question: "What type of film is about ghosts or dead people?",
                answer: "0",
                options: ["Horror film", "Musical", "Comedy", "Western"]
            },

            {
                question: "Which sentence is wrong?",
                answer: "2",
                options: ["I like relaxing after dinner", "I often listen to music", "I see TV every evening for ano hour", "I enjoy reading"]
            },

            {
                question: "Complete the sentence: A ______ attacked me in the street and stol emy bag",
                answer: "1",
                options: ["Terrorist", "Mugger", "Vandal", "Murderer"]
            },

            {
                question: "What type of program is often on TV every day and is about people's lives?",
                answer: "0",
                options: ["Talk show", "Cartoon", "Documentary", "Soap Opera"]
            },

            {
                question: "Complete the sentence: Can you repair my TV? ______ ",
                answer: "3",
                options: ["It's untidy", "It's dying", "Isn't it working", "It's out of order"]
            },

            {
                question: "COmplete the sentence: WHen you are unemployed, you  ______ .",
                answer: "0",
                options: ["Do not have enough food", "Do not have a job", "Have a new job", "Do not have a home"]
            },

            {
                question: "What is the definition of 'commited to do something'.",
                answer: "2",
                options: ["Is not interested", "Is interested", "Want to do at any price", "Wish to do"]
            },

        ];

        this.totalQuestions = questions.length;
        
        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;

    }

}
