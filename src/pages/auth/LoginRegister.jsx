import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { Container } from "react-bootstrap";
import Login from "./components/login";
import Register from "./components/register";

export const LoginRegister = () => {
    const data = [
        {
            label: "Iniciar Sesion",
            value: "login",
            desc: <Login/>,
        },
        {
            label: "Registrarme",
            value: "register",
            desc: <Register/>,
        },
    ];

    return (
        <Container className="text-center my-5">
            <Card className="w-full max-w-[24rem]">
                <CardHeader
                    color="gray"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center px-4 py-8 text-center card"
                >
                    <Typography variant="h3" color="black" className="p-5">
                        Bienvenido!
                    </Typography>
                </CardHeader>
                <Tabs id="custom-animation" value="login">
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </Card>
        </Container>
    );
}