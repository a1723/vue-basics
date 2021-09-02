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
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        deleteNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
}

const app = Vue.createApp(App)

app.mount('#app')