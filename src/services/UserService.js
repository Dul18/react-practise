import { Axios } from 'axios';

class UserService {
  static getAllUsers() {
    let serverURL = 'https://jsonplaceholder.typicode.com/users';
    return Axios.get(serverURL);
  }
}

export default UserService;
