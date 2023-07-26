class LeadboardList {
  constructor() {
    this.leadboardList = [];

    this.leadboardListElement = document.querySelector('#leaderboard');
    this.leadboardStorageName = 'leadboardlist';
    this.gameId = '';
    this.lblMessage = document.querySelector('message');
  }

  getLeadboardList() {
    return this.leadboardList;
  }

  addLeadboard(leadboard) {
    const divLeadboard = document.createElement('div');
    divLeadboard.className = 'bg';

    const elName = document.createElement('label');
    const elScore = document.createElement('label');

    elName.textContent = `${leadboard.name}: `;
    elScore.textContent = `${leadboard.score}`;

    divLeadboard.appendChild(elName);
    divLeadboard.appendChild(elScore);
    this.leadboardListElement.appendChild(divLeadboard);
  }
}

export default LeadboardList;