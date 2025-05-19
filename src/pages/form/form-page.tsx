import { Controller, useForm } from "react-hook-form";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

interface FormData {
  professionId: string;
  date: string;
}

export function FormPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Box bgcolor="#f8f9fa" component="main">
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper elevation={0} sx={{ p: 4, width: "100%", border: "1px solid rgba(0, 0, 0, 0.23)", maxWidth: "28rem" }}>
          <Typography variant="h5" component="h1" gutterBottom fontWeight={700}>
            Formulário
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
            <Controller
              name="professionId"
              control={control}
              rules={{ required: "Este campo é obrigatório" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Profissão"
                  fullWidth
                  margin="normal"
                  error={!!errors.professionId}
                  helperText={errors.professionId?.message}
                />
              )}
            />
            <Controller
              name="date"
              control={control}
              rules={{ required: "Este campo é obrigatório" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Data"
                  type="date"
                  fullWidth
                  margin="normal"
                  slotProps={{ inputLabel: { shrink: true } }}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, textTransform: "none", fontWeight: "bold" }}
            >
              Enviar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
