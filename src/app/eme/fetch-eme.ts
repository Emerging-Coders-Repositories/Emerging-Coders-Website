import { useEffect, useState } from "react";

export interface UseEmeResult {
  generation: string,
  isLoading: boolean,
  isError: boolean,
}

export async function fetchEme(prompt: string): Promise<{ generation: string }> {

  return {generation: "eme default test output :)"};

  const res = await fetch('/api/eme', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) throw new Error(`eme responded with status ${res.status}`);

  const body = await res.json();
  const generation = typeof body === 'string' ? body : body?.generation ?? String(body);
  return { generation };
}