toggleLanguage(currentLang);

function projectClicked(i) {
  window.open(projects[i].link, '_blank');
}

function toggleLanguage(lang) {
  if (lang === 'EN') {
    aboutMeTextElement.innerHTML = aboutMe.english;
    socialElement.innerHTML = social.english;
    projectsTitleElement.innerHTML = projectsTitle.english;
    englishSpanElement.style.fontWeight = 'bold';
    englishSpanElement.style.color = 'black';
    latinSpanElement.style.fontWeight = 'default';
    latinSpanElement.style.color = '#7A8B99';
  } else if (lang === 'LA') {
    aboutMeTextElement.innerHTML = aboutMe.latin;
    socialElement.innerHTML = social.latin;
    projectsTitleElement.innerHTML = projectsTitle.latin;
    latinSpanElement.style.fontWeight = 'bold';
    latinSpanElement.style.color = 'black';
    englishSpanElement.style.fontWeight = 'default';
    englishSpanElement.style.color = '#7A8B99';
  }
  projectsList.innerHTML = '';
  for (let i = 0; i < projects.length; i++) {
    let currentProject = projects[i];
    let currentProjectDescription = currentLang === 'EN' ? currentProject.description.english : currentProject.description.latin;
    projectsList.innerHTML += `
    <div class="project" id="project-` + i + `" onclick="projectClicked(` + i + `)">
      <h3 class="project-title">` + currentProject.title + `</h3>
      <p class="project-description">` + currentProjectDescription +`</p>
    </div>`
    let currentProjectElement = document.getElementById('project-' + i)
    currentProjectElement.style.backgroundColor = '#' + currentProject.backgroundColor;
    currentProjectElement.style.boxShadow = '5px 5px 1px #6D7275';
  }

  currentLang = currentLang === 'EN' ? 'LA' : 'EN';
}
