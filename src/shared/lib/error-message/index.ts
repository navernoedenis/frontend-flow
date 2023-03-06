import { AxiosError } from 'axios';

export function errorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return error.response?.data.error as string;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unexpected error';
}
