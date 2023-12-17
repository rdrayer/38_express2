// input = time. i.e.: 12:12, 12:00, 00:00, 09:30, 07:45
// output = twelve twelve, noon, midnight, nine thirty, seven forty five

// define arrays for hours and minutes
// parse input into hour/minute, separated by a colon
// 

function timeToWords(time) {
    const hours = [
        "midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"
    ];
    const minutes = [
        "o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine"
    ];

    // this will take in the input, split it using the colon and mapping it and using parseInt to turn the string into a number
    let [hour, minute] = time.split(":").map(num => parseInt(num, 10));
    console.log(hour, minute);

    // handle special cases
    if (hour === 0 && minute === 0) {
        return "midnight";
    }
    if (hour === 12 && minute === 0) {
        return "noon";
    }
}