var Task = /** @class */ (function () {
    function Task(descriptionParameter, priorityParameter) {
        this.done = false;
        this.description = descriptionParameter;
        this.priority = priorityParameter;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
