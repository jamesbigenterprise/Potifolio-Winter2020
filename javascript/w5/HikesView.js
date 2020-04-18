 // Hike View handler
 export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
        this.listElement = document.getElementById(listElementId);

        
    }
  renderHikeList(hikeList, listElement, homeOrDetail) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement

    //Create a list item for each hike in the Array
         hikeList.forEach(hike => 
         {

          const item = document.createElement('li');
          item.innerHTML = `<img
          src="${this.imgBasePath}${hike.imgSrc}"
          alt="${hike.imgAlt}"
        />
        <h2 >${hike.name}</h2>
        <div>
          <h3>Distance</h3>
          <p>${hike.distance}</p>
        </div>
        <div>
          <h3>Difficulty</h3>
          <p>${hike.distance}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>${hike.description}</p>
        </div>
        <div>
          <h3>How to get there</h3>
          <p>
          ${hike.directions}
          </p>
        </div>`;

        item.childNodes[1].addEventListener('onTouchend', () => showOneHike(event.path[1].classList.value, event.path[0].innerText));
        //if it will be the home page we add this class to hide the details
        if (homeOrDetail){
            item.classList.add('light');
        }
        //the item was created, add to the list
        listElement.appendChild(item);
         });
  
}
  renderSmallhikeList(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
    this.renderHikeList(hike, this.listElement, true);
  }
  renderOneHikeFull(singleHike, parentElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal!
    this.renderHikeList(singleHike, parentElement, false);

  }
}