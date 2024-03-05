import Observer from "@/shared/lib/observer";
import { Todo } from "./types";

class TodoModel extends Observer {
  private todos: Todo[] = [];

  // 조회
  getTodos(): Todo[] {
    return this.todos;
  }

  // 추가
  addTodo(todo: Todo): void {
    this.todos = [...this.todos, todo];
    this.notifyObservers();
  }

  // 수정
  updateTodo(id: string, newText: string): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.text = newText;
    }
    this.notifyObservers();
  }

  // 삭제
  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notifyObservers();
  }

  // 토글 완료
  toogleTodoCompletion(id: string): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    this.notifyObservers();
  }
}

export const todoModel = new TodoModel();
