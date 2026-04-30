function loadTickets(){
  const ticketList = document.getElementById('ticketList');
  let tickets = JSON.parse(localStorage.getItem('tickets')) || [];

  ticketList.innerHTML = '';

  tickets.forEach((ticket,index)=>{
    ticketList.innerHTML += `
      <div class="ticket">
        <h3>${ticket.name} - ${ticket.issueType}</h3>
        <p><strong>Email:</strong> ${ticket.email}</p>
        <p><strong>Priority:</strong> ${ticket.priority}</p>
        <p><strong>Description:</strong> ${ticket.description}</p>
        <p><strong>Status:</strong> ${ticket.status}</p>
        <select onchange="updateStatus(${index}, this.value)">
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>`
  });
}

function updateStatus(index,status){
  let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets[index].status = status;
  localStorage.setItem('tickets', JSON.stringify(tickets));
  loadTickets();
}

loadTickets();