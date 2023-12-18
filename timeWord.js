// input = time. i.e.: 12:12, 12:00, 00:00, 09:30, 07:45
// output = twelve twelve, noon, midnight, nine thirty, seven forty five

// define arrays for hours and minutes
// parse input into hour/minute, delimieter = colon
// handle special cases for midnight and noon
// handle minutes 01 - 09 to put an 'oh' in front of the minutes
// am vs pm

function timeToWords(time) {
    // input = 09:45, 23:06 output = 'nine forty five am', 'eleven oh six pm'
    const hours = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
    
    const minutes = [
      "o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine"
    ];
    
    let [hour, minute] = time.split(':').map(num => parseInt(num, 10));
    // console.log(hour); 
    // console.log(minute);
    // input = '09:10' output.hour = 9 output.minute = 10
    
    // handle special cases
    if (hour === 0 && minute === 0) return 'midnight';
    if (hour === 12 && minute === 0) return 'noon';
    
    let hourWord = "";
    let minuteWord = "";
  
    // 00:01 - 00:59
    if (hour === 12) {
      hourWord = 'twelve';
    }
    
    // handle hours 13 - 23
    switch(hour) {
      case 13:
        hourWord = hours[1];
        break;
      case 14:
        hourWord = hours[2];
        break;
      case 15:
        hourWord = hours[3];
        break;
      case 16:
        hourWord = hours[4];
        break;
      case 17:
        hourWord = hours[5];
        break;
      case 18:
        hourWord = hours[6];
        break;
      case 19:
        hourWord = hours[7];
        break;
      case 20:
        hourWord = hours[8];
        break;
      case 21:
        hourWord = hours[9];
        break;
      case 22:
        hourWord = hours[10];
        break;
      case 23:
        hourWord = hours[11];
        break;
      default:
        hourWord = hours[hour];
    }
    
    // for minutes where 'oh' is needed
    if (minute > 0 & minute <= 9) {
      minuteWord = `oh ${minutes[minute]}`;
    }
    
    if (hour <= 11){
      return `${hourWord} ${minuteWord} am`;
    } else {
      return `${hourWord} ${minuteWord} pm`;
    }
    
  }