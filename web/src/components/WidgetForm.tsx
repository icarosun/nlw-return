import { CloseButton } from "./CloseButton";

const feedbackTypes = {
  BUG: {
    title: 'Problema'
  },
  IDEA: {
    title: 'Ideia'
  },
  OTHER: {
    title: 'Outro'
  }

};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl nb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex pv-8 gap-2 w-full">

      </div>

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  );
}