// const ArrayToQueueAdapter = function(){
//     Array.call(this);
// }
//
// ArrayToQueueAdapter.prototype.enqueue = function(data){
//     this.push(data);
// };
//
// ArrayToQueueAdapter.prototype.dequeue = function(){
//     return this.pop();
// }
//
//
// Object.defineProperty(ArrayToQueueAdapter.prototype,'count',{
//    get:function myProperty() {
//        return this.length
//    }
// });
// Object.setPrototypeOf(ArrayToQueueAdapter.prototype,Array.prototype);
//
// const queue = new ArrayToQueueAdapter();
// queue.enqueue('s');


class ArrayToQueueAdapter extends Array{
    enqueue(data){
        this.push(data);
    }
    dequeue(){
        this.pop();
    }
    get count(){
        return this.length;
    }
}

