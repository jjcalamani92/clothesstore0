import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FC, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { Category } from "../../../src/interfaces";


interface FormData {
  _id?: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  featured: any;
  sections: any;
  category: any;
}
interface Props {
  category: any
  // category: Category
}


export const FormCategory: FC<Props> = ({ category }) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormData>({
    defaultValues: category,
  })
  const onSubmit = async (form: FormData) => {
    // console.log('hola')
    // let { featured, sections, _id, href, category, ...data } = form
    // const dat = { ...data, name: form.name.trim(), category: form._id }

    // if (router.query.category === 'new') {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Categoría Creada',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    //   await axios.put(`${process.env.APIS_URL}/api/site/addcategory/${process.env.API_SITE}`, dat)
    //   router.replace('/admin/sites')
    // } else {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Categoría Actualizada',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    //   await axios.put(`${process.env.APIS_URL}/api/site/updatecategory/${process.env.API_SITE}`, dat)
    //   router.replace('/admin/sites')
    // }
  }

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    // if (!target.files || target.files.length === 0) {
    //   return;
    // }
    // try {
    //   for (const file of target.files) {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     const { data } = await axios.post(`${process.env.APIUP_URL}/api/upload/image`, formData)
    //     setValue('imageSrc', (getValues('imageSrc'), data.url), { shouldValidate: true })
    //   }
    // } catch (error) {
    //   console.log({ error })
    // }
    console.log('file')
  }


  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-3 lg:max-w-none">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:shadow sm:rounded-md sm:overflow-hidden">
                <div className=" bg-white sm:p-6">

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
                    <div className="col-span-2">
                      <div>
                        <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <input
                          className="my-2 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm text-xs md:text-sm  rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('name', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.name && <span className="text-xs md:text-sm text-red-500">{errors.name.message}</span>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="description" className="block text-xs md:text-sm font-medium text-gray-700">
                          Descripción
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            className="shadow-sm focus:ring-red-500 focus:border-red-500 my-2 block w-full text-xs md:text-sm border border-gray-300 rounded-md p-1"
                            {...register('description', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 3 caracteres' }
                            })}
                          />
                        </div>
                        <div>
                          {errors.description && <span className="text-xs md:text-sm text-red-500">{errors.description.message}</span>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="imageAlt" className="block text-xs md:text-sm font-medium text-gray-700">
                          Descripción de la Imagen
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            className="shadow-sm focus:ring-red-500 focus:border-red-500 my-2 block w-full text-xs md:text-sm border border-gray-300 rounded-md p-1"
                            {...register('imageAlt', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 3 caracteres' }
                            })}
                          />
                        </div>
                        <div>
                          {errors.imageAlt && <span className="text-xs md:text-sm text-red-500">{errors.imageAlt.message}</span>}
                        </div>
                      </div>



                    </div>

                    <div className="col-span-1">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Imagen</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex justify-center p-5 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex flex-col text-xs md:text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-red-500 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                              >
                                <span>Cargar un archivo</span>
                                <input id="file-upload" name="file-upload" accept="image/png, image/gif, image/jpeg, image/webp" type="file" className="sr-only" onChange={onFileSelected} />
                              </label>
                              <p className="pl-1">o arrastrar y soltar</p>
                            </div>
                            <p className="text-xs md:text-sm text-gray-500">PNG, JPG, GIF hasta 5MB</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className=" rounded-lg overflow-hidden leading-none">
                            <Image
                              src={getValues('imageSrc')}
                              alt="image"
                              height={300}
                              width={300}
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white text-right mt-3">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs md:text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      {
                        category._id ? `Actualizar` : `Crear`
                      }
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
