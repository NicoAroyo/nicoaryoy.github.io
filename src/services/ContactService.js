export class ContactService {
  async postAsync(item) {
    return fetch(`https://nicoaroyo.github.io/WebApi/contacts`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(this.#success)
      .catch(this.#failure);
  }

  async #success(response) {
    const data = await response;
    return data;
  }

  #failure(response) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
}
export default ContactService;
