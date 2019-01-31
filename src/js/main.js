jQuery(function ($) {
  const todos = [];
  const list = $('.todos');
  const input = $('input');

  function addTodo (value) {
    todos.push(value);
    renderTodos();
  }

  function renderTodos () {
    list.empty();
    $.each(todos, function (i) {
      list.prepend(`
        <li>
        <span>
          ${this}
          </span>

            <button class="delete" data-index=${i}>x</button>
        
        </li>
        `);
    });
  }

  $("ul").on("click", "span", function(){
    $(this).toggleClass("completed");
  });

  function removeTodo (index) {
    todos.splice(index, 1);
    renderTodos();
  }
  
  input.on('change', function (e) {
    addTodo(this.value);  
    this.value = '';  //clear input line 
  });

  $(document).on('click', '.delete', function () {
    const index = $(this).data('index');
    removeTodo(index);
  })
});

