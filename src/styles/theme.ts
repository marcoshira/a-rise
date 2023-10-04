export const theme = {
    colors: {
        primaryColor: 'hsl(0, 36%, 70%)',
        secondaryColor: 'hsl(0, 93%, 68%)',
        thirdColor: 'hsl(0, 38%, 43%)',
        neutral: 'hsl(0, 6%, 24%)',
        white: '#FFFFFF',
        mediumGray: '#DDDDDD',
        crimson: 'crimson',
        blue: 'rgb(36, 36, 209)',
        navy: '#0A1128',
        black: '#000000',
        pink: 'rgb(231, 171, 181)',
        purple: 'rgb(133, 21, 133)',
        orange: 'rgb(230, 159, 28)',
        green: 'rgb(29, 161, 29)',
        lightBlue: 'rgb(146, 195, 211)',
        yellow: 'rgb(207, 207, 45)',
        brown: 'rgb(116, 45, 45)',
        grey: '#b9b9b9',
        darkGrey: '#979797',
        bgWhite: '#efefef',
    },
    font: {
        family: {
            default: "'Josefin Sans', sans-serif",
        },
        sizes: {
            xsmall: '0.8rem',
            small: '1.6rem',
            gtsmall: '1.8rem',
            ltmedium: '2rem',
            medium: '2.4rem',
            ltlarge: '2.8rem',
            large: '3.2rem',
            xlarge: '4.0rem',
            xxlarge: '4.8rem',
            huge: '5.6rem',
            xhuge: '6.4rem',
        },
    },
    media: {
        lteBig: '(max-width: 1336px)',
        gteBig: '(min-width: 1336px)',
        lteMedium: '(max-width: 768px)',
        gteMedium: '(min-width: 768px)',
        lteSmall: '(max-width: 440px)',
        gteSmall: '(min-width: 440px)',
        mobile: '(max-width: 440px)',
        ipad: '(max-width: 1023px)',
        monitor: '(min-width: 1540px)',
    },
    spacings: {
        xxsmall: '0.4rem',
        xsmall: '0.8rem',
        small: '1.6rem',
        medium: '2.4rem',
        large: '3.2rem',
        xlarge: '4.0rem',
        xxlarge: '4.8rem',
        huge: '5.6rem',
        xhuge: '6.4rem',
    },
    frameSizes: {
        xtiny: '3rem',
        tiny: '8rem',
        xxsmall: '12rem',
        ltxsmall: '15rem',
        xsmall: '18rem',
        ltsmall: '21rem',
        small: '24rem',
        gtsmall: '28rem',
        smallMedium: '32rem',
        ltmedium: '36rem',
        medium: '40rem',
        gtmedium: '48rem',
        largeMedium: '56rem',
        large: '64rem',
        xlarge: '80rem',
        xxlarge: '104rem',
        max: '120rem',
    },
    transitions: {
        fastest: 'all 100ms ease-in-out',
        faster: 'all 200ms ease-in-out',
        fast: 'all 300ms ease-in-out',
        normal: 'all 500ms ease-in-out',
        slow: 'all 600ms ease-in-out',
        slower: 'all 800ms ease-in-out',
        slowest: 'all 1s ease-in-out',
    },
    gradients: {
        primary: 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        secondary:
            'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        third: 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 64%, 64%))',
    },
} as const;
