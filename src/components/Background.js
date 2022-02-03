import React from 'react'
import { Box } from '@skynexui/components';
import appConfig from '../../config.json';

export default function Background ({ children }) {
    return (
        <Box
            styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[700],
            backgroundImage: 'url(https://branding.ifas.ufl.edu/media/brandingifasufledu/virtual-backgrounds/GatorEyes.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}
        >
            {children}
        </Box>
    )
}