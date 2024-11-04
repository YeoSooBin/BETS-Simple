const folders = document.querySelectorAll('.folder');

folders.forEach(folder => {
  const header = folder.querySelector('.folder-header');
  const content = folder.querySelector('.folder-content');

  header.addEventListener('click', () => {
    content.classList.toggle('show');
    header.classList.toggle('active');
  });
});