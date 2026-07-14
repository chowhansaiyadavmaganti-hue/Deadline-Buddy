// Task Management Application
class DeadlineBuddy {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderTasks();
        this.updateCountdowns();
    }

    setupEventListeners() {
        const form = document.getElementById('taskForm');
        form.addEventListener('submit', (e) => this.handleAddTask(e));

        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
    }

    handleAddTask(e) {
        e.preventDefault();
        
        const taskName = document.getElementById('taskName').value.trim();
        const taskDeadline = document.getElementById('taskDeadline').value;
        const taskPriority = document.getElementById('taskPriority').value;

        if (!taskName || !taskDeadline) {
            alert('Please fill in all fields');
            return;
        }

        const task = {
            id: Date.now(),
            name: taskName,
            deadline: new Date(taskDeadline).getTime(),
            priority: taskPriority,
            completed: false,
            createdAt: Date.now()
        };

        this.tasks.push(task);
        this.saveTasks();
        this.renderTasks();
        
        // Reset form
        document.getElementById('taskForm').reset();
    }

    handleFilter(e) {
        const filter = e.target.dataset.filter;
        this.currentFilter = filter;

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        this.renderTasks();
    }

    toggleComplete(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }
    }

    deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(t => t.id !== taskId);
            this.saveTasks();
            this.renderTasks();
        }
    }

    getFilteredTasks() {
        const now = Date.now();
        
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(t => !t.completed && t.deadline > now);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            case 'overdue':
                return this.tasks.filter(t => !t.completed && t.deadline < now);
            default:
                return this.tasks;
        }
    }

    getTimeRemaining(deadline) {
        const now = Date.now();
        const diff = deadline - now;

        if (diff < 0) {
            return { overdue: true, text: 'Overdue' };
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
            return { 
                days, 
                hours, 
                minutes, 
                text: `${days}d ${hours}h ${minutes}m remaining`,
                urgent: days <= 1,
                warning: days <= 3
            };
        } else if (hours > 0) {
            return { 
                hours, 
                minutes, 
                text: `${hours}h ${minutes}m remaining`,
                urgent: true,
                warning: false
            };
        } else {
            return { 
                minutes, 
                text: `${minutes}m remaining`,
                urgent: true,
                warning: false
            };
        }
    }

    getCountdownClass(timeRemaining) {
        if (timeRemaining.overdue) return 'overdue';
        if (timeRemaining.urgent) return 'urgent';
        if (timeRemaining.warning) return 'warning';
        return 'safe';
    }

    formatDate(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });
    }

    renderTasks() {
        const container = document.getElementById('tasksContainer');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            container.innerHTML = `
                <div class="empty-state" id="emptyState">
                    <p>🎯 No tasks found. ${this.currentFilter === 'all' ? 'Add your first task above!' : 'Try a different filter.'}</p>
                </div>
            `;
            return;
        }

        // Sort tasks: overdue first, then by deadline
        const sortedTasks = [...filteredTasks].sort((a, b) => {
            const now = Date.now();
            const aOverdue = !a.completed && a.deadline < now;
            const bOverdue = !b.completed && b.deadline < now;
            
            if (aOverdue && !bOverdue) return -1;
            if (!aOverdue && bOverdue) return 1;
            
            return a.deadline - b.deadline;
        });

        container.innerHTML = sortedTasks.map(task => {
            const timeRemaining = this.getTimeRemaining(task.deadline);
            const countdownClass = this.getCountdownClass(timeRemaining);
            const isOverdue = !task.completed && task.deadline < Date.now();
            
            return `
                <div class="task-card priority-${task.priority} ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}">
                    <div class="task-header">
                        <div class="task-title">${task.name}</div>
                        <div class="task-actions">
                            <span class="priority-badge priority-${task.priority}">${task.priority}</span>
                            <button class="btn-icon btn-complete" onclick="deadlineBuddy.toggleComplete(${task.id})" title="${task.completed ? 'Mark as incomplete' : 'Mark as complete'}">
                                ${task.completed ? '↩️' : '✅'}
                            </button>
                            <button class="btn-icon btn-delete" onclick="deadlineBuddy.deleteTask(${task.id})" title="Delete task">
                                🗑️
                            </button>
                        </div>
                    </div>
                    <div class="task-info">
                        <div class="deadline-info">
                            <span>📅 Deadline: ${this.formatDate(task.deadline)}</span>
                        </div>
                        <div class="deadline-info">
                            <span class="countdown ${countdownClass}">⏰ ${timeRemaining.text}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateCountdowns() {
        setInterval(() => {
            this.renderTasks();
        }, 60000); // Update every minute
    }

    saveTasks() {
        localStorage.setItem('deadlineBuddyTasks', JSON.stringify(this.tasks));
    }

    loadTasks() {
        const saved = localStorage.getItem('deadlineBuddyTasks');
        return saved ? JSON.parse(saved) : [];
    }
}

// Initialize the application
const deadlineBuddy = new DeadlineBuddy();

