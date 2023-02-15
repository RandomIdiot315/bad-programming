//by Jaden(yab0ikai)
//builder v3


class GeneralThing {
    
    constructor(name, properties, info, count=undefined/*count does not replicate things, it sets a value for stuff e.g. coins*/) {
        
        this.name = name;
        this.properties = properties
        this.info = info //i would use this.description but it seems to be reserved
        this.count = count
       
    }
}
