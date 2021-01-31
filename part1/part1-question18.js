
let statistics = {
    redCars:21,
    bueCars:45,
    greenCars:12,
    raceCars:12,
    blackCars:40,
    rareCars:2
    };
    
    
    for ( item in statistics){
        if( (item.charAt(0)==='r') ||(statistics[item] %2 != 0) ){
        console.log(
            `${item}:${statistics[item]}`
        )
        }
    
    }