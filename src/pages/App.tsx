import { ChangeEvent, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const App: React.VFC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <Header />
      <main>
        <input
          type="text"
          placeholder="TODOを入力"
          className="border-4 border-solid border-gray rounded-sm placeholder-white"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && text !== "") {
              const newTodos = [...todos];
              newTodos.push(text);
              setTodos([...newTodos]);
              setText("");
            }
          }}
        />
        <button
          type="button"
          className="w-8 border-4 border-solid border-gray rounded-sm"
          onClick={() => {
            if (text === "") return;
            const newTodos = [...todos];
            newTodos.push(text);
            setTodos([...newTodos]);
            setText("");
          }}
        >
          {/* 追加ボタン */}
          {"\u002B"}
        </button>
        {todos.length !== 0 ? (
          <ul>
            {todos.map((todo: string, index: number) => (
              <li key={index} className="text-base">
                <button></button>
                <span>{todo}</span>
                <button
                  className="w-8 border-4 border-solid border-gray rounded-sm"
                  onClick={() => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  {/* 削除ボタン */}
                  {"\u2716"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray">TODOを入力してください。</p>
        )}
      </main>
      <Footer />
    </>
  );
};
