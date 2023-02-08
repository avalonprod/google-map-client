function initMap() {
  const dataMap = {
    // These are general parameters for all			
    general: {
      mapId: "1177521b91f3d8ea",
      zoom: 1,
      // selector where to put the map			
      insertSelector: "#container-map",
      // link to logo			
      logoUrl: "http://floridakeyspass.com/wp-content/uploads/2022/07/Untitled-1-e1661473941550.png",
      // specifies whether controls will be displayed on the map if true then will be if false will not be			
      disableDefaultUI: true,
      // specifies to show all markers or only the current page if true, all markers will be displayed if false, only the marker of the current page will be displayed			
      allMarkers: true,
      // default values when the page is not defined			
      // Location to center the map and to display the marker			
      defaultBangalore: {
          lat: 25.095599,
          lng: -80.437106
      },
      // marker options			
      iconMarker: {
          // Default link to marker image			
          urlImgMarker: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          // marker size			
          size: [20, 28],
          // bouncing animation if true will work if false will not work			
          animation: false,
          // Allow marker dragging if true will work if false will not work			
          draggable: false,
          // numbering markers if true will work if false will not work			
          numbering: false
      },
  },
  // This is a set of pages with options for each page		

    pages: [
      {
        id: "63e2b861f5796c256c9c6701",
        href: "",
        urlImgMarker: "https://floridakeyspass.com/wp-content/uploads/2022/07/Scuba-Diver.png",
        bangalore: {
          lat: 25.080886,
          lng: -80.454156
        },
        dataPopup: {
          title: "Florida Keys",
          text: "Welcome to the Florida Keys",
          urlImg: "https://floridakeyspass.com/wp-content/uploads/2023/01/Key-West-Ocean-Water-Park.jpg",
          links: [
            {
              url: "https://floridakeyspass.com/product-category/things-to-do-in-the-florida-keys/",
              name: "View All Activities",
              linkId: "6201.324948337098"
            }
          ]
        }
      },
      {
        id: "63e2c167950549ba5452a91b",
        href: "https://floridakeyspass.com/product/key-west-vandenberg-wreck-dive/",
        urlImgMarker: "https://floridakeyspass.com/wp-content/uploads/2022/07/Scuba-Diver.png",
        bangalore: {
          lat: 24.559926,
          lng: -81.804737
        },
        dataPopup: {
          title: "Vandenberg Wreck",
          text: "The USS Vandenburg Wreck sits in about 140 ft. This is the 2nd largest wreck dive in the world",
          urlImg: "https://floridakeyspass.com/wp-content/uploads/2023/01/vandenberg-wreck-dive-key-west.jpg",
          links: [
            {
              url: "https://floridakeyspass.com/product/key-west-vandenberg-wreck-dive/",
              name: "Dive This Wreck",
              linkId: "-7632.037425666307"
            },
            {
              url: "https://floridakeyspass.com/product/key-west-vandenberg-wreck-dive/",
              name: "Get Advanced Certified Here",
              linkId: "-5619.716585452857"
            }
          ]
        }
      }
    ],
  
  };

  async function getPagesRequest() {
    await fetch("https://google-map-prod.onrender.com/api/get-pages-data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  getPagesRequest();
  function setData(data) {
    dataMap.pages = data;
    console.log(data)
    init();
  }

  function init() {
    const hrefPage = window.location.href;
    function pagesInit() {
      for (let i = 0; i < dataMap.pages.length; i++) {
        if (dataMap.pages[i].href == hrefPage) {
          return dataMap.pages[i];
        } else {
          return dataMap.pages[0];
        }
      }
    }

    const dataPages = pagesInit();
  

    let dataMarker = [];

    function returnDataMarker() {
      if (dataMap.general.allMarkers) {
        for (let i = 0; i < dataMap.pages.length; i++) {
          dataMarker.push([
            dataMap.pages[i].bangalore,
            dataMap.pages[i].id,
            dataMap.pages[i].dataPopup,
            dataMap.pages[i].urlImgMarker,
          ]);
        }
      } else {
        dataMarker.push([
          dataPages.bangalore,
          dataPages.id,
          dataPages.dataPopup,
        ]);
      }
    }

    

    returnDataMarker();

    document.querySelector(dataMap.general.insertSelector).insertAdjacentHTML(
      "afterend",
      `				

      <div class="root-map">	
	
      <style>			
      #map {			
      width: 100%;			
      height: 260px;			
      position: relative !important;			
      }			
      .map-container {			
      position: relative;			
      margin-top: 300px;			
      }			
      .map-container .logo {			
      display: block;			
      width: 140px;			
      color: #000;			
      position: absolute;			
      z-index: 10000;			
      bottom: 20px;			
      left: 10px;			
      font-size: 20px;			
      }			
      .map-container .logo img {			
      width: 100%			
      }			
      .gmnoprint:not(.gm-bundled-control) {			
      display: none;			
      }			
      .gm-bundled-control .gmnoprint {			
      display: block;			
      }			
      .gm-style-iw.gm-style-iw-c {			
      padding: 0 !important;			
      height: auto !important;					
      max-height: 800px !important;			
      position: absolute !important;			
      left: 120px !important;			
      min-width: 280px !important;			
      }			
      .gm-style-iw-d {			
      overflow: hidden !important;			
      padding: 0 !important;			
      height: auto !important;			
      max-height: 800px !important;			
      }			
      .gm-ui-hover-effect {			
      background-color: rgba(255, 255, 255, 90%) !important;			
      border-radius: 50px !important;			
      margin-top: 14px !important;			
      margin-right: 14px !important;			
      display: flex !important;			
      justify-content: center !important;			
      align-items: center !important;			
      }			
      .gm-control-active.gm-fullscreen-control {
          display: none;
      }
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      .popup {
          transition: 4s ease;
          width: 100%;
          margin: 0 auto;
          margin-top: 30px;
          margin-left: 5px;
          margin-right: 5px;
          height: auto;
          z-index: -1;
      
      }
      .popup.active {
          height: auto;
          min-height: 230px;
          
          z-index: 100;
      } 
      .popup-wrapper {
          display: flex;
          border: 1px solid #198fd9;
          border-radius: 10px;
          padding: 5px;
  
      }
      .popup-content-left {
          display: flex;
      }
      .popup-content-right {
          display: flex;
          margin-left: 10px;
          margin-top: 10px;
      
      }
      .popup-list {
          margin-left: 30px;
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          column-gap: 30px;
      }
      .popup-img {
          display: block;
          width: 240px;
          min-height: 100%;
          border-radius: 7px
      }
      @media (max-width: 630px) {
          .popup-img {
              display: none !important;
          }
      }
      .popup-img img {
          width: 100%;
          height: 100%;
          border-radius: 9px 0px 0px 9px;
      }
  
      .title-wrapper {
          margin-left: 20px;
      }
      .popup-title {
          margin-top: 20px;
          margin-bottom: 0 !important;
          color: #198fd9;
          font-size: 25px !important;
      }
      .popup-subtitle {
          font-size: 15px !important;
          font-weight: 400;
          margin-top: 3px;
          margin-bottom: 0;
          margin-left: 20px;
          color: #70757a;
  
      }
      .popup-list-wrapper {
          display: flex;
          
      }
  
      .popup-item {
          color: #70757a;
      }
      .popup-text {
          font-size: 17px;
          max-width: 435px;
          margin-left:0px;
          margin-top: 15px;
          
      }

      .popup-link {
        color: #000;
        transition: 0.5s ease;
        text-decoration: none;
        font-size: 18px !important;
        font-weight: 600;
      }

      .popup-link:hover {
        color: #198fd9;
      }
          
      @media (max-width: 1210px) {
          margin-top: 8px;
      }
          </style>			
          <div class="map-container">			
          <div class="logo"><img src="${dataMap.general.logoUrl}" alt="logo"></div>			
          <div id="map">			
          </div>			
          </div>			
          </div>				
        `
    );

    // function initMap() {
    const bangalore = dataPages.bangalore;


    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "1177521b91f3d8ea",
      zoom: 12,
      center:
        bangalore == undefined ? dataMap.general.defaultBangalore : bangalore,
      disableDefaultUI: dataMap.general.disableDefaultUI ? false : true,
    });
    addMarker(map);
    // }
   
    function addMarker(map) {
      dataMarker.forEach(([position, id, dataPopup, urlImgMarker], i) => {
        let dataLinks = "";

        dataPopup.links.forEach((item) => {
          dataLinks += `				
        <li class="popup-item">				
        <a href="${item.url}" class="popup-link">${item.name}</a>				
        </li>`;
        });

        const iconMarker = {
          url:
            urlImgMarker != ""
              ? urlImgMarker
              : dataMap.general.iconMarker.urlImgMarker,
          size: new google.maps.Size(
            dataMap.general.iconMarker.size[0],
            dataMap.general.iconMarker.size[1]
          ),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32),
        };

        const marker = new google.maps.Marker({
          position: position,
          label: dataMap.general.iconMarker.numbering ? id.toString() : null,
          map: map,
          icon: iconMarker,
          zIndex: 10,
          animation: dataMap.general.iconMarker.animation
            ? google.maps.Animation.BOUNCE
            : null,
          draggable: dataMap.general.iconMarker.draggable,
        });

        const contentString = `				
                        
                        
        <div class="popup">
        <div class="popup-wrapper">
            <div class="popup-img">
                <img src="${dataPopup.urlImg}" alt="popup-img">
            </div>
            <div class="popup-content">
                <div class="popup-content-left">
                    <div class="title-wrapper">
                        <h2 class="popup-title">${dataPopup.title}</h2>
                        <div class="popup-text"> ${dataPopup.text}</div>
                    </div>
                </div>
                <h5 class="popup-subtitle">available at this location</h5>
                <div class="popup-content-right">
                    <div class="popup-list-wrapper">
                        <ul class="popup-list">
                            
                            ${dataLinks}
                        </ul>

                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>			
        `;
        const modalContainer = document.querySelector("#container-popup");
        function changeDataPopup() {
          modalContainer.innerHTML = contentString;
          return true;
        }

        marker.addListener("click", () => {
          const ok = changeDataPopup();
          if (ok) {
            const popup = document.querySelector(".popup");
            popup.style.bottom = 0 + "px";
          }
        });
      });
    }
  }
}

window.initMap = initMap;
