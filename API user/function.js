axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    const users = response.data;
    console.log(users);
    users.forEach((user, index, array) => {
      document.querySelector("tbody").innerHTML += `
      <tr onclick="getUser(${user.id})">
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
      </tr>`;
    });
});


function getUser(id) {
  console.log(id);
  sessionStorage.setItem('userID',id)
  window.location.href = 'user.html'
}