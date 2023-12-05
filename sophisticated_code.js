/* 
File: sophisticated_code.js
Description: This code is a complex and elaborate implementation of a task scheduler using priority queues.
*/

class Task {
  constructor(name, priority, duration) {
    this.name = name;
    this.priority = priority;
    this.duration = duration;
  }
}

class PriorityQueue {
  constructor() {
    this.tasks = [];
  }

  enqueue(task) {
    if (this.tasks.length === 0) {
      this.tasks.push(task);
    } else {
      let added = false;
      for (let i = 0; i < this.tasks.length; i++) {
        if (task.priority > this.tasks[i].priority) {
          this.tasks.splice(i, 0, task);
          added = true;
          break;
        }
      }
      if (!added) {
        this.tasks.push(task);
      }
    }
  }

  dequeue() {
    if (this.tasks.length === 0) {
      return null;
    }
    return this.tasks.shift();
  }
}

class Scheduler {
  constructor() {
    this.queue = new PriorityQueue();
  }

  addTask(name, priority, duration) {
    const task = new Task(name, priority, duration);
    this.queue.enqueue(task);
  }

  run() {
    while (this.queue.tasks.length > 0) {
      const task = this.queue.dequeue();
      console.log(`Running Task: ${task.name}`);
      // Simulating task execution
      this.simulateTaskExecution(task.duration);
    }
  }

  simulateTaskExecution(duration) {
    const startTime = new Date();
    while (new Date() - startTime < duration) {
      // Simulating task execution time
    }
  }
}

// Creating a Scheduler instance
const scheduler = new Scheduler();

// Adding tasks
scheduler.addTask("Task 1", 3, 5000);
scheduler.addTask("Task 2", 1, 3000);
scheduler.addTask("Task 3", 2, 2000);
scheduler.addTask("Task 4", 2, 4000);

// Running the scheduler
scheduler.run();