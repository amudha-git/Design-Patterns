
function printQuiz( questions )
{
    questions.forEach( question =>{
        console.log( question.description );

        switch( question.type )
        {
            case 'boolean':
                console.log( '1. True' );
                console.log( '2. False' );
                break;
            
            case 'mutlipleChoice' :
                question.options.forEach( ( option, index)=>{
                    console.log( `${index}. ${option}`);
                });
                break;
            
            case 'text' :
                console.log( 'Answer : _________' );
                break;

            case 'range' :
                console.log( 'Minimum _______');
                console.log( 'Maximum _______');
                break;

        }
        console.log( '' );
    })
}


const questions = [
    {
        type :  'boolean',
        description :   'This video is useful'
    },
    {
        type : 'mutlipleChoice',
        description : 'what is your favourite language?',
        options : [ 'CSS', 'HTML', 'JS', 'PYTHON' ]
    },
    {
        type : 'text',
        description : 'Describe your favourite JS feature'
    },
    {
        type : 'range',
        description : 'What is the speed limit in your range'
    }
];

printQuiz( questions );

//whenever you see switch, it might be violation of open/closed principle
//what if you want to add a new question type ? like { type : 'range' }
//you need to add it in switch ?

//i.e printQuiz function should be closed for modification when we add a new type! 
//Lets see how it can be solved in after.js