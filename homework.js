class RunTracker {
    constructor (name,email) {
        this.name= name;
        this.email = email;
        this.date = []
        this.distance=[]
        this.time=[]
    }
    addRunner(date,distance,time) {
        this.date.push(date)
        this.distance.push(distance)
        this.time.push(time)
    }
    totelDistance() {
       return this.distance.reduce((prev, curr) => prev + curr)
    }
    longestime (){
        return this.time.reduce((prev,curr) => prev > curr ? prev:curr)
    }
    averageSpeed() {
        return this.totelDistance() / this.time.reduce((prev,curr) => prev+curr)
    }
}
const runner = new RunTracker('meshal','meshal@gmail.com')
runner.addRunner("2017-01-01",10,30)
runner.addRunner("2017-01-02",5,20)

