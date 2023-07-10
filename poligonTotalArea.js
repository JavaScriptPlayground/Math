const coordinates = [
    {
        x: 0,
        y: 0
    },
    {
        x: 5,
        y: 0
    },
    {
        x: 7,
        y: 5
    },
    {
        x: 3,
        y: 8
    },
    {
        x: 0,
        y: 5
    },
]

let totalArea = 0;

coordinates.reduce((lastCoordinate, currentCoordinate) => {
    const width = Math.abs(Math.max(lastCoordinate.x, currentCoordinate.x) - Math.min(lastCoordinate.x, currentCoordinate.x))
    
    const height = (Math.abs(lastCoordinate.y) + Math.abs(currentCoordinate.y)) / 2
    
    const area = width * height;

    if (lastCoordinate.x - currentCoordinate.x > 0) {
        totalArea += area
    } else {
        totalArea -= area
    }
    
    return currentCoordinate
}, coordinates[coordinates.length - 1])

console.log(totalArea);
