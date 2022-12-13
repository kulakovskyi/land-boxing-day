"use strict";

var button = document.querySelector(".boxing__main-how");
var close = document.querySelector(".popup__window-close");
var popup = document.querySelector(".popup");
var overflow = document.querySelector("body");
var teamsFirst = document.querySelector('.team-1'),
  teamsSecond = document.querySelector('.team-2'),
  dateField = document.querySelector('.team-wrap-day'),
  timeField = document.querySelector('.team-wrap-time'),
  mainLink = document.querySelector('.main-link'),
  leftShirt = document.querySelector('.boxing__main-leftShirt'),
  rightShirt = document.querySelector('.boxing__main-rightShirt');
var nDate = Math.round(Date.now() / 1000);
button.addEventListener("click", function () {
  popup.style.display = "flex";
  overflow.style.overflow = "hidden";
});
close.addEventListener("click", function () {
  popup.style.display = "none";
  overflow.style.overflow = "visible";
});
fetch("./json/main.json?".concat(Date.now())).then(function (response) {
  return response.json();
}).then(function (res) {
  renderElements(res);
});
var renderElements = function renderElements(matches) {
  matches = matches.sort(function (a, b) {
    return a.systemDate - b.systemDate;
  });
  var currentMatch = matches.find(function (match) {
    if (match.systemDate >= nDate) {
      return true;
    }
  });
  if (teamsFirst && teamsSecond && dateField && timeField && leftShirt && rightShirt && currentMatch) {
    teamsFirst.innerHTML = currentMatch.team_a;
    teamsSecond.innerHTML = "<div class=\"label\"></div><span class=\"team-b\">".concat(currentMatch.team_b, "</span>");
    dateField.innerHTML = currentMatch.date;
    timeField.innerHTML = currentMatch.time;
    // mainLink.href = currentMatch.url;
    leftShirt.src = "img/" + currentMatch.shirtLeft;
    rightShirt.src = "img/" + currentMatch.shirtRight;
  }
};
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2UiLCJwb3B1cCIsIm92ZXJmbG93IiwidGVhbXNGaXJzdCIsInRlYW1zU2Vjb25kIiwiZGF0ZUZpZWxkIiwidGltZUZpZWxkIiwibWFpbkxpbmsiLCJsZWZ0U2hpcnQiLCJyaWdodFNoaXJ0IiwibkRhdGUiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwibm93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsInJlbmRlckVsZW1lbnRzIiwibWF0Y2hlcyIsInNvcnQiLCJhIiwiYiIsInN5c3RlbURhdGUiLCJjdXJyZW50TWF0Y2giLCJmaW5kIiwibWF0Y2giLCJpbm5lckhUTUwiLCJ0ZWFtX2EiLCJ0ZWFtX2IiLCJkYXRlIiwidGltZSIsInNyYyIsInNoaXJ0TGVmdCIsInNoaXJ0UmlnaHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUMxRCxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBQzVELElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQzlDLElBQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBRS9DLElBQU1JLFVBQVUsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQzlDSyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUMvQ00sU0FBUyxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNwRE8sU0FBUyxHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUNyRFEsUUFBUSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDL0NTLFNBQVMsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7RUFDN0RVLFVBQVUsR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFFckUsSUFBSVcsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUM7QUFFdkNqQixNQUFNLENBQUNrQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNuQ2QsS0FBSyxDQUFDZSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQzVCZixRQUFRLENBQUNjLEtBQUssQ0FBQ2QsUUFBUSxHQUFHLFFBQVE7QUFDdEMsQ0FBQyxDQUFDO0FBRUZGLEtBQUssQ0FBQ2UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDbENkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUM1QmYsUUFBUSxDQUFDYyxLQUFLLENBQUNkLFFBQVEsR0FBRyxTQUFTO0FBQ3ZDLENBQUMsQ0FBQztBQUVGZ0IsS0FBSyw0QkFBcUJMLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEVBQUcsQ0FDbENLLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7RUFDaEIsT0FBT0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7QUFDMUIsQ0FBQyxDQUFDLENBQ0RGLElBQUksQ0FBQyxVQUFBRyxHQUFHLEVBQUk7RUFDVEMsY0FBYyxDQUFDRCxHQUFHLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRU4sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLENBQUlDLE9BQU8sRUFBSztFQUNoQ0EsT0FBTyxHQUFHQSxPQUFPLENBQUNDLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBSztJQUM3QixPQUFPRCxDQUFDLENBQUNFLFVBQVUsR0FBR0QsQ0FBQyxDQUFDQyxVQUFVO0VBQ3RDLENBQUMsQ0FBQztFQUVGLElBQUlDLFlBQVksR0FBR0wsT0FBTyxDQUFDTSxJQUFJLENBQUMsVUFBQUMsS0FBSyxFQUFJO0lBQ3JDLElBQUlBLEtBQUssQ0FBQ0gsVUFBVSxJQUFJbEIsS0FBSyxFQUFFO01BQzNCLE9BQU8sSUFBSTtJQUNmO0VBQ0osQ0FBQyxDQUFDO0VBRUYsSUFBSVAsVUFBVSxJQUFJQyxXQUFXLElBQUlDLFNBQVMsSUFBSUMsU0FBUyxJQUFJRSxTQUFTLElBQUlDLFVBQVUsSUFBSW9CLFlBQVksRUFBRTtJQUNoRzFCLFVBQVUsQ0FBQzZCLFNBQVMsR0FBR0gsWUFBWSxDQUFDSSxNQUFNO0lBQzFDN0IsV0FBVyxDQUFDNEIsU0FBUywrREFBb0RILFlBQVksQ0FBQ0ssTUFBTSxZQUFTO0lBQ3JHN0IsU0FBUyxDQUFDMkIsU0FBUyxHQUFHSCxZQUFZLENBQUNNLElBQUk7SUFDdkM3QixTQUFTLENBQUMwQixTQUFTLEdBQUdILFlBQVksQ0FBQ08sSUFBSTtJQUN2QztJQUNBNUIsU0FBUyxDQUFDNkIsR0FBRyxHQUFHLE1BQU0sR0FBR1IsWUFBWSxDQUFDUyxTQUFTO0lBQy9DN0IsVUFBVSxDQUFDNEIsR0FBRyxHQUFHLE1BQU0sR0FBR1IsWUFBWSxDQUFDVSxVQUFVO0VBQ3JEO0FBQ0osQ0FBQztBQ3JERCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hpbmdfX21haW4taG93XCIpO1xuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX193aW5kb3ctY2xvc2VcIik7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG5jb25zdCBvdmVyZmxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCB0ZWFtc0ZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlYW0tMScpLFxuICAgICAgdGVhbXNTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbS0yJyksXG4gICAgICBkYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbS13cmFwLWRheScpLFxuICAgICAgdGltZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlYW0td3JhcC10aW1lJyksXG4gICAgICBtYWluTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxpbmsnKSxcbiAgICAgIGxlZnRTaGlydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hpbmdfX21haW4tbGVmdFNoaXJ0JyksXG4gICAgICByaWdodFNoaXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveGluZ19fbWFpbi1yaWdodFNoaXJ0Jyk7XG5cbmxldCBuRGF0ZSA9IE1hdGgucm91bmQoRGF0ZS5ub3coKS8xMDAwKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbn0pO1xuXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBvdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xufSk7XG5cbmZldGNoKGAuL2pzb24vbWFpbi5qc29uPyR7RGF0ZS5ub3coKX1gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVuZGVyRWxlbWVudHMocmVzKTtcbiAgICB9KTtcblxuY29uc3QgcmVuZGVyRWxlbWVudHMgPSAobWF0Y2hlcykgPT4ge1xuICAgIG1hdGNoZXMgPSBtYXRjaGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEuc3lzdGVtRGF0ZSAtIGIuc3lzdGVtRGF0ZTtcbiAgICB9KVxuXG4gICAgbGV0IGN1cnJlbnRNYXRjaCA9IG1hdGNoZXMuZmluZChtYXRjaCA9PiB7XG4gICAgICAgIGlmIChtYXRjaC5zeXN0ZW1EYXRlID49IG5EYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGVhbXNGaXJzdCAmJiB0ZWFtc1NlY29uZCAmJiBkYXRlRmllbGQgJiYgdGltZUZpZWxkICYmIGxlZnRTaGlydCAmJiByaWdodFNoaXJ0ICYmIGN1cnJlbnRNYXRjaCkge1xuICAgICAgICB0ZWFtc0ZpcnN0LmlubmVySFRNTCA9IGN1cnJlbnRNYXRjaC50ZWFtX2FcbiAgICAgICAgdGVhbXNTZWNvbmQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsYWJlbFwiPjwvZGl2PjxzcGFuIGNsYXNzPVwidGVhbS1iXCI+JHtjdXJyZW50TWF0Y2gudGVhbV9ifTwvc3Bhbj5gXG4gICAgICAgIGRhdGVGaWVsZC5pbm5lckhUTUwgPSBjdXJyZW50TWF0Y2guZGF0ZTtcbiAgICAgICAgdGltZUZpZWxkLmlubmVySFRNTCA9IGN1cnJlbnRNYXRjaC50aW1lO1xuICAgICAgICAvLyBtYWluTGluay5ocmVmID0gY3VycmVudE1hdGNoLnVybDtcbiAgICAgICAgbGVmdFNoaXJ0LnNyYyA9IFwiaW1nL1wiICsgY3VycmVudE1hdGNoLnNoaXJ0TGVmdDtcbiAgICAgICAgcmlnaHRTaGlydC5zcmMgPSBcImltZy9cIiArIGN1cnJlbnRNYXRjaC5zaGlydFJpZ2h0O1xuICAgIH1cbn1cbiIsIiJdfQ==
