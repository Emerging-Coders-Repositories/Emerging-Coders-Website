import { EME_API_BASE_URL } from '@/constants/eme';

export interface UseEmeResult {
  generation: string;
  isLoading: boolean;
  isError: boolean;
}

export async function fetchEmeResponse(
  message: string
): Promise<ReadableStream<Uint8Array>> {
  const response = await fetch(`${EME_API_BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!response.ok)
    throw new Error(`eme responded with status ${response.status}`);

  if (!response.body) throw new Error(`No response body`);

  return response.body;

  // const body = await res.json();
  // const generation = typeof body === 'string' ? body : body?.generation ?? String(body);
  // return { generation };
}

export async function fetchEmeHealth(): Promise<{ status: string }> {
  const response = await fetch(`${EME_API_BASE_URL}/health`);

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}
