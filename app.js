let target = new Date("2026-10-31T00:00:00");
let timer;

function update() {
  let now = new Date(); 
  let diff = target - now;

  if (diff <= 0) {
    document.querySelector(".clockContainer").innerHTML =
      '<img class="done" src="./img/office-dance.gif" alt="">';
    document.querySelector(".title").innerHTML = 
    '<h1>ქორწილის დღე</h1>'
    clearInterval(timer);
    return;
  }

  let totalSeconds = Math.floor(diff / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor((totalSeconds % 86400) / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = String(hours).padStart(2, "0");
  document.querySelector("#minutes").innerHTML = String(minutes).padStart(2, "0");
  document.querySelector("#seconds").innerHTML = String(seconds).padStart(2, "0");
}

update();
timer = setInterval(update, 1000);



//დაკლიკვისას გამოჩნდეს რუკა
  document.querySelectorAll('.mapToggleBtn').forEach((btn) => {
    let action = btn.closest('.action');
    let mapContainer = action.querySelector('.mapContainer');
    let mapIcon = btn.querySelector('.map-icon');

    btn.addEventListener('click', () => {
      let isHidden = mapContainer.style.display === 'none' || mapContainer.style.display === '';
      mapContainer.style.display = isHidden ? 'block' : 'none';

        mapIcon.classList.toggle('fa-circle-chevron-down', !isHidden);
        mapIcon.classList.toggle('fa-circle-chevron-up', isHidden);
    });
  });


  // intro video

  var stage = document.getElementById("stage");
var video = document.getElementById("introVideo");
var content = document.getElementById("content");
var revealed = false;

function reveal() {
  if (revealed) return;
  revealed = true;
  stage.classList.add("hidden");
  content.classList.add("show");
  setTimeout(function () {
    stage.style.display = "none";
  }, 1200);
}

video.addEventListener("ended", reveal);

var playPromise = video.play();
if (playPromise !== undefined) {
  playPromise.catch(function () {
    tapOverlay.classList.add("show");
  })
};

// RSVP form
var attending = "Joyfully accepts";
document.querySelectorAll(".choice").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelectorAll(".choice").forEach(function (c) {
      c.classList.remove("active");
    });
    el.classList.add("active");
    attending = el.dataset.val;
  });
});

document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("guestName").value.trim();
  var count = document.getElementById("guestCount").value;
  var note = document.getElementById("guestNote").value.trim();
  var subject = "RSVP from " + name;
  var body =
    name +
    " — " +
    attending +
    "\nParty size: " +
    count +
    (note ? "\nNote: " + note : "");
  var mailto =
    "mailto:" +
    COUPLE_EMAIL +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  window.location.href = mailto;
  var confirm = document.getElementById("confirm");
  confirm.textContent =
    "Thank you, " + name + " — opening your email app to send the RSVP.";
  confirm.classList.add("show");
});
