const argv = require('yargs').argv;
const contacts = require('./contacts');


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
		const allContacts = await contacts.listContacts();
		console.log(allContacts);
      break;

    case 'get':
      const oneContacts = await contacts.getContactById(id);
		console.log(oneContacts);
      break;

    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
		console.log(newContact);
      break;

    case 'remove':
      const removeContact = await contacts.removeContact(id);
		console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

