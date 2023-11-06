import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Textarea,
    VStack,
    Spinner
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alertContext";



const ContactForm = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: '', 
            email: '', 
            type: 'hireMe', 
            comment: '',
        },
        onSubmit: (values) => {
            const url = ''
            submit(url, values)
            console.log(values)
            
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"), 
            email: Yup.string().required("Required").email('Invalid email address'), 
            type: Yup.string().required("Required"), 
            comment: Yup.string().required("Required").min(25, 'Must be at least 25 characters')
        }),
    });

    useEffect(() => {

        if (response) {
            if (response.type == 'success') {
                formik.resetForm()
            }
            onOpen(response.type, response.message)
        }
    }, [response])
    

    return (

        <Box as="form" onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                    <Select 
                        id="type" 
                        name="type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}
                        >
                        <option value="hireMe">Freelance project proposal</option>
                        <option value="openSource">Open source consultancy session</option>
                        <option value="other">Other</option>
                    </Select>
                </FormControl>
                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Textarea
                        id="comment"
                        name="comment"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comment}
                        height={250}
                    />
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" disabled={isLoading} colorScheme="purple" width="full">
                {isLoading && <div style={{paddingRight: '10px'}}>
                    <Spinner/>
                </div>}
                    Submit
                </Button>
            </VStack>
        </Box>
    );
};

export default ContactForm;
