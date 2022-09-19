fetch('https://api.thecatapi.com/v1/breeds')
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    let dataone = '';
    completeData.map((values) => {
      dataone += `<div class="card">
      <h1 class="id">${values.id}</h1>
      <img src="${values.image?.url}" alt="" />
      <p>${values.name}</p>
      <p class="o">${values.origin}</p>
      <p class="w">${values.weight.metric}</p>
    </div>`;
    });
    document.getElementById('cards').innerHTML = dataone;
  })
  .catch((error) => {
    console.log(error);
  });
