jQuery(function($){const todos=[];const list=$('.todos');const input=$('input');function addTodo(value){todos.push(value);renderTodos();}function renderTodos(){list.empty();$.each(todos,function(i){list.prepend(`
        <li>
        <span>
          ${this}
          </span>

            <button class="delete" data-index=${i}>x</button>
        
        </li>
        `);});}$("ul").on("click","span",function(){$(this).toggleClass("completed");});function removeTodo(index){todos.splice(index,1);renderTodos();}input.on('change',function(e){addTodo(this.value);this.value='';//clear input line 
});$(document).on('click','.delete',function(){const index=$(this).data('index');removeTodo(index);});});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsInRvZG9zIiwibGlzdCIsImlucHV0IiwiYWRkVG9kbyIsInZhbHVlIiwicHVzaCIsInJlbmRlclRvZG9zIiwiZW1wdHkiLCJlYWNoIiwiaSIsInByZXBlbmQiLCJvbiIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlVG9kbyIsImluZGV4Iiwic3BsaWNlIiwiZSIsImRvY3VtZW50IiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQyxTQUFVQyxDQUFWLENBQWEsQ0FDbEIsS0FBTUMsQ0FBQUEsS0FBSyxDQUFHLEVBQWQsQ0FDQSxLQUFNQyxDQUFBQSxJQUFJLENBQUdGLENBQUMsQ0FBQyxRQUFELENBQWQsQ0FDQSxLQUFNRyxDQUFBQSxLQUFLLENBQUdILENBQUMsQ0FBQyxPQUFELENBQWYsQ0FFQSxRQUFTSSxDQUFBQSxPQUFULENBQWtCQyxLQUFsQixDQUF5QixDQUN2QkosS0FBSyxDQUFDSyxJQUFOLENBQVdELEtBQVgsRUFDQUUsV0FBVyxHQUNaLENBRUQsUUFBU0EsQ0FBQUEsV0FBVCxFQUF3QixDQUN0QkwsSUFBSSxDQUFDTSxLQUFMLEdBQ0FSLENBQUMsQ0FBQ1MsSUFBRixDQUFPUixLQUFQLENBQWMsU0FBVVMsQ0FBVixDQUFhLENBQ3pCUixJQUFJLENBQUNTLE9BQUwsQ0FBYzs7O1lBR1IsSUFBSzs7O2dEQUcrQkQsQ0FBRTs7O1NBTjVDLEVBVUQsQ0FYRCxFQVlELENBRURWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVksRUFBUixDQUFXLE9BQVgsQ0FBb0IsTUFBcEIsQ0FBNEIsVUFBVSxDQUNwQ1osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxXQUFSLENBQW9CLFdBQXBCLEVBQ0QsQ0FGRCxFQUlBLFFBQVNDLENBQUFBLFVBQVQsQ0FBcUJDLEtBQXJCLENBQTRCLENBQzFCZCxLQUFLLENBQUNlLE1BQU4sQ0FBYUQsS0FBYixDQUFvQixDQUFwQixFQUNBUixXQUFXLEdBQ1osQ0FFREosS0FBSyxDQUFDUyxFQUFOLENBQVMsUUFBVCxDQUFtQixTQUFVSyxDQUFWLENBQWEsQ0FDOUJiLE9BQU8sQ0FBQyxLQUFLQyxLQUFOLENBQVAsQ0FDQSxLQUFLQSxLQUFMLENBQWEsRUFBYixDQUFrQjtBQUNuQixDQUhELEVBS0FMLENBQUMsQ0FBQ2tCLFFBQUQsQ0FBRCxDQUFZTixFQUFaLENBQWUsT0FBZixDQUF3QixTQUF4QixDQUFtQyxVQUFZLENBQzdDLEtBQU1HLENBQUFBLEtBQUssQ0FBR2YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLE9BQWIsQ0FBZCxDQUNBTCxVQUFVLENBQUNDLEtBQUQsQ0FBVixDQUNELENBSEQsRUFJRCxDQTVDSyxDQUFOIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICBjb25zdCB0b2RvcyA9IFtdO1xyXG4gIGNvbnN0IGxpc3QgPSAkKCcudG9kb3MnKTtcclxuICBjb25zdCBpbnB1dCA9ICQoJ2lucHV0Jyk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvZG8gKHZhbHVlKSB7XHJcbiAgICB0b2Rvcy5wdXNoKHZhbHVlKTtcclxuICAgIHJlbmRlclRvZG9zKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJUb2RvcyAoKSB7XHJcbiAgICBsaXN0LmVtcHR5KCk7XHJcbiAgICAkLmVhY2godG9kb3MsIGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgIGxpc3QucHJlcGVuZChgXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgJHt0aGlzfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiIGRhdGEtaW5kZXg9JHtpfT54PC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJChcInVsXCIpLm9uKFwiY2xpY2tcIiwgXCJzcGFuXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiY29tcGxldGVkXCIpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmVUb2RvIChpbmRleCkge1xyXG4gICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHJlbmRlclRvZG9zKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgYWRkVG9kbyh0aGlzLnZhbHVlKTsgIFxyXG4gICAgdGhpcy52YWx1ZSA9ICcnOyAgLy9jbGVhciBpbnB1dCBsaW5lIFxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmRlbGV0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5kYXRhKCdpbmRleCcpO1xyXG4gICAgcmVtb3ZlVG9kbyhpbmRleCk7XHJcbiAgfSlcclxufSk7XHJcblxyXG4iXX0=