/****************************************************************
 * My original plan was to inclement the website with a back button and all
 * but i ran out of time.
 * **************************************************************/      
      
      //create an array of hikes

      //once: removes the listener after it has been fired.

      const hikeList = [
        {
          name: 'Bechler Falls',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Bechler Falls',
          distance: '3 miles',
          difficulty: 'Easy',
          description:
            'Beautiful short hike along the Bechler river to Bechler Falls',
          directions:
            'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
        },
        {
          name: 'Teton Canyon',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Teton Canyon',
          distance: '5 miles',
          difficulty: 'Moderate',
          description: 'Beautiful short hike up Teton Canyon',
          directions:
            'Take Highway 33 to Driggs. Turn right into the town and continue through. Follow that road for a few miles then turn right up Teton Canyon. Drive to the end of the road. There is a parking area at the trailhead.'
        },
        {
          name: 'Denanda Falls',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Denanda Falls',
          distance: '12 miles',
          difficulty: 'Moderate',
          description:
            'Beautiful hike through Bechler Meadows to Denanda Falls',
          directions:
            'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for several miles then turn left again at the sign for the Bechler Meadows ranger station. There is a parking area at the trailhead.'
        }

      ];
      //The view will toggle using the class

      
      function buildHikeDetails (hike)
      {
          const item = document.createElement('li');
          item.innerHTML = `<img
          src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}"
          alt="${hike.imgAlt}"
        />
        <h2 ontouchend='handleTouch(event)'>${hike.name}</h2>
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
        item.classList.add('light');
        return item;
      } 

      function handleTouch(event){
        itemTouched(event.path[1].classList.value, event.path[0].innerText);
      }
      function itemTouched(currentClass, itemName)
      {
         if(currentClass = 'light')
         {
           //it if in the main list so let us display the detailed view
           const listElement = document.getElementById('hikes');
           listElement.innerHTML = '';
           const item = createSingleHike(itemName);
           listElement.appendChild(item);
         }else
         {
           //do nothing since it already is in the detailed view
         } 
      }
      function createSingleHike(hikeName)
      {
        let selectedHike = null;
        hikeList.forEach(element => {
          if (element.name == hikeName)
          selectedHike = element;
        });
        console.log(selectedHike);
        let singleHike = buildHikeDetails(selectedHike);
        toggleView(singleHike);
        return  singleHike;
      }
      function buildListForAll () 
      {
         const listElement = document.getElementById('hikes');
         const imgPath = "https://byui-cit.github.io/cit261/examples/";
         console.dir(listElement);
         hikeList.forEach(hike => 
         {
          listElement.appendChild(buildHikeDetails(hike)); 
         });
      }
      function toggleView(element){
        element.classList.toggle('light');
      }
      

      