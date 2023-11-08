/*
   Filename: elaborateCode.js

   Description: This code implements a complex and sophisticated task management system.
                It allows users to create projects, add tasks to projects, assign priority
                levels to tasks, mark tasks as completed, and generate reports.

   Author: [Your Name]

   Date: [Current Date]

   Note: This code is for demonstration purposes and may not include error-handling or
         advanced security measures.
*/

class Task {
    constructor(title, priority, completed) {
        this.title = title;
        this.priority = priority;
        this.completed = completed;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    generateReport() {
        let completedTasks = 0;
        let highPriorityTasks = 0;
        let mediumPriorityTasks = 0;
        let lowPriorityTasks = 0;

        for (let task of this.tasks) {
            if (task.completed) {
                completedTasks++;
            }

            switch (task.priority) {
                case 'high':
                    highPriorityTasks++;
                    break;
                case 'medium':
                    mediumPriorityTasks++;
                    break;
                case 'low':
                    lowPriorityTasks++;
                    break;
            }
        }

        console.log(`Project Report: ${this.name}`);
        console.log(`Total Tasks: ${this.tasks.length}`);
        console.log(`Completed Tasks: ${completedTasks}`);
        console.log(`High Priority Tasks: ${highPriorityTasks}`);
        console.log(`Medium Priority Tasks: ${mediumPriorityTasks}`);
        console.log(`Low Priority Tasks: ${lowPriorityTasks}`);
    }
}

class TaskManager {
    constructor() {
        this.projects = [];
    }

    createProject(name) {
        const project = new Project(name);
        this.projects.push(project);
        return project;
    }

    findProjectByName(name) {
        return this.projects.find(project => project.name === name);
    }
}

// Usage Example:

const taskManager = new TaskManager();
const project1 = taskManager.createProject('Project 1');
const project2 = taskManager.createProject('Project 2');

const task1 = new Task('Task 1', 'high', false);
const task2 = new Task('Task 2', 'medium', false);
const task3 = new Task('Task 3', 'low', true);

project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

task1.markAsCompleted();

project1.generateReport();
project2.generateReport();