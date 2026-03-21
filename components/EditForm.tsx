import { addReview, removeReview } from '@/lib/actions/review';

type Props = {
  review: {
    id: string;
    read: string;
    memo?: string;
  };
};

export default function EditForm({ review: { id, read, memo } }: Props) {
  return (
    <form action={addReview}>
      <input type="hidden" name="id" defaultValue={id} />
      <div className="mb-3">
        <label className="font-bold" htmlFor="read">
          読了日:
        </label>
        <input
          type="date"
          id="read"
          name="read"
          className="block rounded border-2 border-gray-600 bg-gray-100 focus:border-red-500 focus:bg-white focus:outline-none"
          defaultValue={read}
        />
      </div>
      <div className="mb-3">
        <label className="font-bold" htmlFor="memo">
          感想:
        </label>
        <textarea
          id="memo"
          name="memo"
          rows={3}
          className="block w-full rounded border-2 border-gray-600 bg-gray-100 focus:border-red-500 focus:bg-white focus:outline-none"
          defaultValue={memo}
        ></textarea>
      </div>
      <button
        type="submit"
        className="mr-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
      >
        登録
      </button>
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-red-500"
        formAction={removeReview}
      >
        削除
      </button>
    </form>
  );
}
