'use server';

import { updateCoffeeStore } from '@/lib/airtable';

type State = {
  id: string;
  voting: number;
};

export const upvoteAction = async (state: State, formData: FormData) => {
  console.log('upvote action');

  const { id } = state;

  const data = await updateCoffeeStore(id);
  console.log({ data });

  if (data) {
    return {
      voting: data.length > 0 ? data[0].voting : 0,
      id,
    };
  }

  return state;  // Return the current state if no data
};
