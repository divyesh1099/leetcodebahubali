// Initialize button with users' preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
  chrome.alarms.create(
    "myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2}
  );
  window.close();
  chrome.alarms.onAlarm.addEventListener(function(alarm){
    alert("Beep");
  });
}

var alarmClock = {

  onHandler : function(e) {
      chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2} );
              window.close();
  },

  offHandler : function(e) {
      chrome.alarms.clear("myAlarm");
              window.close();
  },

  setup: function() {
      var a = document.getElementById('alarmOn');
      a.addEventListener('click',  alarmClock.onHandler );
      var a = document.getElementById('alarmOff');
      a.addEventListener('click',  alarmClock.offHandler );
  }
};

document.addEventListener('DOMContentLoaded', function () {
alarmClock.setup();
});