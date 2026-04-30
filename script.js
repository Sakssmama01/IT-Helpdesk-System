const form = document.getElementById('ticketForm');
if(form){
form.addEventListener('submit', function(e){
  e.preventDefault();

  const ticket = {
    id: Date.now(),
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    issueType: document.getElementById('issueType').value,
    priority: document.getElementById('priority').value,
    description: document.getElementById('description').value,
    status: 'Open'
  };

  let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets.push(ticket);
  localStorage.setItem('tickets', JSON.stringify(tickets));

  document.getElementById('message').innerText = 'Ticket submitted successfully!';
  form.reset();
});
}