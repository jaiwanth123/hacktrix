const applicationForm = document.getElementById('application-form');
const applicationsDiv = document.getElementById('applications');

applicationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const collegeName = document.getElementById('college-name').value;
  const applicationDeadline = document.getElementById('application-deadline').value;
  const applicationStatus = document.getElementById('application-status').value;

  const application = {
    collegeName,
    applicationDeadline,
    applicationStatus,
  };

  applicationsDiv.innerHTML += `
    <div class="application">
      <h3>${application.collegeName}</h3>
      <p>Application Deadline: ${application.applicationDeadline}</p>
      <p>Application Status: ${application.applicationStatus}</p>
    </div>
  `;
});