const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    return result || null;
  } catch (error) {
    return null;
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();

    const removedContact = contacts.find((contact) => contact.id === contactId);
    if (removedContact) {
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );
      await fs.writeFile(
        contactsPath,
        JSON.stringify(updatedContacts, null, 2)
      );
    }
    return removedContact || null;
  } catch (error) {
    return null;
  }
};

const addContact = async (data) => {
    try {
        const contacts = await listContacts();

        const newContact = {
          id: nanoid(),
          ...data,
        };
        contacts.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return newContact;
    } catch (error) {
        return null;
    }
 
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
