class ContactService {
  static contactList = [
    {
      id: 'A001',
      gender: 'female',
      name: 'Dul',
      location: 'Gampaha',
      Image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
      id: 'A002',
      gender: 'female',
      name: 'San',
      location: 'Gampaha',
      Image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
      id: 'A003',
      gender: 'male',
      name: 'Nir',
      location: 'Mathara',
      Image:
        'https://gruposaedal.com/wp-content/uploads/2021/10/1633621429_319_50-Cool-Haircuts-for-Boys-in-2021.jpg',
    },
    {
      id: 'A004',
      gender: 'female',
      name: 'Dul',
      location: 'Gampaha',
      Image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
      id: 'A005',
      gender: 'female',
      name: 'Dul',
      location: 'Gampaha',
      Image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80',
    },
  ];

  static getContactList() {
    return this.contactList;
  }
}

export default ContactService;
