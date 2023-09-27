import React from "react"; 
import { useState } from "react";
import axios from "axios"; 
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function ContactComponent() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [formError, setFormError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmitting(true);
        axios.post(
            process.env.NEXT_PUBLIC_SERVER_URL, 
            {
                email: email,
                subject: subject,
                message: message,
            }
        ).then((response) => {
            setIsFormSubmitting(false);
            setIsFormSubmitted(true);
        })
        .catch ((error) => {
            console.log(error);
            setIsFormSubmitting(false);
            setFormError(true);
        }); 
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }; 

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }; 

    return (
        <div>
                <section class="bg-white dark:bg-gray-900 min-h-screen">
                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                            We'd love to hear from you! Send us a message using the form below and a member from our executive board will get back to you as soon as possible.
                        </p>
                        <form class="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input onChange={handleEmailChange} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input onChange={handleSubjectChange} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know what you would like to discuss" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea onChange={handleMessageChange} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <Button onPress={onOpen} type="submit" color="secondary" size="md" isLoading={isFormSubmitting} spinnerPlacement="end">Send Message</Button>
                            {isFormSubmitted && (
                                <Modal isOpen={onOpen} onOpenChange={onOpenChange} hideCloseButton>
                                <ModalContent>
                                {(onClose) => (
                                    <>
                                    <ModalHeader className="flex flex-col gap-1">Your message was sent!</ModalHeader>
                                    <ModalBody>
                                        <p> 
                                        Thank you for reaching out to us! We will get back to you as soon as possible.
                                        </p>
                                        <p>
                                        If you would like to learn more about our organization, please visit our <a class="text-secondary-400" href="/">home page </a>to learn more about us! 
                                        </p>
                                        <p>
                                        If a member of our team does not get back to you within 48 hours, please email us <a class="text-secondary-400" href="mailto:nuemergingcoders@gmail.com">directly</a>
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onClick={() => setIsFormSubmitted(false)}>
                                        Close
                                        </Button>
                                        <Button color="secondary" onPress={onClose}>
                                            <a href="/">Home</a>
                                        </Button>
                                    </ModalFooter>
                                    </>
                                )}
                                </ModalContent>
                                </Modal>
                            )}
                            {formError && (
                                <Modal isOpen={onOpen} onOpenChange={onOpenChange} hideCloseButton>
                                <ModalContent>
                                {(onClose) => (
                                    <>
                                    <ModalHeader className="flex flex-col gap-1">There was an issue with sending your message</ModalHeader>
                                    <ModalBody>
                                        <p>
                                        Please email us <a class="text-secondary-400" href="mailto:nuemergingcoders@gmail.com">directly</a>
                                        </p>
                                        <p>
                                        We apologize for the inconvenience.
                                        </p>
                                        <p>
                                        - The Emerging Coders Team
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onClick={() => setFormError(false)}>
                                        Close
                                        </Button>
                                        <Button color="secondary" onPress={onClose}>
                                            <a href="/">Home</a>
                                        </Button>
                                    </ModalFooter>
                                    </>
                                )}
                                </ModalContent>
                                </Modal>
                            )}
                        </form>
                    </div>
                </section>
        </div>
    );
};