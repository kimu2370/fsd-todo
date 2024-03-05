import { Button } from "@/widgets/ui/button";
import { Input } from "@/widgets/ui/input";
import { useEffect, useState } from "react";
import useTodoStore from "../todoList/useTodoStore";

const isValidText = (text: string) => text.length > 0;

const InputText = () => {
  const [, TodoAPI] = useTodoStore();
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(isValidText(text));
  }, [text]);

  const handleAddTodo = () => {
    if (!isValidText(text)) return; // 계산
    TodoAPI.addTodo(text); // 액션
    setText(""); // UI 상태를 업데이트하는 부수효과
  };

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        value={text}
        placeholder="할 일을 등록해주세요."
        onChange={(e) => setText(e.target.value)}
        className="text-black"
      />
      {showButton && (
        <Button
          className="text-black border border-black"
          onClick={handleAddTodo}
        >
          추가
        </Button>
      )}
    </div>
  );
};

export default InputText;
