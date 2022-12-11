import { showAlert } from './messages'
import "./styles.scss";
import $ from 'jquery';
import 'bootstrap';

const API = 'https://rickandmortyapi.com/api/character';

/*
function getCharacter(done) {
    const results = fetch("https://rickandmortyapi.com/api/character")
    results
        .then(response => response.json())
        .then(json => { done(json),
            printPagination(json.info) })
        .catch(err => {
            console.error("Error: ", err)
          });
} 
function getPagination(done) {
    const results = fetch()

}
 printPagination(info =>{


 })
getCharacter(json => {
    console.log(json);
    json.results.forEach(character => {

        //const tagString = '<div class="container"><div class="col mt-5"><div class="card" style="width: 13rem;"><img class="card-img-top" src="${{character.image}}" alt="Card image cap"></div></div></div>'
        const card = document.createRange().createContextualFragment(
           
        <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        <div class="">
          <div class="card">
            <div class="card-block">
            <img class="card-img-top" src="${character.image}" alt="Card image cap">
              <h4 class="card-title">${character.name}</h4>
              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Second link</a>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
                
        const main = document.querySelector("main");
        main.append(card);
        //html += '<div class="container"><div class="col mt-5"><div class="card" style="width: 13rem;"><img class="card-img-top" src="${character.image}" alt="Card image cap"></div></div></div>'
        //html += '<div class="col">'

    });
})
*/

const getCharacter = (urlApi) => {
  return fetch(urlApi)
    .then(response => response.json())
    .then(json =>{
            printData(json), 
            printPagination(json.info)
                })
    .catch(err => {
         console.error("Error: ", err)
       })
}

const printPagination = (info =>{
    let render = `<li class="page-item ">
            <a class="page-link" onclick="getCharacter('${info.prev}')">Previous</a></li>`
    render += `<li class="page-item"><a class="page-link" onclick="getCharacter('${info.next}')" >Next</a></li>`
    document.getElementById('pagination').innerHTML = render; 
})

const printData = (json => {
    json.results.forEach(character => {
    const card = document.createRange().createContextualFragment(/*html*/`
           
        <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        <div class="">
          <div class="card">
            <div class="card-block">
            <img class="card-img-top" src="${character.image}" alt="Card image cap">
              <h4 class="card-title">${character.name}</h4>
              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Second link</a>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>    
                    `);
        const main = document.querySelector("main");
        main.append(card);
    });
})


getCharacter(API);
