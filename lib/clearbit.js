const authorization = 'Bearer sk_YOUR_KEY_HERE';

const populateHTMLUserCard = (data) => {
  const avatar = data.avatar;
  const name = data.name.fullName;
  const location = data.location;
  const bio = data.bio;
  const email = data.email;

  // input.value -> this only works for input fields! (textboxes, number inputs, etc)
  // element.innerText // element.innerHTML

  const avatarImg = document.querySelector('#userAvatar');
  avatarImg.src = avatar;

  const nameField = document.querySelector('#userName');
  nameField.innerText = name;

  const bioField = document.querySelector('#userBio');
  bioField.innerText = bio;

  const locationField = document.querySelector('#userLocation');
  locationField.innerText = location;

  const emailField = document.querySelector('#userEmail');
  emailField.innerText = email;
};

const searchUserInformation = (event) => {
  event.preventDefault();

  const email = document.querySelector('#clearbitEmail').value;
  const url = `https://person.clearbit.com/v2/people/find?email=${email}`;

  fetch(url, { headers: { Authorization: authorization } })
    .then((response) => response.json())
    .then((data) => {
      populateHTMLUserCard(data);
      const card = document.querySelector('#userCard');
      card.classList.add('d-flex');
      card.classList.remove('d-none');
    });
};

const form = document.querySelector('#clearbitForm');
form.addEventListener('submit', searchUserInformation);
