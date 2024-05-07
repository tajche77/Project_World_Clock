function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let valenciaElement = document.querySelector("#valencia");
  let valenciaDateElement = valenciaElement.querySelector(".date");
  let valenciaTimeElement = valenciaElement.querySelector(".time");

  let valenciaTime = moment().tz("Europe/Madrid");
  valenciaDateElement.innerHTML = valenciaTime.format("MMMM Do YYYY");
  valenciaTimeElement.innerHTML = valenciaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
