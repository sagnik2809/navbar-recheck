window.addEventListener('DOMContentLoaded', (event) => {
    const navbarItems = document.getElementsByClassName('navbar-item');
  
    // Add event listeners to navbar items
    Array.from(navbarItems).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        removeActiveClass();
        item.classList.add('active');
      });
  
      item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
      });
    });
  
    // Remove 'active' class from all navbar items
    function removeActiveClass() {
      Array.from(navbarItems).forEach((item) => {
        item.classList.remove('active');
      });
    }
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const navbarItems = document.getElementsByClassName('navbar-item');
    const casesTab = document.getElementById('cases-tab');
    const casesTableContainer = document.getElementById('cases-table-container');
    const casesTableBody = document.getElementById('cases-table-body');
  
    // Function to remove 'active' class from all navbar items
    function removeActiveClass() {
      Array.from(navbarItems).forEach((item) => {
        item.classList.remove('active');
      });
    }
  
    // Event listeners for navbar items
    Array.from(navbarItems).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        removeActiveClass();
        item.classList.add('active');
      });
  
      item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
  
        // Hide the cases table container if it's not the "Cases" tab
        if (item !== casesTab) {
          casesTableContainer.style.display = 'none';
        }
      });
    });
  
    // Event listener for the "Cases" tab
    casesTab.addEventListener('click', () => {
      // Fetch data from the API
var request = new XMLHttpRequest();

//request.type='json';
request.open('GET',  'http://167.71.232.203/zra/MAPP_API/get_comp_list.php?usertype=1', true);
//request.open('GET','https://dummyjson.com/products/1', true);
console.log('hello 64');

request.setRequestHeader("Content-Type", "text/xml");
console.log('hello 66');

request.onreadystatechange=function()
{
  console.log('hello 70');
	if (request.readyState == 4)
	{
    console.log('hello 72');
		alert("status "+ request.status);
    console.log('hello 75');
		alert(request.responseText);
    console.log('hello 77');
	}
}
request.send();
console.log('hello 81');
alert(request.status);
console.log('hello 83');
alert(request.responseText);
console.log('hello 85');
      fetch('http://167.71.232.203/zra/MAPP_API/get_comp_list.php?usertype=1')
        .then((response) => response.json())
        .then((data) => {
        /*fetch('https://dummyjson.com/products/1')
        .then((response) => response.json())
        .then((data) => {*/
          console.log('hello 92');
          // Clear any existing rows in the table
         casesTableBody.innerHTML = '';
         //casesTableBody.innerHTML = null;
          console.log('hello 95');
  
          // Generate rows dynamically based on the data from the API
          data.forEach((datas) => {
            const row = document.createElement('tr');
            console.log('hello 100');
            row.innerHTML = `
              <td>${caseData.ticketNumber}</td>
              <td>${caseData.customerName}</td>
              <td>${caseData.category}</td>
              <td>${caseData.subcategory}</td>
              <td>${caseData.status}</td>
              <td>${caseData.createdOn}</td>
            `;

            /*row.innerHTML = `
            <td>${datas.id}</td>
            <td>${datas.brand}</td>
            <td>${datas.category}</td>
            <td>${datas.price}</td>
            <td>${datas.rating}</td>
            <td>${datas.stock}</td>
          `;*/
          console.log('hello 118');
            casesTableBody.appendChild(row);
          });
          console.log('hello 121');
  
          // Show the table container
          casesTableContainer.style.display = 'block';
          console.log('hello 125');
        })
        
        .catch((error) => {
          console.error('Error fetching cases data:', error);
          // Optionally show an error message if data cannot be fetched
        });
        console.log('hello 132');
    });
  });
