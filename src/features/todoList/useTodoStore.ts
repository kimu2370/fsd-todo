import TodoAPI from "@/entities/todo";
import { Todo } from "@/entities/todo/model";
import { useSyncExternalStore } from "react";

const useTodoStore = (): [Todo[], typeof TodoAPI] => {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      TodoAPI.subscribe(onStoreChange);
      return () => TodoAPI.unsubscribe(onStoreChange);
    },
    () => TodoAPI.getTodos(),
  );
  return [snapshot, TodoAPI];
};

export default useTodoStore;
