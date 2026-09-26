import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName)
      .then((value) => ({
        status: 'fulfilled',
        value,
      }))
      .catch((error) => ({
        status: 'rejected',
        value: error.toString(),
      })),
    uploadPhoto(fileName)
      .then((value) => ({
        status: 'fulfilled',
        value,
      }))
      .catch((error) => ({
        status: 'rejected',
        value: error.toString(),
      })),
  ]);
}

export default handleProfileSignup;
