function isThursday(date) {
    // JS getDay(): 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    return date.getDay() === 4;
  }
  
  function formatNow(date) {
    return date.toLocaleString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  
  function update() {
    const now = new Date();
  
    const answerEl = document.getElementById("answer");
    const nowEl = document.getElementById("now");
    const tzEl = document.getElementById("tz");
  
    const yes = isThursday(now);
  
    answerEl.textContent = yes ? "YES!!" : "It's always Thursday in Aula Polifunzionale";
    answerEl.classList.toggle("yes", yes);
    answerEl.classList.toggle("no", !yes);
  
    nowEl.textContent = formatNow(now);
  
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
    tzEl.textContent = tz;
  }
  
  // initial paint + live updates
  update();
  // Update every second so it flips immediately at midnight local time
  setInterval(update, 1000);
  