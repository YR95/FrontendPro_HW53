import User from './User';
import Rendering from './Rendering';

class FetchingData {
  function;

  static fetchDataFromFile(url) {
    fetch(url)
    .then(response => response.json())
    .then(users => {
      if (users) {
        users.forEach(x => {
          let user = new User(x.id, x.name, x.age, x.email, x.country,
              x.company,
              x.birthday);
          User.USERSINFILE.push(user);
        });
        console.log(User.USERSINFILE);
      } else {
        console.log('No users found');
      }
    }).then(() => {
      Rendering.rendering();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
}

export default FetchingData;