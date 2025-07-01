
function showLesson(topic) {
  document.getElementById('mainSection').style.display = 'none';
  document.querySelectorAll('.lesson').forEach(lesson => lesson.classList.remove('active'));
  document.getElementById('lesson-' + topic).classList.add('active');
}

function goBack() {
  document.getElementById('mainSection').style.display = 'block';
  document.querySelectorAll('.lesson').forEach(lesson => lesson.classList.remove('active'));
}
