import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import banner from '../FormContact/assets/banner-form-contact.jpg'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const FormContact = () => {

	const { handleSubmit, register, formState: { errors }, reset } = useForm()

	const [showThankYouMessage, setShowThankYouMessage] = useState(false)
	const [submittedName, setSubmittedName] = useState('')

	const contactRerefence = collection(db, 'contact')

	const onSubmit = (data) => {
		setShowThankYouMessage(true)
		setSubmittedName(data.name)

		setTimeout(() => {
			setShowThankYouMessage(false)
		}, 3000)

		const contact = {
            data,
            date: new Date()
        }

		addDoc(contactRerefence, contact)
        reset()
	}

	return (
		<section className=' px-3 py-20 text-[#fff] flex justify-center'>
			<div className=' hidden lg:block'>
				<img src={banner} alt="reloj en tonos dorados con negro" className=' w-64 h-[38rem] object-cover' />
			</div>
			<form method='post' className=' w-[95%]  md:w-[70%] lg:w-[40%]' onSubmit={handleSubmit(onSubmit)}>
				<h2 className=' text-3xl text-center pb-3 text-[#ecbb8f]'>Contacto</h2>
				<div className='flex flex-col space-y-2 mb-6  lg:pl-4'>
					<label htmlFor="name">Nombre:</label>
					<input
						className='py-2 outline-none bg-[#020202] border border-t-[#020202] border-x-[#020202]  border-b-[#ecbb8f]'
						type="text"
						placeholder='Ingrese su nombre'
						name='name'
						autoComplete='off'
						id="name"
						{...register('name', {
							required: 'Este campo es obligatorio',
							maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
							minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
						})}
					/>
					<span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.name && errors.name.message}</span>
				</div>
				<div className=' flex flex-col space-y-2 mb-6 lg:pl-4' >
					<label htmlFor="email">Correo electrónico:</label>
					<input
						className='py-2 outline-none bg-[#020202] border border-t-[#020202] border-x-[#020202]  border-b-[#ecbb8f]'
						type="email"
						placeholder='Ingrese su correo electrónico'
						name='email'
						autoComplete='off'
						id="email"
						{...register('email', {
							required: 'Este campo es obligatorio',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Correo electrónico inválido',
							},
						})}
					/>
					<span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.email && errors.email.message}</span>
				</div>
				<div className=' flex flex-col space-y-2 mb-6 lg:pl-4'>
					<label htmlFor="subject">Asunto:</label>
					<input
						className='py-2 outline-none bg-[#020202] border border-t-[#020202] border-x-[#020202]  border-b-[#ecbb8f]'
						type="text"
						placeholder='Ingrese un asunto'
						name='subject'
						autoComplete='off'
						id="subject"
						{...register('subject', {
							required: 'Este campo es obligatorio',
							maxLength: { value: 40, message: 'El asunto no debe superar los 40 caracteres' },
							minLength: { value: 3, message: 'El nombre debe tener entre 3 y 40 caracteres' },
						})}
					/>
					<span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.subject && errors.subject.message}</span>
				</div>
				<div className=' flex flex-col space-y-2 mb-6  lg:pl-4'>
					<label htmlFor="message">Mensaje:</label>
					<textarea
						className='py-2 outline-none bg-[#020202] border border-t-[#020202] border-x-[#020202] resize-none border-b-[#ecbb8f]'
						autoComplete='off'
						name='message'

						placeholder='Ingrese su mensaje'
						rows={5}
						id="message"
						{...register('message', {
							required: 'Este campo es obligatorio',
							maxLength: { value: 250, message: 'El mensaje no debe superar los 250 caracteres' },
						})}
					/>
					<span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.message && errors.message.message}</span>
				</div>
				{showThankYouMessage && (
					<div className="bg-[#218526] text-[#fff] p-2 rounded-md text-center mb-4">
						<p>¡Gracias {submittedName} por contactarnos!</p>
					</div>
				)}
				<button type="submit" className='bg-[#222222] text-[#FFF] py-2 px-4 rounded-md lg:ml-4'>Enviar</button>
			</form>
		</section>
	)
}

export default FormContact