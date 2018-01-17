var icons = { einkauf: 
    { name: 'svg',
      attrs: { fillRule: 'evenodd', viewBox: '0 0 44 44' },
      childs: [ [Object] ],
      title: 'einkauf' },
   ms_city_badge: 
    { name: 'svg',
      attrs: 
       { xmlns: 'http://www.w3.org/2000/svg',
         viewBox: '0 0 110.72 137.7' },
      childs: [ [Object], [Object] ],
      title: 'ms_city_badge' },
   ms_dichte_hoch: 
    { name: 'svg',
      attrs: 
       { xmlns: 'http://www.w3.org/2000/svg',
         viewBox: '0 0 242.18 243.43' },
      childs: [ [Object], [Object] ],
      title: 'ms_dichte_hoch' } }

    for (icon in icons){
        console.log(icon + " -> " + icons.einkauf.title);
    }