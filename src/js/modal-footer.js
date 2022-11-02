import team from '../json/team.json';
// import teamMarkUp from './createTeamMarkup';
import teamCardMarkup from '../templates/teamCardTpl.hbs';

const teamList = document.querySelector('.team__list');

function createTeamMarkup() {
  //   teamList.innerHTML = '';
  teamList.innerHTML = teamCardMarkup(team);
}

createTeamMarkup();
