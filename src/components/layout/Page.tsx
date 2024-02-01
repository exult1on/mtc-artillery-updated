import Box from '@mui/joy/Box';
import React from 'react';

import Footer from '../atoms/Footer';
import Theme from '../utils/Theme';

import type { PropsWithChildren } from 'react';

export default function Page({ children }: PropsWithChildren) {
  return (
    <Theme>
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: '1fr min-content',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,

          padding: 2,
          minHeight: '100svh',
          width: '100svw',
        }}
      >
        <Box>{children}</Box>

        <Footer />
      </Box>
    </Theme>
  );
}
