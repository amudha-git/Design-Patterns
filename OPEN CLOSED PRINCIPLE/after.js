//OPEN CLOSED PRINICIPLE IMPLEMENATION

class BooleanQuestion{
    constructor( description )
    {
        this.description = description;
    }
    printQuestionChoices()
    {
        console.log( '1. True' );
        console.log( '2. False' );
    }
}


class MultipleChoiceQuestion{
    constructor( description, options )
    {
        this.description = description;

        this.options = options;
    }
    printQuestionChoices()
    {
       
        this.options.forEach( ( option, index)=>{
            console.log( `${index}. ${option}`);
        });
    }
}

class TextQuestion{
    constructor( description )
    {
        this.description = description;
    }
    printQuestionChoices()
    {
        console.log( 'Answer _____' );
    }
}

class RangeQuestion{
    constructor( description )
    {
        this.description = description;
    }
    printQuestionChoices()
    {
        console.log( 'Minimum _______');
        console.log( 'Maximum _______');
    }
}

//closed - means this function closed for modification
function printQuiz( questions )
{

    questions.forEach( question => {
        console.log( question.description );
        question.printQuestionChoices();
        console.log( '' );
    })
}

var questions = [
    new BooleanQuestion( 'This video is useful' ),
    new MultipleChoiceQuestion( 'what is your favourite language?', [ 'CSS', 'HTML', 'JS', 'PYTHON' ]  ),
    new TextQuestion( 'Describe your favourite JS feature' ),
    new RangeQuestion( 'What is the speed limit in your range' )
]

printQuiz( questions );

//so we can create small class, functions, .. without changing the printQuiz. So nice right ?