import { Box, Typography, useTheme } from "@mui/material";

export default function MySkills() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          pt: 5,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-typescript-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>TypeScript</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-javascript-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>JavaScript</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-react-original colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>React</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i className="devicon-nextjs-line" style={{ fontSize: "6rem" }}></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Next.js</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-materialui-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Material UI</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-tailwindcss-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Tailwind CSS</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-html5-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>HTML5</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-css3-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>CSS3</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-storybook-plain"
            style={{ fontSize: "6rem" }}
          ></i>

          <Typography sx={{ fontSize: "1.3rem" }}>Storybook</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          pt: 5,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-python-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Python</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-flask-original colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Flask</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-express-original colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Express.js</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-nestjs-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>NestJS</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-graphql-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>GraphQL</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-postgresql-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>PostgreSQL</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-firebase-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Firebase</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-git-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Git</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          <i
            className="devicon-jira-plain colored"
            style={{ fontSize: "6rem" }}
          ></i>
          <Typography sx={{ fontSize: "1.3rem" }}>Jira</Typography>
        </Box>
      </Box>
    </Box>
  );
}
