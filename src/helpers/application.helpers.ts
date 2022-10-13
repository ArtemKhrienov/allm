import { ReactNode } from 'react';

export type TWithChildren = {
  children?: ReactNode;
}

export const getEnvVariable = (name: string) => process.env[name] || '';