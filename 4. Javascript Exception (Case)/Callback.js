function myFirst() {
  myDisplayer("my name is jihan salsabilah");
}

function mySecond(callback) {
  myDisplayer("Halooo");
  callback();
}

function myDisplayer(message) {
  console.log(message);
}

mySecond(myFirst);
