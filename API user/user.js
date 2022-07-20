const userID = sessionStorage.getItem("userID");
console.log(userID);
axios
  .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
  .then(response => {
    const data = response.data;
    document.querySelector('h1').innerText = data.name;
    document.getElementById('companyName').innerText = data.company.name;
    document.getElementById('street').innerText = data.address.street;
    document.getElementById('website').innerText = data.website;
  });

  axios
   .get(`https://jsonplaceholder.typicode.com/posts/?userId=${userID}`)
   .then(response => {
     const posts = response.data;
     posts.forEach((post, index, array) => {
      document.querySelector("table").innerHTML += `
      <tr>
        <td>${index+1}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>`;
    });
   })