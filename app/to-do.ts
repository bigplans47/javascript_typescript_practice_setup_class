class Task {
  done: boolean = false

  constructor(public description: string, public priority: string){}
}

var tasks: Task[] = []
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy Choclate', 'Low'));
tasks.push(new Task('Do laundry', 'High'));
console.log(tasks);
console.log('yo new stuff below');
for(var elementOfTasks of tasks) {
  console.log(elementOfTasks)
}

// refactor class to set done to false in class declaration not instantiation of object of this class
// class Task {
//   done: boolean;
//   description: string; //note this line is removed via public parameter setup
//   priority: string; //note this line is removed via public parameter setup
//
//   constructor(public description: string, public priority: string){
//     this.done = false;
//   }
// }

// reworked constructor to automatically create properties based on the naming of of public paramenters
// constructor(public description: string, public priority: string){
//   this.done = false;
//   // this.description = description; //this can be removed typescript rule
//   // this.priority = priority; //removal ule, if constructor paramanets share the exact same name as class properties, typescript will automatically assign them to a 'public' property of the same name and type
// }

// old example below
// class Task {
//   done: boolean;
//   description: string;
//   priority: string;
//
//   constructor(descriptionParameter: string, priorityParameter: string){
//     this.done = false;
//     this.description = descriptionParameter;
//     this.priority = priorityParameter;
//   }
// }
//
// var tasks: Task[] = []
// tasks.push(new Task('Do the dishes.', 'Medium'));
// console.log(tasks);
