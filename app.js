// Progression 1: PROMISE ME
const fetchDataPromise = fetch('https://jsonplaceholder.typicode.com/users');

fetchDataPromise
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Progression 2: SHOW MY PROMISE
    console.log('Data from the promise:', data);
    
    // Display data in the form of a list
    var player = '<h2>List of Users</h2>';
    data.forEach(function (user) {
      player += `<div class="player">
                    <div class="strength">Name    : ${user.name}</div>
                    <div>Email   : ${user.email}</div>
                    <div>Phone   : ${user.phone}</div>
                    <div>Website : ${user.website}</div>
                    <div>Company : ${user.company.name}</div>
                    <div>City    : ${user.address.city}</div>
                    <div>Zipcode : ${user.address.zipcode}</div>
                  </div>`;
    });

    document.body.innerHTML = player; // Displaying in the console or in the HTML as per the requirement
  })
  .catch(error => {
    // Progression 3: REJECT ME
    console.log('Promise rejected.');
    console.error(error.message);
  });
