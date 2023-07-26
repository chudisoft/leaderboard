import LeadboardList from './modules/leadboardlist.js';
import './style.css';

const form = document.querySelector('form');
const leadboardNew = new LeadboardList();

const leadboardTestList = [
  {
    name: `User ${leadboardNew.getLeadboardList().length + 2}`,
    score: 30,
    index: leadboardNew.getLeadboardList().length + 2,
  },
  {
    name: `User ${leadboardNew.getLeadboardList().length + 3}`,
    score: 20,
    index: leadboardNew.getLeadboardList().length + 3,
  },
  {
    name: `User ${leadboardNew.getLeadboardList().length + 4}`,
    score: 10,
    index: leadboardNew.getLeadboardList().length + 4,
  },
];

leadboardTestList.forEach((x) => {
  leadboardNew.addLeadboard(x);
});

//  add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const score = document.querySelector('#score').value;
  if (name !== '') {
    const leadboard = {
      name,
      score,
    };
    leadboardNew.addLeadboard(leadboard);
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
});