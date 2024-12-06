import api from "./httpClient";
import { Contact } from "../types";

class ContactService {
  async saveContact(data: Contact) {
    try {
      console.log(data)
      const res = await api.post('/contact', data)
      if (res.data?.success) {
        return res.data.success
      }

      return false
    } catch(e) {
      console.log(e)
      return false
    }  
  }
}

const contactService = new ContactService();
export default contactService;