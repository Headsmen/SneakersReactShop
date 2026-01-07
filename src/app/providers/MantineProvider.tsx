import { MantineProvider as Provider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import type { ReactNode } from 'react';

const theme = createTheme({
  primaryColor: 'green',
  colors: {
    green: [
      '#e8f5e9',
      '#c8e6c9',
      '#a5d6a7',
      '#81c784',
      '#66bb6a',
      '#4caf50',
      '#43a047',
      '#388e3c',
      '#2e7d32',
      '#1b5e20'
    ]
  },
  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  defaultRadius: 'md'
});

interface MantineProviderProps {
  children: ReactNode;
}

export const MantineProvider = ({ children }: MantineProviderProps) => {
  return (
    <Provider theme={theme}>
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </Provider>
  );
};
