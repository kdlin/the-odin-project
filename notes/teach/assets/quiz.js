/* Shared quiz engine for teach lessons. Pairs with the .quiz components in
   components.css. Lifted from the approved CSC 365 lesson.

   Per lesson, declare the answer key as a global BEFORE the options can be
   clicked (anywhere in the page is fine — it's read at click time):
       var correctAnswers = [1, 2, 0, 3];   // 0-based index of the correct <li> per question

   Markup per option (quizIdx = question number, selectedIdx = this option's index):
       <li onclick="reveal('q1a', this, 0, 0)"><span class="radio"></span> Option text</li>
   ...with the explanation in <div class="quiz-answer" id="q1a">...<strong>Correct.</strong> ...</div> */

function reveal(id, el, selectedIdx, quizIdx) {
  var answerEl = document.getElementById(id);
  var isCorrect = selectedIdx === correctAnswers[quizIdx];
  var siblings = el.parentElement.querySelectorAll('li');
  siblings.forEach(function(li) { li.style.pointerEvents = 'none'; });
  if (isCorrect) {
    el.classList.add('correct');
    if (answerEl) {
      answerEl.style.borderColor = 'rgba(74,222,128,0.3)';
      answerEl.style.background = 'rgba(74,222,128,0.06)';
    }
  } else {
    el.classList.add('wrong-flash');
    siblings[correctAnswers[quizIdx]].classList.add('correct');
    if (answerEl) {
      answerEl.style.borderColor = 'rgba(255,111,94,0.3)';
      answerEl.style.background = 'rgba(255,111,94,0.06)';
      answerEl.innerHTML = answerEl.innerHTML.replace('<strong>Correct.</strong>', '<strong style="color:var(--accent);">Incorrect.</strong>');
    }
  }
  if (answerEl) answerEl.style.display = 'block';
}
