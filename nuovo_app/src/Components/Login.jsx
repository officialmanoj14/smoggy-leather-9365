import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    useColorModeValue,
    
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/signup');    
    }

    return (
        <>
            <Flex>
                <Stack mx={"auto"} maxW={"lg"}>
                    <Box
                        bg={useColorModeValue("white", "gray.700")}
                        pt='1.56rem'
                    >
                        <Stack >
                            <form>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" borderRadius={0} borderColor='black' placeholder="Enter email"/>
                                </FormControl>
                                <FormControl id="password" pt='1rem'>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" borderRadius={0} borderColor='black' placeholder="Enter password"/>
                                </FormControl>
                                <Stack>

                                    <Button
                                        bg={"white"}
                                        color={"#213629"}
                                        _hover={{
                                            bg: "#213629",
                                            color: "white"
                                        }}
                                        fontSize={'1rem'}
                                        marginTop={'1.90rem'}
                                        border={'1px solid red'}
                                        borderRadius={0} borderColor='black'
                                        onClick={() => alert(' Successfully Login')}
                                    >
                                        SIGN IN
                                    </Button>
                                    <Stack
                                        direction={{ base: "column", sm: "row" }}
                                        align={"start"}
                                        justify={"space-between"}
                                    >
                                        <Checkbox >Remember me</Checkbox>
                                        <Link color={"blue.400"}>Forgot password?</Link>
                                    </Stack>
                                </Stack>
                            </form>
                            <Box>
                                <Button
                                    bg={"white"}
                                    color={"#213629"}
                                    _hover={{
                                        bg: "#213629",
                                        color: "white"
                                    }}
                                    w={'100%'}
                                    marginTop={'1.50rem'}
                                    border={'1px solid red'}
                                    borderRadius={0} borderColor='black'
                                    fontSize={'1rem'}
                                    onClick={handleSignUp}
                                    
                                >
                                    CREATE AN ACCOUNT
                                </Button>
                            </Box>
                            <Box fontSize={'.87rem'} fontWeight={'bold'} textAlign={'center'} pt={'1rem'}>
                                <p >CLUB members can now manage their account by signing in through Nuovo Shops above. <Link borderBottom={'1px solid #213629'}>Learn More</Link></p>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}
