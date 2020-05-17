var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message2: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Criar algo incrível' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message3: 'Olá Vue!'
    },
    methods: {
        reverseMessage: function(){
            this.message3 = this.message3.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message4: 'Olá Vue!'
    }
});

Vue.component('todo-item', {
    // O componente todo-item agora aceita uma
    // "prop" , que é como um atributo personalizado.
    // Esta propriedade foi chamada de "todo"
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetais'},
            { id: 1, text: 'Queijo'},
            { id: 2, text: 'Qualquer outra coisa que humanos podem comer'},
        ]
    }
});