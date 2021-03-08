var total = prompt('How many km are left to go?');

// Your code below:
function totalTime(total){

    if (total <= 50){
        return "I'm parking. I'll see you right now";
    }
    else if (total > 50 && total <= 100){
        return "We'll be there in 5 minutes";
    }
    else if (total > 100){
        return "We still have a bit of driving left to go";
    }
}
console.log(totalTime(total));