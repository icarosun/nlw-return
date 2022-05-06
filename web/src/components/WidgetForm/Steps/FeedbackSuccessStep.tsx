import { CloseButton } from "../../CloseButton";
import successImageUrl from "../../../assets/success.svg";

interface onFeedbackSentProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
}: onFeedbackSentProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col py-10 w-[304px] items-center">
        <img src={successImageUrl} alt="Feedback enviado com sucesso!" />

        <span className="text-xl mt-2">
          Agradecemos o feedback!
        </span>

        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onFeedbackRestartRequested}
        >
          Quero enviar outro
        </button>

      </div>
    </>
  );
}
