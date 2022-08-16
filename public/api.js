class TaskApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  create(params) {
    fetch(`${this.baseUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        title: params.text,
        completed: params.status,
        id: params.id,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonData) => {
        console.log(responseJsonData);
      })
      .catch((error) => console.error(error));
  }

  async read() {
    try {
      let response = await fetch(`${this.baseUrl}/todos`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  update(id, condition) {
    fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        completed: condition,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonData) => {
        console.log(responseJsonData);
      })
      .catch((error) => console.error(error));
  }
  delete(id) {
    fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((response) => response.json())
      .then((responseJsonData) => {
        console.log(responseJsonData);
      })
      .catch((error) => console.error(error));
  }
}
