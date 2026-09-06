const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#glavna-navigacija');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const shareButton = document.querySelector('.share-button');
const shareStatus = document.querySelector('.share-status');

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: document.title,
    text: 'Upoznajte Nejru Skenderović, kandidatkinju za Skupštinu USK pod rednim brojem 13.',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      shareStatus.textContent = 'Hvala što dijelite moju viziju.';
    } else {
      await navigator.clipboard.writeText(window.location.href);
      shareStatus.textContent = 'Poveznica je kopirana.';
    }
  } catch (error) {
    if (error.name !== 'AbortError') {
      shareStatus.textContent = 'Poveznicu možete kopirati iz adresne trake.';
    }
  }
});
