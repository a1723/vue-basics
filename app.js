const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            if (this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        },
    }
}

const app = Vue.createApp(App)

app.mount('#app')