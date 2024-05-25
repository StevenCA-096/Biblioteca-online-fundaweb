import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Container, Row } from "react-bootstrap";

const Login = () => {
    return (
        <Container style={{width:"400px"}}>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Ingresar
                </Typography>
                
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 my-4">
                    <div className="mb-1 flex flex-col gap-6">
                       
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Correo
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Contraseña
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    
                    <Button className="mt-5" fullWidth>
                        Iniciar sesion
                    </Button>
                    
                </form>
            </Card>

        </Container>
    );
}

export default Login