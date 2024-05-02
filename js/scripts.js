
// go to map
mapboxgl.accessToken = 'pk.eyJ1IjoibXJvZGEiLCJhIjoiY2x1dHl3cXM5MDRmZTJscDZuczk1MGR0MyJ9.b4OLZlubx4b5Hc19pGZRpQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-74.05, 40.68],
    zoom: 10.5
});

map.addControl(new mapboxgl.NavigationControl());

// execute load
map.on('load', () => {


    // layers
    console.log(
        map.getStyle().layers
    )


    // trucks GIS Data
    map.addSource('trucks', {
        "type": "geojson",
        "data": "data/trucks.geojson"
    })

    // trucks line layer data
    map.addLayer({
        'id': 'trucks',
        'type': 'line',
        'source': 'trucks',
        'layout': {},
        'paint': {
            'line-color': '#FFA500',
            'line-width': 2.5
        }
    },);

    // trucks fill layer data
    map.addLayer({
        'id': 'trucks',
        'type': 'fill',
        'source': 'trucks',
        'layout': {},
        'paint': {
        }
    },);


    // bikes GIS data
    map.addSource('bikes', {
        "type": "geojson",
        "data": "data/bikes.geojson"
    })

    // Line layer Data bikes
    map.addLayer({
        'id': 'bikes',
        'type': 'line',
        'source': 'bikes',
        'layout': {},
        'paint': {
            'line-color': '#028A0F',
            'line-width': 2.5
        }
    },);

    // fill layer bikes
    map.addLayer({
        'id': 'bikes',
        'type': 'fill',
        'source': 'bikes',
        'layout': {},
        'paint': {
        }
    },);

    // bike and trucks shapefile
    map.addSource('bikeandtrucks', {
        "type": "geojson",
        "data": "data/bikeandtrucks.geojson"
    })

    // bike and trucks line
    map.addLayer({
        'id': 'bikeandtrucks',
        'type': 'line',
        'source': 'bikeandtrucks',
        'layout': {},
        'paint': {
            'line-color': '#ce2d2d',
            'line-width': 2.5
        }
    },);

    // bike and trucks fill layer
    map.addLayer({
        'id': 'bikeandtrucks',
        'type': 'fill',
        'source': 'bikeandtrucks',
        'layout': {},
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],

            ],
            'fill-opacity': 0.7
        }
    },);
    // bike, truck, and bike+truck route button visibility info
    let biketruckvisible = true

    $('#bikeandtrucks-toggle').on('click', function () {

        let value = 'visible'

        if (biketruckvisible === true) {
            value = 'none'
        }

        map.setLayoutProperty('bikeandtrucks', 'visibility', value)
        map.setLayoutProperty('bikeandtrucks', 'visibility', value)

        biketruckvisible = !biketruckvisible
    })

    let bikevisible = true

    $('#bike-toggle').on('click', function () {

        let value = 'visible'

        if (bikevisible === true) {
            value = 'none'
        }

        map.setLayoutProperty('bikes', 'visibility', value)
        map.setLayoutProperty('bikes', 'visibility', value)

        bikevisible = !bikevisible
    })

    let trucksvisible = true

    $('#trucks-toggle').on('click', function () {

        let value = 'visible'

        if (trucksvisible === true) {
            value = 'none'
        }

        map.setLayoutProperty('trucks', 'visibility', value)
        map.setLayoutProperty('trucks', 'visibility', value)

        trucksvisible = !trucksvisible
    })

})