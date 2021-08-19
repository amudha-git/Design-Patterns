//command pattern - take the differen operations and encapsulate them into individual commands that have perform and undo method.

class Calculator{

    constructor()
    {
        this.value = 0;
        this.history = [];
    }
    executeCommand( command )
    {
        this.value = command.execute( this.value );
        this.history.push( command );
    }

    undo()
    {
        var command = this.history.pop();
        this.value = command.undo( this.value );
    }
}

class AddCommand{
    constructor( valueToAdd )
    {
        this.valueToAdd = valueToAdd;
    }

    execute( currentValue )
    {
        return currentValue + this.valueToAdd;
    }

    undo( currentValue )
    {
        return currentValue - this.valueToAdd;
    }
}
class SubtractCommand{
    constructor( valueToSubtract )
    {
        this.valueToSubtract = valueToSubtract;
    }

    execute( currentValue )
    {
        return currentValue - this.valueToSubtract;
    }

    undo( currentValue )
    {
        return currentValue + this.valueToSubtract;
    }
}
class MultiplyCommand{
    constructor( valueToMultiply )
    {
        this.valueToMultiply = valueToMultiply;
    }

    execute( currentValue )
    {
        return currentValue * this.valueToMultiply;
    }

    undo( currentValue )
    {
        return currentValue / this.valueToMultiply;
    }
}
class DivideCommand{
    constructor( valueToDivide )
    {
        this.valueToDivide = valueToDivide;
    }

    execute( currentValue )
    {
        return currentValue / this.valueToDivide;
    }

    undo( currentValue )
    {
        return currentValue * this.valueToDivide;
    }
}

const calculator = new Calculator();
calculator.executeCommand( new AddCommand(10) );
console.log( calculator.value );
calculator.undo();
console.log( calculator.value );

//this is lot of code for calculator. In real time, ex : save, exit , save and exit. You dont need to duplicate the save,exit code inside saveAndExit. 
//we can use just use commands

class AddThenMultiplyCommand
{
    constructor( valueToAdd, valueToMultiply)
    {
            this.addCommand = new AddCommand( valueToAdd );
            this.multiplyCommand = new MultiplyCommand( valueToMultiply );
    }

    execute( currentValue )
    {
        const newValue = this.addCommand.execute( currentValue );
        return this.multiplyCommand.execute( newValue );
    }

    undo( currentValue )
    {
        const newValue = this.multiplyCommand.undo( currentValue );
        return this.addCommand.undo( newValue );
    }
}
//calculator.executeCommand( new AddThenMultiplyCommand(2,10) ) //20
//calculator.undo() //0
//that simple :)
//popular in text editor for Bold, shortcuts