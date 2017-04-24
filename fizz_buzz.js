function fizz_buzz(number){
  console.log('number = ' + number);
  if ((number%15) == 0) {
    console.log('fizz_buzz');
  } else if (number%5 == 0) {
    console.log('buzz');
  }
  else if (number%3==0) {
    console.log('fizz');
  }
  else {
    console.log(number);
  }

	switch (true){
    case (number%15 == 0):
      console.log('fizz_buzz');
      break;
    case number%5 == 0:
      console.log('buzz')
      break;
    case number%3 == 0:
      console.log('fizz');
      break;
    default:
      console.log(number);
      break;
  	}

}
