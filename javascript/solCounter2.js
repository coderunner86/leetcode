/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var startvalue = init;
    var currentCount = startvalue;
        return{increment(){
                currentCount += 1
                return currentCount;
        }, decrement(){
                currentCount -= 1;
                return currentCount;
        },reset(){
                currentCount = startvalue
                return currentCount
        }
        }
    };
    
    /**
     * const counter = createCounter(5)
     * counter.increment(); // 6
     * counter.reset(); // 5
     * counter.decrement(); // 4
     */