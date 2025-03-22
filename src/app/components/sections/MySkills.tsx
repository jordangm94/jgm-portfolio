import { Box, Typography, useTheme } from "@mui/material";

export default function MySkills() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        id="Icon-Container"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: { xs: "300px", sm: "500px", md: "700px", lg: "1200px" },
          mx: "auto",
          gap: 4,
          pt: 5,
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
          "& i": {
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-typescript-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>TypeScript</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-javascript-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>JavaScript</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-react-original colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>React</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-nextjs-line"></i>
          <Typography sx={{ fontSize: "inherit" }}>Next.js</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-materialui-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Material UI</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-tailwindcss-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Tailwind CSS</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-html5-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>HTML5</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-css3-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>CSS3</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-storybook-plain"></i>

          <Typography sx={{ fontSize: "inherit" }}>Storybook</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-python-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Python</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-flask-original colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Flask</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-express-original colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Express.js</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-nestjs-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>NestJS</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-graphql-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>GraphQL</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-postgresql-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>PostgreSQL</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-firebase-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Firebase</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-git-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Git</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-jira-plain colored"></i>
          <Typography sx={{ fontSize: "inherit" }}>Jira</Typography>
        </Box>
      </Box>
    </Box>
  );
}
