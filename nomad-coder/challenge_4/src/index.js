const clockTitle = document.querySelector(".js-clock");

function showHowManyDaysUntilChristmas() {
  const nowDate = new Date();
  const christmasDate = new Date(2021, 11, 25);
  let msLeft = christmasDate.getTime() - nowDate.getTime();
  msLeft /= 1000;
  const secondLeft = String(Math.floor(msLeft % 60)).padStart(2, "0");
  msLeft /= 60;
  const minuteLeft = String(Math.floor(msLeft % 60)).padStart(2, "0");
  msLeft /= 60;
  const hourLeft = String(Math.floor(msLeft % 24)).padStart(2, "0");
  msLeft /= 24;
  const dateLeft = String(Math.floor(msLeft)).padStart(2, "0");
  clockTitle.innerText = `${dateLeft}d ${hourLeft}h ${minuteLeft}m ${secondLeft}s`;
}

setInterval(showHowManyDaysUntilChristmas, 1000);
