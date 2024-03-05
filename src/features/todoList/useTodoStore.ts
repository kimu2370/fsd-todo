import { TodoAPI } from "@/entities/todo/api";
import { Todo } from "@/entities/todo/types";
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
