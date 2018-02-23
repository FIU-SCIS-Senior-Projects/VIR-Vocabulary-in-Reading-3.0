import { Injectable } from '@angular/core';


export class VocabATestBank {

    public static answer: string;
    public static question: string;
    public static options: string[];

    public static totalQuestions: number;


    public static questionsLib(id: number) {

        var questions = [

            {
                question: "See: They <saw it>",
                answer: "2",
                options: ["Closed it tightly","Waited for it","Lokked at it","Started it up"]
            },

            {
                question: "Time: They have a lot of <time>",
                answer: "2",
                options: ["Money", "Food", "Hours", "Friends"]
            },

            {
                question: "Period: It was a difficult <period>",
                answer: "1",
                options: ["Question", "Time", "Thing to do", "Task"]
            },

            {
                question: "Figure: Is this the right <figure>?",
                answer: "3",
                options: ["Thing", "Place", "Time", "Number"]
            },

            {
                question: "Poor: We <are poor>",
                answer: "0",
                options: ["Have no money", "Feel happy", "Are very interested", "Do not work hard"]
            },

            {
                question: "Microphone: Please use the <microphone>.",
                answer: "1",
                options: ["Machine for making hot food", "Machine that makes sound louder", "Machine that makes things look bigger", "Small telephone"]
            },

            {
                question: "Nil: His mark for the question was <nil>.",
                answer: "1",
                options: ["Very bad", "Nothing", "Vey good", "In the middle"]
            },

            {
                question: "Pub: They went to the <pub>",
                answer: "0",
                options: ["Place where people drink and talk", "Place that looks after money", "Large building with many shops", "Building for swimming"]
            },

            {
                question: "Circle: Make a <circle>.",
                answer: "2",
                options: ["Rough picture", "Space with nothing in it", "Round shape", "Large hole"]
            },

            {
                question: "Dig: Our dog often <digs>",
                answer: "1",
                options: ["Solves a problem", "Creates a hole in the ground", "Wants to sleep", "Enters the water"]
            },

            {
                question: "Soldier: He is a <soldier>.",
                answer: "3",
                options: ["Person in a business", "Person who studies", "Person who uses metal", "Person in the army"]
            },

            {
                question: "Restore: It has been <restored>.",
                answer: "2",
                options: ["Said again", "Given to a different person", "Made like new again", "Given a lower price"]
            },

            {
                question: "Pro: He is a <pro>.",
                answer: "3",
                options: ["Someone who is employed to find out secrets", "A stupid person", "A writter", "Someone who is paid for playing a sport"]
            },

            {
                question: "Compound: They made a new <compound>.",
                answer: "1",
                options: ["Agreement", "Thing made of two or more parts", "Group of people forming a business", "Guess based on past experiences"]
            },

            {
                question: "Deficit: the company had a <large deficit>",
                answer: "0",
                options: ["Spent more money than they made", "Went down a lot in value", "Had a plan for its spending", "Large amout of money saved in a bank"]
            },

            {
                question: "Strap: He broke the <strap>",
                answer: "3",
                options: ["Promise", "Top cover", "Shallow dish for food", "Strip of strong material"]
            },

            {
                question: "Weep: He <wept>",
                answer: "1",
                options: ["Finished his course", "Cried", "Laughed", "Died"]
            },

            {
                question: "Haunt: The house is <haunted>.",
                answer: "3",
                options: ["Full of decorations", "Rented", "Sold", "Full of ghosts"]
            },

            {
                question: "Cube: I need one more <cube>.",
                answer: "1",
                options: ["Sharp object for joining things", "Solid square block", "Tall cup with no saucer", "Stiff paper folder in half"]
            },

            {
                question: "Butler: They have a <butler>",
                answer: "0",
                options: ["Man servant", "machine for cutting down trees", "Private teacher", "Puppy"]
            },

            {
                question: "Nun: We saw a <nun>",
                answer: "2",
                options: ["Long thin creature that lives in the earth", "Terrible accident", "Woman following a strict religious life", "Unexplained bright light"]
            },

            {
                question: "Olive: We bough <olives>",
                answer: "0",
                options: ["Oily fruit", "Scented flowers", "Tools for digging", "A new car"]
            },

            {
                question: "Shudder: The boy <shuddered>",
                answer: "2",
                options: ["Spoke with a low voice", "Almost fell", "Shook", "Called out loudly"]
            },

            {
                question: "Threshhold: They raised the <threshold>",
                answer: "1",
                options: ["Flag", "Point or line where something changes", "Roof inside a building", "Cost of borrowing money"]
            },

            {
                question: "Demography: This book is about <demography>",
                answer: "3",
                options: ["The study of patterns of land use", "The study of the use of pictures", "The study of mobement of water", "The study of population"]
            },

            {
                question: "Malign: His <malign> influence is still felt",
                answer: "1",
                options: ["Good", "Evil", "Vey important", "Secret"]
            },

            {
                question: "Strangle: He <strangled> her",
                answer: "0",
                options: ["Killed her by pressing her throat", "Gave her all the things she wanted", "Took her away by force", "Admired her greatly"]
            },

            {
                question: "Dinosaur: The children were pretending to be <dinosaurs>",
                answer: "3",
                options: ["robbers who work at sea", "Humans with wings", "Large creatures that breathe fire", "Animals that lived an extremely long time"]
            },

            {
                question: "Jug: He was holding <a jug>",
                answer: "0",
                options: ["A container used to hold liquids", "An informal discussion", "A soft cap", "A weapon"]
            },

            {
                question: "Crab: Do you like <crabs>?",
                answer: "2",
                options: ["Thin small cakes", "Hard collars", "Sea creatures that always walk toone side", "Large insects that sing at night"]
            },

            {
                question: "Quilt: They made a <quilt>",
                answer: "2",
                options: ["Fire", "Firm agreement", "Thick warm cover for a bed", "Feather pen"]
            },

            {
                question: "Tummy: Look at my <tummy>",
                answer: "1",
                options: ["Fabric", "Stomach", "Soft animal", "finger used for gripping"]
            },

            {
                question: "Eclipse: <There was an eclipse>",
                answer: "3",
                options: ["A strong wind blew all day", "I heard something hit the water", "People were killed", "The sun was hidden by the moon"]
            },

            {
                question: "Excrete: Thus was <excreted> recently",
                answer: "0",
                options: ["Pushed or sent out", "Made clear", "Discovered by science", "Put on a list of illegal things"]
            },

            {
                question: "Ubiquitous: Many unwanted plants are <ubiquitous>",
                answer: "2",
                options: ["Tasty", "Have strong roots", "Found everywhere", "Die away in the winter"]
            },

            {
                question: "Marrow: This is <the marrow>",
                answer: "1",
                options: ["Symbol that brings good luck to the team", "Soft center of the bone", "Control for guiding a plane", "Increase in salary"]
            },

            {
                question: "Cabaret: We saw the <cabaret>",
                answer: "1",
                options: ["Painting covering a hole", "A song and dance performance", "Small crawling creature", "Person who is half fish"]
            },

            {
                question: "Cavalier: He treated her <in a cavalier manner>",
                answer: "0",
                options: ["Without care", "With goos manners", "Awkwardly", "As a brother would"]
            },

            {
                question: "Veer: The car <veered>",
                answer: "1",
                options: ["Moved shakily", "Changed course", "Made a wide turn", "Slid without turning"]
            },

            {
                question: "Yogurt: This <yogurt> is disgusting!",
                answer: "2",
                options: ["Dark mud found in rivers", "Unhealthy, open sore", "Thick, soured milk, often with sugar", "Large purple fruit"]
            },

            {
                question: "Octopus: They saw an <octopus>",
                answer: "3",
                options: ["A ship", "A large bird", "A machine that flies", "A sea creature with eight legs"]
            },

            {
                question: "Monologue: Now he has a <monologue>",
                answer: "1",
                options: ["A single piece of glass held over an eye", "Long turn at talking without interruption", "Position with all power", "Picture made by joining letters together"]
            },

            {
                question: "Candid: Please be <candid>",
                answer: "3",
                options: ["Careful", "Show empathy", "Show remorse", "Say what you really think"]
            },

            {
                question: "Nozzle: Aim the <nozzle> toward it.",
                answer: "2",
                options: ["Space that light passes through", "Dry patch of skin", "Pipe attachment that forces water", "Sharp part of a fork"]
            },

            {
                question: "Psychosis: He has <psychosis>",
                answer: "3",
                options: ["An inability to move", "Super powers", "A body organ that process sugar", "A mental illness"]
            },

            {
                question: "Ruck: He got hurt in the <ruck>",
                answer: "2",
                options: ["Region between the stomach and the top of the leg", "Noisy street", "Group of players gatheres round the ball", "Race across a field of snow"]
            },

           
        ];

        this.totalQuestions = questions.length;

        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;
    }
}
