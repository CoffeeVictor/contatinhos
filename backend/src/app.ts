import { PORT } from "./config/serverConfig";
import { server } from "./server";

server.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});