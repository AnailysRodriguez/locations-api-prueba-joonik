import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  CircularProgress,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import type { Location } from "./types";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [locations, setLocations] = useState<Location[]>([]);
  const [filtered, setFiltered] = useState<Location[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
        },
      }),
    [darkMode]
  );

  const fetchLocations = () => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/locations`, {
        headers: { "x-api-key": import.meta.env.VITE_API_KEY },
      })
      .then((res) => {
        setLocations(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching locations:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    const filtered = locations.filter((loc) =>
      loc.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filtered);
  }, [search, locations]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🌍 Sedes Disponibles
          </Typography>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2} justifyContent="space-between" mb={3}>
          <Grid item xs={12} md={9}>
            <TextField
              label="Buscar por nombre"
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              startIcon={<RefreshIcon />}
              onClick={fetchLocations}
              fullWidth
              sx={{ height: "100%" }}
            >
              Recargar
            </Button>
          </Grid>
        </Grid>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={6}>
            <CircularProgress />
          </Box>
        ) : filtered.length === 0 ? (
          <Typography textAlign="center" mt={6}>
            No se encontraron sedes.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((loc) => (
              <Grid item xs={12} sm={6} md={4} key={loc.code}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={loc.image}
                    alt={loc.name}
                    style={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {loc.name}
                    </Typography>
                    <Typography variant="body2">
                      Fecha: {
                        loc.creationDate
                          ? new Date(loc.creationDate + 'T12:00:00').toLocaleDateString('es-CO', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                            })
                          : 'Fecha no disponible'
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
