const URL = '';

class ServiceFetch{
  async getService(){
    const temp = await fetch(URL,
      {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
    return await temp.json();
  };
};

export default new ServiceFetch;