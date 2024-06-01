import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Container, Row } from "react-bootstrap";
import { QueryClient, useMutation } from "react-query";
import { createCustomer } from "../../../services/customerService";
import Swal from "sweetalert2";
import { useRef } from "react";
const Register = () => {
    const queryClient = new QueryClient()

    const name = useRef("")
    const surmane1 = useRef("")
    const surname2 = useRef("")
    const phonenumber = useRef("")
    const email = useRef("")
    const password = useRef("")

    const registerMutation = useMutation('costumers', createCustomer, {
        onSettled: ()=>queryClient.invalidateQueries('costumers'),
        onSuccess: () => {
            Swal.fire({ 
                title: "Registro exitoso.",
                icon: 'success'
            })
        },
        onError: () => {
            Swal.fire({
                title: "El registro fracaso.",
                icon: "error"
            }).then(
                ()=>{window.location = '/'}
            )
        }

    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData.get('email'))

        let newCustomer = {
            name: formData.get('name'),
            surname1: formData.get('surname1'),
            surname2: formData.get('surname2'),
            mobileNumber: formData.get('phonenumber'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(newCustomer)

        let result = registerMutation.mutateAsync(newCustomer)
        console.log(result)
    }

    return (
        <Container style={{ width: "400px" }}>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Registrarme
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    A continuacion, llene la informacion para su registro
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <div className="grid grid-cols-12">
                            <div>
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Nombre
                                </Typography>
                                <Input
                                    ref={name}
                                    id="name"
                                    name="name"
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Primer apellido
                                </Typography>
                                <Input
                                    ref={surmane1}
                                    required
                                    id="surname1"
                                    name="surname1"
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}

                                />
                            </div>
                        </div>

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Segundo apellido
                        </Typography>
                        <Input
                            ref={surname2}
                            required
                            id="surname2"
                            name="surname2"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}

                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Telefono
                        </Typography>
                        <Input
                            ref={phonenumber}
                            required
                            id="phonenumber"
                            name="phonenumber"
                            size="lg"
                            type="number"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}

                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Correo
                        </Typography>
                        <Input
                            ref={email}
                            required
                            id="email"
                            name="email"
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
                            ref={password}
                            required
                            id="password"
                            name="password"
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <Button className="mt-5" fullWidth type="submit">
                        Registrarme
                    </Button>

                </form>
            </Card>

        </Container>
    );
}

export default Register