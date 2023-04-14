import { AxiosError } from 'axios';

export function errorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    if (error.response?.status === 404) {
      return 'Not found';
    }

    return error.response?.data.error as string;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unexpected error';
}
