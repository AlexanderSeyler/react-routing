import { createTheme } from "@mui/material/styles";

export const orangeTheme = createTheme({
palette: {
primary: { main: '#FFA500', contrastText: '#efefef' },
secondary: { main: '#3CA899', contrastText: '#ffffff' }
},
typography: {
fontFamily: 'Arial',
fontSize: 24,
h1: { fontSize: 10 }
},
shape: { borderRadius: 0 },
components: {
MuiCssBaseline: {
styleOverrides: `a { color: #3CA899; }`,
},
MuiButton: { defaultProps: { variant: 'contained' } },
MuiTextField: { defaultProps: { variant: 'filled' } }
}
});